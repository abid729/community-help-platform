'use client';

  import React from 'react';
  import Link from 'next/link';

  export default function Home() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjBhNWZmIiBzdG9wLW9wYWNpdHk9IjAuMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhNzM5ZmYiIHN0b3Atb3BhY2l0eT0iMC4yIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzM4NDdiMSIgb3BhY2l0eT0iMC4zIi8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQpIiBvcGFjaXR5PSIwLjQiLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSI1MCIgcj0iMTUiIGZpbGw9InVybCgjZ3JhZGllbnQpIiBvcGFjaXR5PSIwLjQiLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjI1IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgb3BhY2l0eT0iMC40Ii8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSIxNTAiIHI9IjE4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgb3BhY2l0eT0iMC40Ii8+CiAgPGxpbmUgeDE9IjUwIiB5MT0iNTAiIHgyPSIxNTAiIHkyPSI1MCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPgogIDxsaW5lIHgxPSIxMDAiIHkxPSIxMDAiIHgyPSIxNTAiIHkyPSI1MCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPgogIDxsaW5lIHgxPSIxMDAiIHkxPSIxMDAiIHgyPSI1MCIgeTI9IjE1MCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')] bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full space-y-8 bg-white/95 backdrop-blur-lg p-10 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight sm:text-5xl">
              Community Help Platform
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Empowering communities through collaboration and support.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <Link
              href="/login"
              className="block w-full py-3 px-4 rounded-lg bg-indigo-600 text-white text-center font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-md transition duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block w-full py-3 px-4 rounded-lg bg-transparent border-2 border-indigo-600 text-indigo-600 text-center font-semibold hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-md transition duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }