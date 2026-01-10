export default function CrimeForecastingPage() {
  const toc = [
    { id: 'background', title: '1. Background & Research Questions' },
    { id: 'methodology', title: '2. Methodology' },
    { id: 'trends', title: '3. Crime Trends & Comparison' },
    { id: 'distribution', title: '4. Statistical Analysis' },
    { id: 'correlation', title: '5. Correlation Analysis' },
    { id: 'predictions', title: '6. Predictive Modeling' },
    { id: 'conclusions', title: '7. Findings & Impact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Time-Series Forecasting of Crime Rates in Michigan
          </h1>
          <h2 className="text-2xl text-blue-400 mb-2">Computational Modeling & Data Analysis</h2>
          <p className="text-gray-400 text-lg mb-2">CMSE 201 | March 2023 – May 2023</p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl max-w-xl mx-auto">
          <img src="/projects/crime-hero.png" alt="Crime Analysis Hero" className="w-full h-auto" />
        </div>

        {/* Quick Overview */}
        <div className="bg-slate-800/50 rounded-xl p-8 mb-12 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
          <p className="text-gray-300 text-lg leading-relaxed text-left md:text-justify mb-4">
            This data science project analyzes crime trends in Michigan from 2008 to 2019, examining four major crime
            categories: Murder, Assault, Robbery, and Rape. Using Python-based statistical analysis and time-series
            forecasting, the study identifies patterns, measures crime rate distributions, and builds predictive models to
            forecast future trends through 2030.
          </p>
          <p className="text-blue-300 text-base italic">
            → Applied curve-fitting techniques with quadratic and exponential models to predict long-term crime trends
          </p>
        </div>

        {/* Approach Overview (no client JS) */}
        <div className="bg-slate-800/70 rounded-xl p-8 mb-12 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">Approach Overview</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {toc.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="p-4 rounded-lg text-left transition-all duration-300 border bg-slate-700/50 border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-blue-500/50"
              >
                <span className="font-semibold">{section.title}</span>
              </a>
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
                <p className="text-left md:text-justify leading-relaxed">
                  Crime rates in the United States vary significantly across states, with Michigan consistently ranking among
                  states with higher violent crime rates. According to USA Today, Michigan ranks 13th among the most dangerous
                  states, with Detroit and Muskegon Heights being particularly affected areas. Understanding how crime rates
                  have changed over time provides essential information for policymakers and law enforcement agencies to
                  develop effective crime reduction strategies.
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
                <p className="text-gray-300 text-left md:text-justify">
                  What is the overall trend of crime rates (murder, rape, robbery, and assault) in Michigan from 2008-2019?
                  How has it changed over time?
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 2: Crime Type Comparison</h4>
                <p className="text-gray-300 text-left md:text-justify">
                  What were the rates of the most and least common types of crime in Michigan from 2008 to 2019?
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 3: Future Predictions</h4>
                <p className="text-gray-300 text-left md:text-justify">
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
                <p className="text-gray-300 text-lg text-left md:text-justify leading-relaxed mb-4">
                  The analysis used data from the CORGIS Datasets Project (state_crime.csv), which contains crime statistics
                  for all 50 US states from 1960 to 2019. The dataset was cleaned and filtered to focus exclusively on
                  Michigan data from 2008-2019, examining four major crime categories: Murder, Assault, Robbery, and Rape.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Analytical Tools</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span>
                      <span className="font-semibold">Python Libraries:</span> pandas, numpy, matplotlib
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">→</span>
                    <span>
                      <span className="font-semibold">Predictive Modeling:</span> curve_fit from scipy.optimize
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Analysis Approach</h4>
                <p className="text-gray-300 text-lg text-left md:text-justify leading-relaxed">
                  The workflow included trend visualization, comparisons across crime types, distribution summaries, basic
                  correlation exploration, and curve-fitting models to generate 2020–2030 projections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Crime Trends Analysis */}
        <section id="trends" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Crime Trends Analysis (2008-2019)</h3>

            <div className="mb-8 rounded-xl overflow-hidden border border-slate-700 max-w-3xl mx-auto">
              <img src="/projects/crime-trends.png" alt="Crime Rates Trends" className="w-full h-auto" />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-left md:text-justify leading-relaxed">
                The trend analysis shows overall changes in Michigan crime rates from 2008 to 2019, with variation across
                categories.
              </p>

              {/* removed the 4 cards: Assault/Murder/Rape/Robbery */}
            </div>
          </div>
        </section>

        {/* Crime Type Comparison */}
        <section id="comparison" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Crime Type Comparison</h3>

            <div className="mb-8 rounded-xl overflow-hidden border border-slate-700 max-w-3xl mx-auto">
              <img src="/projects/crime-comparison.png" alt="Crime Type Comparison" className="w-full h-auto" />
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <h4 className="text-2xl font-semibold text-gray-300 mb-4">Most Common: Assault</h4>
                  <div className="space-y-2 text-gray-200">
                    <p>
                      <span className="font-semibold">Total Occurrences:</span> 3,614.90
                    </p>
                    <p>
                      <span className="font-semibold">Mean Rate:</span> 301.24 per 100,000
                    </p>
                    <p>
                      <span className="font-semibold">Median Rate:</span> 307.20 per 100,000
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <h4 className="text-2xl font-semibold text-gray-300 mb-4">Least Common: Murder</h4>
                  <div className="space-y-2 text-gray-200">
                    <p>
                      <span className="font-semibold">Total Occurrences:</span> 71.20
                    </p>
                    <p>
                      <span className="font-semibold">Mean Rate:</span> 5.93 per 100,000
                    </p>
                    <p>
                      <span className="font-semibold">Median Rate:</span> 5.85 per 100,000
                    </p>
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

            <div className="mb-8 rounded-xl overflow-hidden border border-slate-700 max-w-3xl mx-auto">
              <img src="/projects/crime-distributions.png" alt="Crime Distributions" className="w-full h-auto" />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-left md:text-justify leading-relaxed">
                Histogram plots summarize how crime rates are distributed across the study period.
              </p>

              {/* removed the 4 distribution cards (Murder Rates / Assault Rates / Rape Rates / Robbery Rates) */}
            </div>
          </div>
        </section>

        {/* Correlation Analysis */}
        <section id="correlation" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Correlation Analysis: Murder vs. Assault</h3>

            <div className="mb-8 rounded-xl overflow-hidden border border-slate-700 max-w-3xl mx-auto">
              <img src="/projects/crime-correlation.png" alt="Murder vs Assault Correlation" className="w-full h-auto" />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-left md:text-justify leading-relaxed">
                The scatter plot examines the relationship between murder rates and assault rates across the study period.
              </p>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Key Findings</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>
                      No strong linear correlation exists between murder and assault rates, indicating these crimes may be
                      influenced by different factors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Murder rates remain relatively stable regardless of assault rate fluctuations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">→</span>
                    <span>Assault rates show greater variability across the time period</span>
                  </li>

                  {/* removed the requested bullet */}
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
                <div className="mb-6 rounded-xl overflow-hidden border border-slate-700 max-w-3xl mx-auto">
                  <img
                    src="/projects/crime-murder-prediction.png"
                    alt="Murder Rate Predictions"
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h5 className="text-lg font-semibold text-blue-300 mb-3">Exponential Model Results</h5>
                  <p className="text-gray-300 text-left md:text-justify mb-4">
                    An exponential decay model was fitted to murder rate data from 2010-2019. The model projects a continued
                    gradual decrease through 2030.
                  </p>
                  <p className="text-blue-300 italic">→ The model suggests murder rates will keep trending downward</p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Assault Rate Predictions</h4>
                <div className="mb-6 rounded-xl overflow-hidden border border-slate-700 max-w-3xl mx-auto">
                  <img
                    src="/projects/crime-assault-prediction.png"
                    alt="Assault Rate Predictions"
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h5 className="text-lg font-semibold text-blue-300 mb-3">Quadratic Model Results</h5>
                  <p className="text-gray-300 text-left md:text-justify mb-4">
                    A quadratic model was selected for assault rates based on the trend shape in the historical data. The
                    model projects higher assault rates by 2030.
                  </p>
                  <p className="text-orange-300 italic">→ This projection should be interpreted with caution</p>
                </div>
              </div>

              {/* removed the entire Model Limitations box */}
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
                    <span>Overall crime rates in Michigan decreased from 2008-2019, with robbery showing the largest decline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Assault remains the most common violent crime in the dataset</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">→</span>
                    <span>Forecasts suggest murder rates may continue falling while assault rates may rise</span>
                  </li>
                </ul>
              </div>

              {/* removed the entire Methodological Findings section */}

              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-6 border border-blue-700">
                <h4 className="text-2xl font-semibold text-blue-300 mb-4">Project Impact</h4>
                <p className="text-gray-200 text-lg text-left md:text-justify leading-relaxed mb-4">
                  This analysis provides evidence-based findings into Michigan&apos;s crime trends, which can inform policy
                  decisions and resource allocation. The results highlight improvements in some categories while pointing to
                  areas that may need continued monitoring.
                </p>
                <p className="text-blue-300 text-base italic">
                  → Demonstrates how data science can be applied to real-world public safety questions
                </p>
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
