import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-white">
      {/* Content */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Left Section (Login Form) */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 shadow-lg px-6 py-10 md:w-2/5 md:px-20">
          {/* Login Form */}
          <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
            Ayo Mulai dengan Login!
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="relative mt-1">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Masukkan email Anda"
                  className="block w-full rounded-md border-gray-300 py-2 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Kata Sandi
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="Masukkan kata sandi Anda"
                  className="block w-full rounded-md border-gray-300 py-2 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <KeyIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
            >
              Masuk
            </button>
          </form>
        </div>

        {/* Right Section (Hero Image) */}
        <div className="flex items-center justify-end md:w-3/5">
          <Image
            src="/logo/school_logo_example.jpg" // Jalur file
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            alt="School"
          />
        </div>
      </div>
    </main>
  );
}
