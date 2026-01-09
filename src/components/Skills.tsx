'use client'

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming & Statistical Software",
      skills: ["Python", "R", "SQL", "C", "SAS"]
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "ggplot2", "Tableau", "Power BI", "Excel"]
    },
    {
      category: "Finance & Economics",
      skills: ["Bloomberg Terminal", "Financial Statement Analysis", "Time Series Analysis", "Econometrics", "Fixed Effects Models"]
    },
    {
      category: "Research & Methodology",
      skills: ["Health Economics", "Applied Microeconomics", "Causal Inference", "Data Cleaning", "Fuzzy Matching"]
    },
    {
      category: "Statistical Learning",
      skills: ["Linear Regression", "Logistic Regression", "Cross-Validation", "PCA", "Clustering"]
    },
    {
      category: "Product Development & Entrepreneurship",
      skills: ["Market Research", "Feasibility Analysis", "Prototype Development", "Brand Strategy", "Go-to-Market Strategy"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card animate-slide-up group hover:scale-105 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-blue-300 transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
