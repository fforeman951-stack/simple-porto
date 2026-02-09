"use client";

import React from "react";

export default function Testimonials({ testimonials }: { testimonials?: any[] }) {
    const list = testimonials || [];
    if (list.length === 0) return null;

    return (
        <section id="testimonials" className="my-12 p-8 rounded-lg bg-white dark:bg-white/5 shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">What people say</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Feedback from clients and collaborators</p>
            </div>


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((t: any) => (
                    <figure key={t.id} className="flex flex-col h-full bg-gray-50 dark:bg-white/3 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                        <blockquote className="text-sm text-gray-700 dark:text-gray-200 flex-1">“{t.quote}”</blockquote>
                        <figcaption className="mt-6 flex items-center gap-4">
                            {t.avatar ? (
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
                            )}
                            <div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
