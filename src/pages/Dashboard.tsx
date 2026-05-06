import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { doc, collection, query, where, orderBy, onSnapshot, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { Coins, ShoppingCart, History, Plus } from 'lucide-react';
import { enviarComanda } from '../lib/comandas';

export const Dashboard = () => {
  const { user, loading } = useAuth();
  const [balance, setBalance] = useState<number>(0);
  const [orders, setOrders] = useState<any[]>([]);
  const [inventory, setInventory] = useState<any[]>([]);
  const [isOrdering, setIsOrdering] = useState(false);
  const [buyAmount, setBuyAmount] = useState(100);
  const [cart, setCart] = useState<any[]>([]);
  const [location, setLocation] = useState('');
  const [role, setRole] = useState<string>('guest');

  useEffect(() => {
    if (!user) return;

    // Listen to user balance
    const userRef = doc(db, 'users', user.uid);
    const unsubUser = onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        setBalance(doc.data().balance_jfish || 0);
        setRole(doc.data().role || 'guest');
      }
    });

    // Listen to orders
    const qOrders = query(
      collection(db, 'comandas'),
      where('uid', '==', user.uid),
      orderBy('fecha', 'desc')
    );
    const unsubOrders = onSnapshot(qOrders, (snapshot) => {
      const ordersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(ordersData);
    });

    // Fetch inventory for ordering
    const fetchInventory = async () => {
      const invSnap = await getDocs(collection(db, 'inventory'));
      setInventory(invSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchInventory();

    return () => {
      unsubUser();
      unsubOrders();
    };
  }, [user]);

  const handleBuyTokens = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4242/buy-tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: user?.uid,
          email: user?.email,
          amount: buyAmount
        })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error buying tokens:', error);
    }
  };

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i);
      }
      return [...prev, { ...item, cantidad: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing && existing.cantidad > 1) {
        return prev.map(i => i.id === itemId ? { ...i, cantidad: i.cantidad - 1 } : i);
      }
      return prev.filter(i => i.id !== itemId);
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.precio_tokens * item.cantidad), 0);

  const handleSubmitComanda = async () => {
    if (cart.length === 0) return;
    if (!location.trim()) {
      alert('Por favor ingresa tu Mesa o Cabaña');
      return;
    }

    try {
      await enviarComanda({
        cliente: user?.email || 'Huésped Anónimo',
        uid: user?.uid,
        mesa_o_cabana: location,
        items: cart.map(item => ({ nombre: item.nombre, cantidad: item.cantidad })),
        total: cartTotal
      });
      alert('Comanda realizada con éxito!');
      setCart([]);
      setIsOrdering(false);
      setLocation('');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error al realizar la comanda');
    }
  };

  if (loading) return <div className="min-h-screen bg-[#08120b] flex items-center justify-center text-brand-accent">Cargando Panel...</div>;
  if (!user) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-[#08120b] text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div>
            <h1 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">
              Panel de Huésped
            </h1>
            <p className="text-gray-400 mt-1">{user.email}</p>
          </div>
          <div className="flex items-center gap-4 bg-brand-primary/20 px-6 py-3 rounded-xl border border-brand-primary/30">
            <Coins className="text-brand-accent w-6 h-6" />
            <div>
              <p className="text-sm text-brand-accent/80 font-medium">Balance Actual</p>
              <p className="text-2xl font-bold text-white">{balance} <span className="text-brand-accent text-lg">$JFISH</span></p>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 space-y-8">
            {(role === 'staff' || role === 'admin') && (
              <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display font-bold flex items-center gap-2">
                    <ShoppingCart className="text-brand-accent" /> Acciones
                  </h2>
                <button 
                  onClick={() => setIsOrdering(!isOrdering)}
                  className="bg-brand-primary hover:bg-brand-primary/80 text-black px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Pedir Comanda
                </button>
              </div>

              {isOrdering && (
                <div className="mb-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {inventory.map(item => {
                      const cartItem = cart.find(i => i.id === item.id);
                      const quantity = cartItem ? cartItem.cantidad : 0;
                      return (
                        <div key={item.id} className="bg-black/40 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                          <div>
                            <p className="font-bold text-lg">{item.nombre}</p>
                            <p className="text-brand-accent">{item.precio_tokens} $JFISH</p>
                          </div>
                          <div className="flex items-center gap-3 bg-white/5 rounded-lg p-1">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 text-white transition-colors"
                              disabled={quantity === 0}
                            >
                              -
                            </button>
                            <span className="w-4 text-center font-bold">{quantity}</span>
                            <button 
                              onClick={() => addToCart(item)}
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {inventory.length === 0 && <p className="text-gray-400 col-span-2">No hay items en el inventario.</p>}
                  </div>
                  
                  {cart.length > 0 && (
                    <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl p-6 space-y-4">
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" /> Resumen del Pedido
                      </h3>
                      <div className="space-y-2">
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between text-sm text-gray-300">
                            <span>{item.cantidad}x {item.nombre}</span>
                            <span>{item.precio_tokens * item.cantidad} $JFISH</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                        <span className="font-bold">Total a pagar:</span>
                        <span className="text-2xl font-bold text-brand-accent">{cartTotal} $JFISH</span>
                      </div>
                      
                      <div className="pt-4 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Mesa o Cabaña</label>
                          <input 
                            type="text" 
                            placeholder="Ej. Mesa 5, Cabaña VIP"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent"
                          />
                        </div>
                        <button 
                          onClick={handleSubmitComanda}
                          className="w-full bg-brand-accent hover:bg-brand-accent/90 text-black font-bold py-3 rounded-xl transition-colors"
                        >
                          Confirmar Comanda
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </section>
            )}

            <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <History className="text-brand-accent" /> Historial de Consumos
              </h2>
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="bg-black/40 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-200">
                        {order.items?.map((i: any) => `${i.cantidad}x ${i.nombre}`).join(', ')}
                      </p>
                      <p className="text-sm text-gray-500">
                        {order.fecha?.toDate().toLocaleString() || 'Reciente'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-400">-{order.total} $JFISH</p>
                      <span className="text-xs bg-brand-primary/20 text-brand-accent px-2 py-1 rounded-full uppercase tracking-wider">
                        {order.estado}
                      </span>
                    </div>
                  </div>
                ))}
                {orders.length === 0 && <p className="text-gray-400">No tienes consumos recientes.</p>}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-gradient-to-b from-brand-primary/20 to-transparent p-6 rounded-2xl border border-brand-primary/30">
              <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                <Coins className="text-brand-accent" /> Comprar Tokens
              </h2>
              <p className="text-sm text-gray-300 mb-6">
                Recarga tu cuenta con tokens $JFISH para consumir dentro del ecosistema Jungle Fish. Valor actual: $0.12 USD / token.
              </p>
              
              <form onSubmit={handleBuyTokens} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Cantidad de tokens</label>
                  <input 
                    type="number" 
                    min="10"
                    value={buyAmount}
                    onChange={(e) => setBuyAmount(Number(e.target.value))}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Total a pagar:</span>
                  <span className="font-bold text-white">${(buyAmount * 0.12).toFixed(2)} USD</span>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-brand-accent/90 text-black font-bold py-3 rounded-xl transition-colors"
                >
                  Proceder al Pago
                </button>
              </form>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};
