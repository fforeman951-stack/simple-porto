export default function ContactCard({ contact }: { contact?: any }){
    if(!contact) return null

    return (
        <section id="contact" className="my-12 p-8 rounded-lg bg-white dark:bg-white/5 shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Get in Touch</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">I'm always interested in hearing about new projects and opportunities.</p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {contact.email && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Email</h4>
                                <a href={`mailto:${contact.email}`} className="mt-1 text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300 break-all">{contact.email}</a>
                            </div>
                        </div>
                    </div>
                )}
                
                {contact.phone && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.042 11.042 0 01-5.516 5.516l-1.024-2.048a1 1 0 00-.756-.502L4.177 9.226A1 1 0 003.5 8.28V5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Phone</h4>
                                <a href={`tel:${contact.phone}`} className="mt-1 text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300">{contact.phone}</a>
                            </div>
                        </div>
                    </div>
                )}
                
                {contact.location && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Location</h4>
                                <p className="mt-1 text-gray-700 dark:text-gray-300">{contact.location}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}