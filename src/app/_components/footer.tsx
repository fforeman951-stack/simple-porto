export default function Footer({name}: {name: String}){
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Building beautiful web experiences with modern technology.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Navigation</h4>
                        <ul className="mt-3 space-y-2">
                            <li><a href="#greeting" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a></li>
                            <li><a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a></li>
                            <li><a href="#skills" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</a></li>
                            <li><a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Resources</h4>
                        <ul className="mt-3 space-y-2">
                            <li><a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a></li>
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">GitHub</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">LinkedIn</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Twitter</a></li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Get in Touch</h4>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Have a project in mind? Let's collaborate and create something amazing together.</p>
                        <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                            Get in Touch
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {currentYear} {name}. All rights reserved.
                        </p>
                        <p className="mt-4 sm:mt-0 text-sm text-gray-600 dark:text-gray-400">
                            Designed & Built with <span className="text-red-500">❤</span> for the web
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}