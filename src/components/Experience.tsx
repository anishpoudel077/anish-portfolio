'use client'

import { useState } from 'react'

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const experiences = [
    {
      title: "Undergraduate Research Assistant",
      company: "Michigan State University – Department of Economics",
      period: "Mar 2025 – Present",
      location: "East Lansing, MI",
      description: "I work on applied economics research under Professor Paul Kim that studies how large public programs affect firms and markets. My current projects focus on Medicare Part D and the Paycheck Protection Program. I clean, merge, and organize large U.S. administrative datasets to build business-level panels used to analyze insurer behavior, access to loans, and business survival during COVID. This work contributes to academic research and policy-focused analysis of government programs.",
      keywords: ["Python", "R", "Econometrics", "Health Economics", "Policy Analysis", "Data Cleaning", "Large Administrative Data", "Public Programs"]
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "Michigan State University – Department of Economics",
      period: "Aug 2025 – Present",
      location: "East Lansing, MI",
      description: "I support undergraduate economics courses by helping students understand economic intuition and problem-solving techniques. I lead help room sessions, respond to course questions, and assist with midterm and final exams. I work closely with instructors and students to keep communication clear and coursework running smoothly throughout the semester.",
      keywords: ["Teaching", "Economics", "Communication", "Problem Solving", "Academic Support"]
    },
    {
      title: "Financial Risk Management Intern",
      company: "State Street Corporation – Global Treasury Risk Management",
      period: "Jun 2025 – Aug 2025",
      location: "Boston, MA",
      description: "I worked on portfolio exposure measurement and deposit behavior analysis within the Global Treasury Risk Management team. I built automated reports in SQL and Python to calculate risk exposure across asset classes, balance sheet levels, and currencies. I also analyzed deposit balance data using time-series clustering to identify behavioral patterns used in internal risk and liquidity analysis.",
      keywords: ["SQL", "Python", "Financial Risk Management", "Portfolio Analysis", "Time Series Analysis", "Banking", "Risk Analytics"]
    }
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card animate-slide-up cursor-pointer hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-1 hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold mb-1">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-text-muted">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <svg 
                      className={`w-6 h-6 text-primary transition-transform duration-300 ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-slate-700 mt-4">
                  <p className="text-text-secondary leading-relaxed mb-4 text-justify">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.keywords.map((keyword, i) => (
                      <span key={i} className="tag text-xs">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
