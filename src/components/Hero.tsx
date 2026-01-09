'use client'

import { useState } from 'react'

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image - Clickable - CIRCULAR */}
            <div className="flex-shrink-0 animate-fade-in">
              <button
                onClick={() => setShowModal(true)}
                className="block w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              >
                <img
                  src="/profile.jpg"
                  alt="Anish Poudel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Bio */}
            <div className="flex-1 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Anish Poudel
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4 text-justify">
                I am an undergraduate senior majoring in Economics at Michigan State University, with minors 
                in Quantitative Data Analytics, Data Science, and Entrepreneurship. I work as an Undergraduate 
                Research Assistant and Teaching Assistant in the Department of Economics, where I study Medicare 
                Part D, insurer behavior, and public programs while supporting undergraduate instruction.
              </p>

              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4 text-justify">
                I specialize in econometric analysis, working with large administrative datasets, and financial 
                risk assessment, skills I developed through my summer 2025 internship at State Street Corporation's 
                Global Treasury Risk Management team in Boston.
              </p>

              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6 text-justify">
                I am interested in financial markets, risk management, and economic research, applying quantitative 
                methods to understand business performance, policy outcomes, and real-world financial decisions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/Resume-Anish.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for full-size photo - Like Ashrut's */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-slate-800 hover:bg-slate-700 rounded-full w-12 h-12 flex items-center justify-center text-base font-semibold transition-colors z-10"
            >
              Close
            </button>
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Anish Poudel"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
