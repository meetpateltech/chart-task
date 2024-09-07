'use client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={navigateToDashboard}>
        Go to Dashboard
      </button>
    </div>
  );
}