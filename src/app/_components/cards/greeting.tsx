'use client';

import Avatar from '../avatar';

export default function GreetingCard({ data }: { data?: any }) {
    const { name, title, bio, avatar } = data || {}

    return (
        <section id="greeting" className="my-12 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/[0.02] shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
            <div className="flex-shrink-0 relative">
                <Avatar
                    src={avatar}
                    name={name}
                    size={160}
                    className="ring-4 ring-blue-200 dark:ring-blue-900/50 shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-blue-500"
                    alt={name || 'User Avatar'}
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md animate-pulse"></div>
            </div>

            <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                    Hello, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{name || 'Alex'}</span>
                </h1>
                {title && <p className="mt-3 text-xl text-blue-600 dark:text-blue-400 font-semibold">{title}</p>}
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
                    {bio || 'I build clean, accessible, and performant websites using React, Next.js and Tailwind CSS.'}
                </p>
                <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">
                    <a 
                        href="#projects" 
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
                    >
                        View My Projects
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
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