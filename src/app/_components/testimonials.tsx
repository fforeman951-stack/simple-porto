"use client";

import React from "react";

export default function Testimonials({ testimonials }: { testimonials?: any[] }) {
    const list = testimonials || [];
    if (list.length === 0) return null;

    return (
        <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What people say</h2>
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
            </div>
        </section>
    );
}
