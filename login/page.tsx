import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {
    AtSymbolIcon,
    KeyIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useState } from 'react';

export default function Page() {
    const [isLogin, setIsLogin] = useState(true); // State untuk toggle Login/Register

    return (
        <main className="flex min-h-screen flex-col p-6 bg-gray-50">
            <div className="flex flex-grow flex-col md:flex-row">
                {/* Left: Login/Register Form */}
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-white px-6 py-10 shadow-lg md:w-2/5 md:px-20">
                    {/* Tab for Login/Register */}
                    <div className="flex justify-center space-x-4">
                        <button
                            className={`text-lg font-medium ${
                                isLogin ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                            }`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`text-lg font-medium ${
                                !isLogin ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                            }`}
                            onClick={() => setIsLogin(false)}
                        >
                            Register
                        </button>
                    </div>

                    {isLogin ? (
                        // Login Form
                        <>
                            <h1 className={`${lusitana.className} text-3xl font-bold text-gray-900`}>
                                Login
                            </h1>
                            <p className="text-sm text-gray-600">
                                Masuk dengan akun Anda untuk mengakses layanan sekolah.
                            </p>
                            <form className="space-y-4">
                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <div className="relative mt-1">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="peer block w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200"
                                            placeholder="Masukkan email"
                                            required
                                        />
                                        <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
                                    </div>
                                </div>
                                {/* Password Input */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Kata Sandi
                                    </label>
                                    <div className="relative mt-1">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="peer block w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200"
                                            placeholder="Masukkan kata sandi"
                                            required
                                            minLength={6}
                                        />
                                        <KeyIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
                                    Masuk <ArrowRightIcon className="ml-auto h-5 w-5" />
                                </Button>
                            </form>
                        </>
                    ) : (
                        // Register Form
                        <>
                            <h1 className={`${lusitana.className} text-3xl font-bold text-gray-900`}>
                                Register
                            </h1>
                            <p className="text-sm text-gray-600">
                                Daftar untuk mendapatkan akun baru.
                            </p>
                            <form className="space-y-4">
                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <div className="relative mt-1">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="peer block w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200"
                                            placeholder="Masukkan email"
                                            required
                                        />
                                        <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
                                    </div>
                                </div>
                                {/* Password Input */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Kata Sandi
                                    </label>
                                    <div className="relative mt-1">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="peer block w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200"
                                            placeholder="Masukkan kata sandi"
                                            required
                                            minLength={6}
                                        />
                                        <KeyIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                                    Daftar <ArrowRightIcon className="ml-auto h-5 w-5" />
                                </Button>
                            </form>
                        </>
                    )}
                </div>

                {/* Right: Logo */}
                <div className="flex items-center justify-center bg-gray-200 md:w-3/5">
                    <Image
                        src="/logo/school_logo_example.jpg" // Pastikan jalur file sesuai
                        alt="School Logo"
                        width={600}
                        height={600}
                        className="object-contain"
                    />
                </div>
            </div>
        </main>
    );
}
