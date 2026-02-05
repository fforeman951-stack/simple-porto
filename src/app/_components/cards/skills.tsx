export default function SkillCard({ skills }: { skills?: string[] }){
    const list = skills || []

    // Organize skills into categories
    const categories = {
        "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
        "Frameworks & Tools": ["Next.js", "Tailwind CSS", "Storybook"],
        "Other": [] as string[]
    }

    // Categorize skills
    Object.keys(categories).forEach(cat => {
        categories[cat as keyof typeof categories] = list.filter(s => 
            cat === "Frontend" && ["HTML", "CSS", "JavaScript", "TypeScript", "React"].includes(s) ||
            cat === "Frameworks & Tools" && ["Next.js", "Tailwind CSS", "Storybook"].includes(s)
        )
    })

    // Put uncategorized skills in "Other"
    const categorizedSkills = Object.values(categories).flat()
    categories["Other"] = list.filter(s => !categorizedSkills.includes(s))

    return (
        <section id="skills" className="my-12 p-8 rounded-lg bg-white dark:bg-white/5 shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills & Expertise</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Technologies and tools I work with</p>
            </div>

            <div className="space-y-8">
                {Object.entries(categories).map(([category, categorySkills]) => 
                    categorySkills.length > 0 && (
                        <div key={category}>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">{category}</h4>
                            <div className="flex flex-wrap gap-3">
                                {categorySkills.map((skill) => (
                                    <span 
                                        key={skill} 
                                        className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 font-medium text-sm transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-800/50 hover:shadow-md cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}