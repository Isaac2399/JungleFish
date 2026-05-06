import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        // Create user document with 0 balance
        await setDoc(doc(db, 'users', userCred.user.uid), {
          uid: userCred.user.uid,
          email: userCred.user.email,
          balance_jfish: 0,
        });
      } else {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        // Garantizar que el documento exista en Firestore si se creó desde la consola o falló antes
        await setDoc(doc(db, 'users', userCred.user.uid), {
          uid: userCred.user.uid,
          email: userCred.user.email,
        }, { merge: true });
      }
      navigate('/dashboard');
    } catch (error: any) {
      alert('Error de autenticación: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#08120b] flex flex-col items-center justify-center text-white p-8">
      <div className="w-full max-w-md bg-white/5 p-8 rounded-2xl border border-white/10">
        <h2 className="text-3xl font-display font-bold text-brand-accent mb-6 text-center">
          {isRegistering ? 'Crear Cuenta' : 'Acceder al Panel'}
        </h2>
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-brand-primary hover:bg-brand-primary/80 text-black font-bold py-3 rounded-xl transition-colors"
          >
            {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-brand-accent hover:underline text-sm"
          >
            {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </div>
    </div>
  );
};
