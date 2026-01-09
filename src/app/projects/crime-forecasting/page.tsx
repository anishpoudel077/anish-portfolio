'use client'

import { useState } from 'react'

export default function CrimeForecastingPage() {
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
            Time-Series Forecasting of Crime Rates in Michigan
          </h1>
          <h2 className="text-2xl text-blue-400 mb-2">Computational Modeling & Data Analysis</h2>
          <p className="text-gray-400 text-lg mb-2">
            CMSE 201 | March 2023 – May 2023
          </p>
        </div>

        {/* Hero Image - Same size as CFB project */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl max-w-xl mx-auto">
          <img 
            src="/projects/crime-hero.png" 
            alt="Crime Analysis Hero" 
            className="w-full h-auto"
          />
        </div>

        {/* Quick Overview */}
        <div className="bg-slate-800/50 rounded-xl p-8 mb-12 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
          <p className="text-gray-300 text-lg leading-relaxed text-justify mb-4">
            This data science project analyzes crime trends in Michigan from 2008 to 2019, examining four major crime 
            categories: Murder, Assault, Robbery, and Rape. Using Python-based statistical analysis and time-series forecasting, 
            the study identifies patterns, measures crime rate distributions, and builds predictive models to forecast future 
            trends through 2030. The analysis provides findings into public safety trends and helps inform policy decisions 
            for crime reduction strategies.
          </p>
          <p className="text-blue-300 text-base italic">
            → Applied curve-fitting techniques with quadratic and exponential models to predict long-term crime trends
          </p>
        </div>

        {/* Approach Overview */}
        <div className="bg-slate-800/70 rounded-xl p-8 mb-12 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">Approach Overview</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { id: 'background', title: '1. Background & Motivation' },
              { id: 'questions', title: '2. Research Questions' },
              { id: 'methodology', title: '3. Methodology' },
              { id: 'trends', title: '4. Crime Trends Analysis' },
              { id: 'comparison', title: '5. Crime Type Comparison' },
              { id: 'distribution', title: '6. Statistical Distribution' },
              { id: 'correlation', title: '7. Correlation Analysis' },
              { id: 'predictions', title: '8. Predictive Modeling' },
              { id: 'conclusions', title: '9. Findings & Impact' }
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

        {/* Background & Motivation */}
        <section id="background" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Background & Motivation</h3>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Context</h4>
                <p className="text-justify leading-relaxed">
                  Crime rates in the United States vary significantly across states, with Michigan consistently ranking 
                  among states with higher violent crime rates. According to USA Today, Michigan ranks 13th among the most 
                  dangerous states, with Detroit and Muskegon Heights being particularly affected areas. Understanding 
                  how crime rates have changed over time provides essential information for policymakers and law enforcement 
                  agencies to develop effective crime reduction strategies.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Personal Motivation</h4>
                <p className="text-justify leading-relaxed">
                  As a Michigan resident, I became interested in understanding community safety and how it compares across 
                  different areas of the state. By investigating crime trends in Michigan, I hoped to gain a better understanding 
                  of which types of crimes are most and least common, and how their rates have evolved over time. This analysis 
                  aims to provide evidence-based findings that can support efforts toward reducing crime rates and ensuring 
                  safer communities for all residents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Questions */}
        <section id="questions" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Research Questions</h3>
            
            <div className="space-y-4">
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 1: Overall Trends</h4>
                <p className="text-gray-300 text-justify">
                  What is the overall trend of crime rates (murder, rape, robbery, and assault) in Michigan from 2008-2019? 
                  How has it changed over time?
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 2: Crime Type Comparison</h4>
                <p className="text-gray-300 text-justify">
                  What were the rates of the most and least common types of crime in Michigan from 2008 to 2019?
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 3: Future Predictions</h4>
                <p className="text-gray-300 text-justify">
                  Can we predict the rates of the most and least common types of crime in Michigan through 2030?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section id="methodology" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Methodology</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Data Source & Preparation</h4>
                <p className="text-gray-300 text-lg text-justify leading-relaxed mb-4">
                  The analysis used data from the CORGIS Datasets Project (state_crime.csv), which contains crime statistics 
                  for all 50 US states from 1960 to 2019. The dataset was cleaned and filtered to focus exclusively on Michigan 
                  data from 2008-2019, examining four major crime categories: Murder, Assault, Robbery, and Rape.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Analytical Tools</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Python Libraries:</span> pandas for data manipulation, numpy for numerical operations, matplotlib for visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Statistical Analysis:</span> Mean, median calculations, distribution analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Visualization:</span> Line graphs, bar charts, histograms, scatter plots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Predictive Modeling:</span> curve_fit function from scipy.optimize for time-series forecasting</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Analysis Approach</h4>
                <p className="text-gray-300 text-lg text-justify leading-relaxed">
                  The analysis followed a systematic approach: first visualizing trends through line graphs to identify patterns 
                  over time, then using bar graphs to compare crime types, followed by histogram analysis to understand 
                  distributions, scatter plot analysis to examine correlations, and finally applying curve-fitting techniques 
                  to generate predictions for 2020-2030.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Crime Trends Analysis */}
        <section id="trends" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Crime Trends Analysis (2008-2019)</h3>
            
            <div className="mb-8 rounded-xl overflow-hidden border border-slate-700 max-w-4xl mx-auto">
              <img 
                src="/projects/crime-trends.png" 
                alt="Crime Rates Trends" 
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-justify leading-relaxed">
                The trend analysis reveals that overall crime rates in Michigan decreased from 2008 to 2019, with some 
                fluctuations across different crime categories. Each crime type showed distinct patterns over the 12-year period.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Assault</h4>
                  <p className="text-justify">
                    Showed a slight decrease from 331.9 per 100,000 in 2008 to 305.9 in 2019. The rate declined to a low 
                    of 266.2 in 2015 before increasing again in subsequent years.
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Murder</h4>
                  <p className="text-justify">
                    Remained relatively stable throughout the period, fluctuating between 5.4 and 7.0 per 100,000 people, 
                    with an overall slight decrease from 5.5 in 2008 to 5.6 in 2019.
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-red-400 mb-3">Rape</h4>
                  <p className="text-justify">
                    Showed an increase from 45.1 in 2008, peaking at 76.9 in 2018, then declining to 72.4 in 2019. This 
                    increase may reflect improved reporting mechanisms rather than an actual rise in incidents.
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-3">Robbery</h4>
                  <p className="text-justify">
                    Experienced a significant decrease from 132.4 in 2008 to 53.6 in 2019, representing a decline of over 
                    59%, the most substantial improvement among all crime categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crime Type Comparison */}
        <section id="comparison" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Crime Type Comparison</h3>
            
            <div className="mb-8 rounded-xl overflow-hidden border border-slate-700 max-w-4xl mx-auto">
              <img 
                src="/projects/crime-comparison.png" 
                alt="Crime Type Comparison" 
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <h4 className="text-2xl font-semibold text-gray-300 mb-4">Most Common: Assault</h4>
                  <div className="space-y-2 text-gray-200">
                    <p><span className="font-semibold">Total Occurrences:</span> 3,614.90</p>
                    <p><span className="font-semibold">Mean Rate:</span> 301.24 per 100,000</p>
                    <p><span className="font-semibold">Median Rate:</span> 307.20 per 100,000</p>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <h4 className="text-2xl font-semibold text-gray-300 mb-4">Least Common: Murder</h4>
                  <div className="space-y-2 text-gray-200">
                    <p><span className="font-semibold">Total Occurrences:</span> 71.20</p>
                    <p><span className="font-semibold">Mean Rate:</span> 5.93 per 100,000</p>
                    <p><span className="font-semibold">Median Rate:</span> 5.85 per 100,000</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Statistical Summary (2008-2019)</h4>
                <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                  <div>
                    <p className="font-semibold mb-2">Mean Crime Rates:</p>
                    <ul className="space-y-1 text-sm">
                      <li>Assault: 301.24 per 100,000</li>
                      <li>Robbery: 90.98 per 100,000</li>
                      <li>Rape: 59.62 per 100,000</li>
                      <li>Murder: 5.93 per 100,000</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Median Crime Rates:</p>
                    <ul className="space-y-1 text-sm">
                      <li>Assault: 307.20 per 100,000</li>
                      <li>Robbery: 91.50 per 100,000</li>
                      <li>Rape: 64.15 per 100,000</li>
                      <li>Murder: 5.85 per 100,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistical Distribution */}
        <section id="distribution" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Statistical Distribution Analysis</h3>
            
            <div className="mb-8 rounded-xl overflow-hidden border border-slate-700 max-w-4xl mx-auto">
              <img 
                src="/projects/crime-distributions.png" 
                alt="Crime Distributions" 
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-justify leading-relaxed">
                Histogram analysis of each crime type reveals the frequency distribution of crime rates across the 12-year 
                period. These distributions provide understanding into the variability and consistency of different crime types.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-red-400 mb-3">Murder Rates</h4>
                  <p className="text-justify">
                    The distribution shows murder rates clustered primarily between 5.4 and 7.0 per 100,000, with the 
                    highest frequency around 5.5-6.0. This tight clustering indicates consistent, stable rates with limited 
                    year-to-year variation.
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Assault Rates</h4>
                  <p className="text-justify">
                    Assault rates show a bimodal distribution with concentrations around 270-280 and 305-330 per 100,000, 
                    reflecting the decline in the mid-2010s followed by an increase toward the end of the decade.
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-3">Rape Rates</h4>
                  <p className="text-justify">
                    The distribution shows two distinct clusters: lower rates (45-50) in the early years and higher rates 
                    (65-77) in later years, reflecting the substantial increase observed in the trend analysis.
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">Robbery Rates</h4>
                  <p className="text-justify">
                    Robbery shows a broad distribution spanning from approximately 50 to 130 per 100,000, with higher 
                    frequencies in the lower ranges, consistent with the observed declining trend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Correlation Analysis */}
        <section id="correlation" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Correlation Analysis: Murder vs. Assault</h3>
            
            <div className="mb-8 rounded-xl overflow-hidden border border-slate-700 max-w-4xl mx-auto">
              <img 
                src="/projects/crime-correlation.png" 
                alt="Murder vs Assault Correlation" 
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-justify leading-relaxed">
                The scatter plot analysis examines the relationship between murder rates (least common) and assault rates 
                (most common) across the 12-year period. Each point represents a specific year, showing how these two crime 
                types correlate over time.
              </p>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Key Findings</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>No strong linear correlation exists between murder and assault rates, indicating these crimes may 
                    be influenced by different factors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Murder rates remain relatively stable (5.4-7.0 range) regardless of assault rate fluctuations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Assault rates show greater variability (266-332 range) across the time period</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>The weak correlation suggests different prevention and intervention strategies may be needed for 
                    violent versus less severe crimes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Predictive Modeling */}
        <section id="predictions" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Predictive Modeling (2020-2030)</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Murder Rate Predictions</h4>
                <div className="mb-6 rounded-xl overflow-hidden border border-slate-700 max-w-4xl mx-auto">
                  <img 
                    src="/projects/crime-murder-prediction.png" 
                    alt="Murder Rate Predictions" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h5 className="text-lg font-semibold text-blue-300 mb-3">Exponential Model Results</h5>
                  <p className="text-gray-300 text-justify mb-4">
                    An exponential decay model was fitted to murder rate data from 2010-2019, providing the best fit for 
                    this crime category. The model predicts a continued gradual decrease in murder rates through 2030, 
                    with rates stabilizing around 5.0-5.5 per 100,000 people.
                  </p>
                  <p className="text-blue-300 italic">
                    → The model suggests murder rates will continue their downward trend, though at a decreasing rate of change
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Assault Rate Predictions</h4>
                <div className="mb-6 rounded-xl overflow-hidden border border-slate-700 max-w-4xl mx-auto">
                  <img 
                    src="/projects/crime-assault-prediction.png" 
                    alt="Assault Rate Predictions" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h5 className="text-lg font-semibold text-blue-300 mb-3">Quadratic Model Results</h5>
                  <p className="text-gray-300 text-justify mb-4">
                    A quadratic model was selected for assault rates based on the U-shaped trend observed from 2000-2019. 
                    The model predicts a gradual increase in assault rates through 2030, reaching approximately 560 per 
                    100,000 by 2030, though this projection should be interpreted with caution given the limitations of 
                    extrapolation.
                  </p>
                  <p className="text-orange-300 italic">
                    → The predicted increase suggests assault rates may reverse their mid-decade decline, warranting continued 
                    monitoring and prevention efforts
                  </p>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-yellow-400 mb-3">Model Limitations</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">→</span>
                    <span>Data only extends through 2019, limiting prediction accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">→</span>
                    <span>Models do not account for potential policy changes, economic factors, or demographic shifts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">→</span>
                    <span>Long-term extrapolation beyond the data range increases uncertainty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">→</span>
                    <span>External events (e.g., COVID-19 pandemic) may significantly impact actual crime rates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Findings & Impact */}
        <section id="conclusions" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Findings & Impact</h3>
            
            <div className="space-y-8">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Key Findings</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Overall crime rates in Michigan decreased significantly from 2008-2019, with robbery showing the 
                    most substantial decline (59%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Assault remains the most common violent crime, though rates have stabilized in recent years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Murder rates stayed remarkably stable throughout the period, indicating consistent public safety outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Rape statistics increased, likely reflecting improved reporting mechanisms and victim support services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Predictive models suggest murder rates will continue decreasing while assault rates may increase, 
                    requiring targeted intervention strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Methodological Findings</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Quadratic models effectively captured assault rate trends with their U-shaped pattern</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Exponential decay models best represented murder rate data and predictions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Time-series analysis revealed distinct patterns for each crime type, suggesting different underlying factors</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Challenges Encountered</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3">→</span>
                    <span>Data availability limited to 2019, restricting ability to validate predictions against actual outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3">→</span>
                    <span>Finding consistent, reliable crime data across all states and years proved challenging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3">→</span>
                    <span>Models cannot account for external factors like policy changes, economic conditions, or demographic shifts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-6 border border-blue-700">
                <h4 className="text-2xl font-semibold text-blue-300 mb-4">Project Impact</h4>
                <p className="text-gray-200 text-lg text-justify leading-relaxed mb-4">
                  This analysis provides evidence-based findings into Michigan's crime trends, which can inform policy 
                  decisions and resource allocation for law enforcement agencies. The identification of declining robbery 
                  rates and stable murder rates suggests current strategies are effective, while the predicted increase in 
                  assault rates indicates areas requiring additional focus and intervention.
                </p>
                <p className="text-blue-300 text-base italic">
                  → The project showcases the application of data science techniques to real-world public safety challenges, 
                  contributing to community awareness and informed decision-making
                </p>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Future Directions</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Incorporate more recent data (2020-2025) to validate and refine predictive models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Include additional variables such as socioeconomic factors, law enforcement policies, and population demographics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Expand analysis to city-level data to identify localized trends and intervention opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Investigate specific policy interventions and their measurable effects on crime rate reductions</span>
                  </li>
                </ul>
              </div>
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
