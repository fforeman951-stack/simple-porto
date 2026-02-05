'use client';

import { useState } from 'react';

export default function ProjectCard({ projects }: { projects?: any[] }) {
    const list = projects || []
    const projectsPerPage = 3
    const totalPages = Math.ceil(list.length / projectsPerPage)
    const [currentPage, setCurrentPage] = useState(0)

    const nextSlide = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
    }

    const prevSlide = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    }

    if (list.length === 0) return null

    const startIndex = currentPage * projectsPerPage
    const visibleProjects = list.slice(startIndex, startIndex + projectsPerPage)

    return (
        <section id="projects" className="my-12">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Projects</h2>
            <div className="relative flex items-center gap-4">
                {/* Previous Button */}
                {totalPages > 1 && (
                    <button 
                        onClick={prevSlide}
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-all duration-300 border border-gray-300 dark:border-gray-600"
                        aria-label="Previous projects"
                    >
                        <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Slider Container */}
                <div className="flex-1 overflow-hidden">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500">
                        {visibleProjects.map((p: any) => (
                            <article key={p.id} className="p-6 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md hover:shadow-lg dark:hover:shadow-xl transition-all duration-300">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tech?.map((t: string) => (
                                        <span key={t} className="text-xs bg-gray-100 dark:bg-gray-800/40 text-gray-700 dark:text-gray-100 px-3 py-1 rounded border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">{t}</span>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <a href={p.link} className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-all duration-300">View →</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                {totalPages > 1 && (
                    <button 
                        onClick={nextSlide}
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-all duration-300 border border-gray-300 dark:border-gray-600"
                        aria-label="Next projects"
                    >
                        <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Indicators */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentPage 
                                    ? 'bg-blue-600 w-8' 
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}