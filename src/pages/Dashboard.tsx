import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) return <div className="min-h-screen bg-[#08120b] flex items-center justify-center text-brand-accent">Cargando Plataforma RWA...</div>;
  if (!user) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-[#08120b] text-white p-8">
      <h1 className="text-4xl font-display text-brand-accent mb-4">Portal de Reservas</h1>
      <p>Bienvenido, inversor {user.email}</p>
    </div>
  );
};
