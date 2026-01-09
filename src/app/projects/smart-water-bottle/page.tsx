'use client'

import { useState } from 'react'

export default function SmartWaterBottlePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Aquavive Water Quality Monitoring System
          </h1>
          <h2 className="text-2xl text-blue-400 mb-2">Idea Innovation & Market Analysis</h2>
          <p className="text-gray-400 text-lg mb-2">
            Entrepreneurship & Innovation Project | Jan 2024 – May 2024
          </p>
          <p className="text-yellow-400 font-semibold mb-2">
            Top 4 out of 250 - Spartan Agora Project
          </p>
          <p className="text-blue-400 text-sm italic">
            * Conceptual Product Development - Idea Innovation & Market Analysis
          </p>
        </div>

        {/* Hero Image - Same size as CFB and Crime projects */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl max-w-xl mx-auto">
          <img 
            src="/projects/aquavive-main.png" 
            alt="Aquavive Water Quality Monitoring System" 
            className="w-full h-auto"
          />
        </div>

        {/* Quick Overview */}
        <div className="bg-slate-800/50 rounded-xl p-8 mb-12 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
          <p className="text-gray-300 text-lg leading-relaxed text-justify mb-4">
            Developed a comprehensive entrepreneurial blueprint for <span className="text-blue-400 font-semibold">Aquavive</span>, 
            a conceptual smart water bottle that uses advanced sensor technology to analyze water quality in real-time. The bottle features 
            LED indicators that display green for safe water and red for contaminated water, providing immediate feedback without 
            external devices. This project encompasses complete product development from concept to market strategy, including 
            prototype design, feasibility analysis, brand identity, and go-to-market planning.
          </p>
          <p className="text-blue-300 text-base italic">
            → Created Shark Tank-style pitch presentation showcasing the complete business model and market opportunity
          </p>
        </div>

        {/* Approach Overview - Table of Contents */}
        <div className="bg-slate-800/70 rounded-xl p-8 mb-12 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">Approach Overview</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { id: 'problem', title: '1. Problem & Opportunity' },
              { id: 'solution', title: '2. The Solution' },
              { id: 'technology', title: '3. Technology & Features' },
              { id: 'prototype', title: '4. Prototype Development' },
              { id: 'market', title: '5. Market Research' },
              { id: 'brand', title: '6. Brand Development' },
              { id: 'feasibility', title: '7. Feasibility Study' },
              { id: 'strategy', title: '8. Marketing & Distribution' },
              { id: 'results', title: '9. Results & Recognition' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`p-4 rounded-lg text-left transition-all duration-300 border ${
                  activeSection === section.id
                    ? 'bg-blue-600 border-blue-400 text-white'
                    : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-blue-500/50'
                }`}
              >
                <span className="font-semibold">{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        
        {/* Problem & Opportunity */}
        <section id="problem" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Problem & Opportunity</h3>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Current Situation</h4>
                <p className="text-justify leading-relaxed">
                  Water bottles are commonly used to stay hydrated on the go. However, it's often unknown if the water 
                  from various sources is safe to drink. Conventional water bottles serve the purpose of portability but 
                  fail to address water safety concerns.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Consumer Need</h4>
                <p className="text-justify leading-relaxed">
                  Health-conscious individuals care about their health and the safety of the water they drink. They need 
                  a water bottle that can assure them of the quality of water they consume, especially when traveling or 
                  in areas with uncertain water quality.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Market Opportunity</h4>
                <p className="text-justify leading-relaxed">
                  The market shows a surge in demand for health and wellness gadgets. The integration of smart technology 
                  in hydration aligns perfectly with the upward trend of consumers prioritizing health, water quality, and 
                  eco-friendly solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">The Solution: Aquavive</h3>
            
            {/* Square images with perfect 1:1 ratio fit */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-3xl mx-auto">
              <div className="rounded-lg overflow-hidden border border-slate-700 aspect-square">
                <img 
                  src="/projects/aquavive-comparison.png" 
                  alt="Aquavive Comparison" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-700 aspect-square">
                <img 
                  src="/projects/aquavive-indicators.png" 
                  alt="LED Indicators" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-gray-300 text-lg">
              <p className="text-justify leading-relaxed">
                Introducing the <span className="text-blue-400 font-semibold">Smart Water Quality Bottle</span>, a 
                breakthrough in personal hydration that ensures your water is always safe to drink. With its advanced 
                sensor technology, this bottle is a guardian of your health, offering real-time analysis of your water's 
                safety without the need for external devices.
              </p>

              <div className="bg-slate-700/50 rounded-lg p-6 mt-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">How It Works</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Embedded smart sensors quickly evaluate water for contaminants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Displays a <span className="text-green-400 font-semibold">green light</span> if water is safe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 text-xl">→</span>
                    <span>Displays a <span className="text-red-400 font-semibold">red light</span> if water is unsafe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">●</span>
                    <span>Specific concerns highlighted by illuminated symbols on the bottle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Features */}
        <section id="technology" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Technology & Features</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Advanced Sensor Technology</h4>
                <p className="text-gray-300 text-justify">
                  Features TDS (Total Dissolved Solids), pH, and microbial sensors for comprehensive water quality 
                  analysis. Ensures safety by measuring dissolved substances, acidity levels, and detecting pathogens.
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">LED Indicators</h4>
                <p className="text-gray-300 text-justify">
                  An LED strip on the bottle indicates water safety: green for safe, red for contaminated, and blue for 
                  operational status. Provides instant visual feedback.
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Battery & Charging</h4>
                <p className="text-gray-300 text-justify">
                  Eco-friendly, rechargeable battery with a micro-USB port for easy charging, similar to smartphones. 
                  Long-lasting battery life for extended use.
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">User Interface</h4>
                <p className="text-gray-300 text-justify">
                  Simple one-button operation for analysis. Quick and clear LED responses enable confident use by anyone, 
                  anywhere.
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Safety Features</h4>
                <p className="text-gray-300 text-justify">
                  Constructed with BPA-free materials for a safe and non-toxic drinking experience. Durable and designed 
                  for daily use.
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Design</h4>
                <p className="text-gray-300 text-justify">
                  Transparent, durable design with an intuitive LED interface. Sleek and modern aesthetic that combines 
                  functionality with style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prototype Development */}
        <section id="prototype" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Prototype Development</h3>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">3D Printing</h4>
                <p className="text-justify">
                  Advanced 3D printing brought the digital bottle design to life, allowing for hands-on evaluation of 
                  its form and function.
                </p>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Sensor Integration</h4>
                <p className="text-justify">
                  TDS, pH, and microbial sensors were embedded for precise water quality analysis, offering real-time 
                  safety feedback.
                </p>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">LED System Implementation</h4>
                <p className="text-justify">
                  The bottle features a color-coded LED system: green for safe water and red for contamination, enabling 
                  instant user decision-making.
                </p>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Refinement Process</h4>
                <p className="text-justify">
                  Feedback-driven iterations refined the prototype, enhancing sensor accuracy and user comfort for optimal 
                  performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of sections continue... */}
        <section id="market" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Market Research & Feasibility</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Target Market</h4>
                <p className="text-gray-300 text-lg text-justify mb-4">
                  Health-conscious individuals aged 25-45 who value technology that enhances wellbeing. Urban professionals 
                  with a proactive stance on environmental issues and a habit of investing in health-enhancing products.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Financial Projections</h4>
                <div className="bg-slate-700/50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-300">
                    <li><span className="text-blue-400 font-semibold">Year 1:</span> 100,000 units</li>
                    <li><span className="text-blue-400 font-semibold">Revenue:</span> $5 million</li>
                    <li><span className="text-blue-400 font-semibold">Gross Margin:</span> 60%</li>
                    <li><span className="text-blue-400 font-semibold">Growth Rate:</span> 20% YoY</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Consumer Feedback</h4>
              <p className="text-gray-300 text-lg text-justify mb-4">
                Received positive feedback on innovation and environmental benefits. Key improvements implemented based 
                on feedback:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Introduced scaled pricing model for affordability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Simplified user interface for intuitive everyday use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Committed to rigorous testing for durability and sensor precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Strengthened environmental messaging and sustainability practices</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Brand Development - continued from user's code */}
        <section id="brand" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Brand Development</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="rounded-lg overflow-hidden border border-slate-700 mb-6">
                  <img 
                    src="/projects/aquavive-logo.png" 
                    alt="Aquavive Logo" 
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Brand Identity</h4>
                <p className="text-gray-300 text-lg text-justify">
                  <span className="font-semibold">Aquavive</span> was chosen to suggest water (aqua) and life (vive), 
                  fitting the product's identity as a health-focused, life-enhancing water bottle.
                </p>
              </div>

              <div>
                <div className="rounded-lg overflow-hidden border border-slate-700 mb-6">
                  <img 
                    src="/projects/aquavive-packaging.png" 
                    alt="Aquavive Packaging" 
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Brand Personality</h4>
                <p className="text-gray-300 text-lg text-justify">
                  <span className="font-semibold">"The Sage"</span> - Wise, informed, and a trusted guardian of health. 
                  Embodies knowledge, offering peace of mind with every drop.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Primary Color</h4>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-blue-500 border-2 border-white"></div>
                  <div>
                    <p className="text-gray-300">Crisp Blue</p>
                    <p className="text-sm text-gray-400">Water, Purity, Trust</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Secondary Color</h4>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-green-500 border-2 border-white"></div>
                  <div>
                    <p className="text-gray-300">Vibrant Green</p>
                    <p className="text-sm text-gray-400">Life, Safety, Quality</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-400 mb-3">Accent Color</h4>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gray-400 border-2 border-white"></div>
                  <div>
                    <p className="text-gray-300">Soft Grey</p>
                    <p className="text-sm text-gray-400">Modern, Professional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-700/30 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-400 mb-3">Design Inspiration</h4>
              <p className="text-gray-300 text-lg text-justify">
                Aquavive draws inspiration from the intersection of technology and well-being. The design philosophy 
                mirrors Apple's clean, innovative aesthetic, Fitbit's health-conscious appeal, and Tesla's pioneering 
                spirit in technology.
              </p>
            </div>
          </div>
        </section>

        {/* Marketing & Distribution */}
        <section id="strategy" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Marketing & Distribution Strategy</h3>
            
            <div className="space-y-8">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Distribution Channels</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span>Direct-to-consumer online sales through company website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span>Leading e-commerce platforms (Amazon, specialized health stores)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span>Strategic partnerships with fitness and lifestyle brands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span>Health and wellness retail stores</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Marketing Event: "The Aquavive Challenge"</h4>
                <p className="text-gray-300 text-lg text-justify mb-4">
                  A community event that invites participants to test various water sources with the Aquavive bottle, 
                  showing real-time results. The event culminates in a "Purest Source" award, highlighting the bottle's 
                  effectiveness and raising awareness on water quality.
                </p>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Key Marketing Messages</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">→</span>
                    <span>Immediate water quality assessment for health assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">→</span>
                    <span>Advanced sensor technology empowers informed decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">→</span>
                    <span>Eco-friendly alternative to single-use plastic bottles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">→</span>
                    <span>Commitment to wellness and the planet</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Recognition */}
        <section id="results" className="mb-16 scroll-mt-24">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-blue-500/50">
            <h3 className="text-3xl font-bold text-white mb-6">Results & Recognition</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Top 4 out of 250</h4>
                <p className="text-gray-300 text-lg">
                  Placed in the top 4 out of 250 participants in the <span className="font-semibold">Spartan Agora</span>, 
                  a semester-long entrepreneurship initiative where students develop consumer-focused innovations and pitch 
                  their ideas Shark Tank-style to alumni judges from Michigan State University's College of Communication 
                  Arts and Sciences.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Key Achievements</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>→ Comprehensive entrepreneurial blueprint developed</li>
                  <li>→ Market feasibility study completed</li>
                  <li>→ Functional prototype created</li>
                  <li>→ Full brand identity established</li>
                  <li>→ Go-to-market strategy developed</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-slate-800/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Project Impact</h4>
              <p className="text-gray-300 text-lg text-justify">
                This conceptual project covered the complete product development lifecycle from identifying a consumer need to 
                creating a viable business model. The comprehensive approach included market research, prototype design concepts, 
                brand strategy, and financial planning for bringing an innovative product idea to market.
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center mt-12">
          <a 
            href="/#projects" 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
          >
            ← Back to All Projects
          </a>
        </div>
      </div>
    </div>
  )
}
