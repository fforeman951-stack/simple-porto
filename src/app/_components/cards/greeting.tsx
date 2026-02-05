'use client';

import { useState } from 'react';

export default function GreetingCard({ data }: { data?: any }) {
    const { name, title, bio, avatar } = data || {}
    const [imageError, setImageError] = useState(false)

    return (
        <section id="greeting" className="my-12 flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg bg-white dark:bg-white/5 shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
            <div className="flex-shrink-0">
                <div className="relative">
                    {!imageError && avatar ? (
                        <img
                            src={avatar}
                            alt={name || 'Avatar'}
                            onError={() => setImageError(true)}
                            className="w-40 h-40 rounded-full ring-4 ring-blue-200 dark:ring-blue-900/50 shadow-lg object-cover transition-all duration-300 hover:scale-105"
                        />
                    ) : (
                        <div className="w-40 h-40 rounded-full ring-4 ring-blue-200 dark:ring-blue-900/50 shadow-lg bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center transition-all duration-300 hover:scale-105">
                            <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                    )}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
                </div>
            </div>

            <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Hello, I&apos;m {name || 'Alex'}
                </h2>
                {title && <p className="mt-2 text-lg text-blue-600 dark:text-blue-400 font-semibold">{title}</p>}
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
                    {bio || 'I build clean, accessible, and performant websites using React, Next.js and Tailwind CSS.'}
                </p>
                <div className="mt-6 flex gap-4 justify-center md:justify-start flex-wrap">
                    <a 
                        href="#projects" 
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        View My Projects
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                        Contact Me
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}