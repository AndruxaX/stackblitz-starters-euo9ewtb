// app/page.tsx или pages/index.tsx

import Link from 'next/link';
import { AlertTriangle, Lightbulb, CalendarDays } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-2">СелНет</h1>
      <p className="text-lg text-gray-700 mb-6">
        Гласът на селата – директно, лесно и видимо.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link href="/signal">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 text-lg shadow">
            <AlertTriangle size={24} /> Подай сигнал
          </button>
        </Link>

        <Link href="/idea">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 text-lg shadow">
            <Lightbulb size={24} /> Предложи идея
          </button>
        </Link>

        <Link href="/event">
          <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 text-lg shadow">
            <CalendarDays size={24} /> Добави събитие
          </button>
        </Link>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        © 2025 СелНет – направено с грижа за хората
      </footer>
    </main>
  );
}
