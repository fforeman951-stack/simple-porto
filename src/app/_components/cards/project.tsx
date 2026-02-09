'use client';

import { useState } from 'react';

export default function ProjectCard({ projects }: { projects?: any[] }) {
    const list = projects || []
    const projectsPerPage = 3
    const totalPages = Math.ceil(list.length / projectsPerPage)
    const [currentPage, setCurrentPage] = useState(0)
    const [selectedScreenshots, setSelectedScreenshots] = useState<string[] | null>(null)

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
                            <article key={p.id} className="p-6 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {p.tech?.map((t: string) => (
                                            <span key={t} className="text-xs bg-gray-100 dark:bg-gray-800/40 text-gray-700 dark:text-gray-100 px-3 py-1 rounded border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    {p.url ? (
                                        <a 
                                            href={p.url} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            View Project
                                        </a>
                                    ) : p.screenshot && p.screenshot.length > 0 ? (
                                        <button
                                            onClick={() => setSelectedScreenshots(p.screenshot)}
                                            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            View Project
                                        </button>
                                    ) : null}
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

            {/* Screenshot Modal */}
            {selectedScreenshots && selectedScreenshots.length > 0 && (
                <div 
                    className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedScreenshots(null)}
                >
                    <div 
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedScreenshots(null)}
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="p-6 flex flex-col gap-6">
                            {selectedScreenshots.map((screenshot, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    {selectedScreenshots.length > 1 && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Screenshot {index + 1} of {selectedScreenshots.length}</p>
                                    )}
                                    <img 
                                        src={screenshot} 
                                        alt={`Project screenshot ${index + 1}`}
                                        className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}