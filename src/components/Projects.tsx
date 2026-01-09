'use client'

export default function Projects() {
  const projects = [
    {
      title: "Aquavive Water Quality Monitoring System",
      subtitle: "Creativity & Entrepreneurship",
      period: "Jan 2024 – May 2024",
      description: "Designed entrepreneurial strategy for a conceptual smart water bottle with LED-based water quality indicators. Developed product prototype, brand identity, and market entry plan. Achieved Top 4 recognition among 250 participants in Spartan Agora entrepreneurship competition.",
      tags: ["Market Research", "Product Design", "Entrepreneurship", "Innovation"],
      image: "/projects/aquavive-thumbnail.png",
      link: "/projects/smart-water-bottle"
    },
    {
      title: "College Football Analysis",
      subtitle: "Data Science (Programming in R)",
      period: "Oct 2023 – Dec 2023",
      description: "Examined College Football Playoff team performance through statistical modeling in R. Implemented linear regression and visualization techniques to determine offensive and defensive metrics that predict playoff selection. Evaluated conference-level performance patterns using ggplot2.",
      tags: ["R", "ggplot2", "Regression", "Sports Analytics"],
      image: "/projects/cfb-thumbnail.png",
      link: "/projects/college-football-analysis"
    },
    {
      title: "Time-Series Forecasting of Crime Rates",
      subtitle: "Computational Modeling & Data Analysis",
      period: "Mar 2023 – May 2023",
      description: "Conducted statistical analysis of Michigan crime data spanning 2008-2019 across four major categories. Applied curve-fitting algorithms with quadratic and exponential models to project future crime trends through 2030. Utilized Python for data processing and visualization.",
      tags: ["Time-Series", "Forecasting", "Python", "Statistical Modeling"],
      image: "/projects/crime-thumbnail.png",
      link: "/projects/crime-forecasting"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const ProjectCard = (
              <div 
                className="card animate-slide-up group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-text-muted">
                    {project.period}
                  </p>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="mt-auto pt-4">
                    <span className="text-primary font-semibold group-hover:underline">
                      View Project Details →
                    </span>
                  </div>
                )}
              </div>
            )

            return project.link ? (
              <a 
                key={index}
                href={project.link}
                className="block hover:scale-105 transition-transform duration-300"
              >
                {ProjectCard}
              </a>
            ) : (
              <div key={index}>
                {ProjectCard}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
