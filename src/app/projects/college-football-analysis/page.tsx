'use client'

import { useState } from 'react'

export default function CollegeFootballAnalysisPage() {
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
            Analysis of College Football Playoff Teams: Statistical Insights and Trends
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Data Science (Programming in R) | STT 180
          </p>
          <p className="text-gray-400 text-lg">
            October 2023 – December 2023
          </p>
        </div>

        {/* Hero Image - Smaller */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl max-w-xl mx-auto">
          <img
            src="/projects/cfb-hero.png"
            alt="College Football Playoff Analysis"
            className="w-full h-auto"
          />
        </div>

        {/* Quick Overview */}
        <div className="bg-slate-800/50 rounded-xl p-8 mb-12 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
          <p className="text-gray-300 text-lg leading-relaxed text-left md:text-justify mb-4">
            This data science project explored the dynamic world of college football by analyzing comprehensive statistics
            of College Football Playoff (CFB) teams from 2014 to 2022. Using linear regression models and data visualization
            in R, the analysis identified key offensive and defensive statistics that correlate with playoff success, compared
            the relevance of average versus total statistics, examined conference-wise performance variations, and identified
            statistical snubs and underperformers in the playoff selection process.
          </p>
          <p className="text-blue-300 text-base italic">
            → Applied quantitative modeling using R, ggplot2, and linear regression to uncover patterns in what makes a team playoff-worthy
          </p>
        </div>

        {/* Approach Overview - Table of Contents */}
        <div className="bg-slate-800/70 rounded-xl p-8 mb-12 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">Approach Overview</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { id: 'research', title: '1. Research Questions' },
              { id: 'methodology', title: '2. Methodology' },
              { id: 'models', title: '3. Statistical Models' },
              { id: 'comparison', title: '4. Average vs Total Stats' },
              { id: 'conference', title: '5. Conference Strength' },
              { id: 'snubs', title: '6. Snubs & Underperformers' },
              { id: 'conclusions', title: '7. Conclusions' }
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

        {/* Research Questions */}
        <section id="research" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Research Questions</h3>

            <div className="space-y-6 text-gray-300 text-lg">
              <div className="space-y-4 mt-6">
                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 1: Key Statistics</h4>
                  <p className="text-left md:text-justify">
                    What are the key offensive and defensive statistics that correlate with a team's success in reaching
                    the CFB playoffs? Which metrics truly matter for playoff-caliber performance?
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 2: Average vs Total</h4>
                  <p className="text-left md:text-justify">
                    Do average statistics (yards per game, points per game) hold more weight, or do total statistics
                    (total yards, total points) tell a better story about team performance throughout the season?
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 3: Conference Patterns</h4>
                  <p className="text-left md:text-justify">
                    Are certain conferences consistently producing teams that excel in crucial statistics? How do
                    conference playing styles and strengths differ in producing playoff-ready teams?
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Question 4: Selection Evaluation</h4>
                  <p className="text-left md:text-justify">
                    Who were the snubs - teams that put up playoff-worthy numbers but didn't make the cut? And what
                    about teams that underperformed statistically but still secured a playoff spot?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section id="methodology" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Methodology</h3>

            <div className="space-y-6 text-gray-300 text-lg">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Statistical Modeling</h4>
                <p className="text-left md:text-justify mb-3">
                  Applied linear regression models to identify key offensive and defensive statistics correlating
                  with CFB Playoff success. Used R's step function to optimize model fit and calculated R-squared
                  values to measure predictive accuracy.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Data Visualization & Analysis</h4>
                <p className="text-left md:text-justify">
                  Created comprehensive visualizations using ggplot2 including conference strength scatter plots,
                  average vs total statistics comparisons, and year-by-year analysis identifying statistical trends.
                  All data cleaning and modeling performed in R.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistical Models */}
        <section id="models" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Statistical Models: Offense vs Defense</h3>

            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img
                src="/projects/cfb-models.png"
                alt="Offensive and Defensive Models"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-left md:text-justify leading-relaxed">
                Linear regression models were developed separately for offensive and defensive statistics to determine
                which side of the ball better predicts playoff success.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">Offensive Model Results</h4>
                  <p className="text-sm text-gray-400 mb-3">Key Variables:</p>
                  <ul className="text-sm text-gray-300 space-y-1 mb-4">
                    <li>• Offensive Yards per Game</li>
                    <li>• Total Offensive Yards</li>
                    <li>• Yards per Play</li>
                    <li>• Pass Completions</li>
                    <li>• Pass Yards</li>
                  </ul>
                  <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                    <p className="text-2xl font-bold text-green-400 mb-1">R² = 0.904</p>
                    <p className="text-sm text-gray-300">90.4% of variance explained</p>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">Defensive Model Results</h4>
                  <p className="text-sm text-gray-400 mb-3">Key Variables:</p>
                  <ul className="text-sm text-gray-300 space-y-1 mb-4">
                    <li>• Yards Per Game Allowed</li>
                    <li>• Yards per Play Allowed</li>
                    <li>• Opponent Rush Attempts</li>
                    <li>• Rush Yards Allowed</li>
                    <li>• Opponent Pass Attempts</li>
                  </ul>
                  <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
                    <p className="text-2xl font-bold text-blue-400 mb-1">R² = 0.895</p>
                    <p className="text-sm text-gray-300">89.5% of variance explained</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 mt-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Key Finding</h4>
                <p className="text-lg">
                  Offense is a slightly better predictor of playoff success than defense (R² 0.904 vs 0.895), though both
                  show strong correlations. While defense remains crucial, the ability to consistently score and gain yardage
                  may have a marginally greater impact on playoff prospects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Average vs Total Statistics */}
        <section id="comparison" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Average vs Total Statistics Comparison</h3>

            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img
                src="/projects/cfb-avg-total.png"
                alt="Average vs Total Statistics"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-left md:text-justify leading-relaxed">
                A critical comparison examined whether per-game averages or total season statistics provide better
                predictive power for playoff qualification.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-red-400 mb-4">Average Statistics Model</h4>
                  <p className="text-sm text-gray-400 mb-3">Variables Tested:</p>
                  <ul className="text-sm text-gray-300 space-y-1 mb-4">
                    <li>• Points Per Game</li>
                    <li>• Offensive Yards per Game</li>
                    <li>• Yards Allowed per Game</li>
                    <li>• Pass/Rush Yards per Game</li>
                    <li>• Average Sacks per Game</li>
                    <li>• Average Turnover Margin per Game</li>
                  </ul>
                  <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                    <p className="text-2xl font-bold text-red-400 mb-1">R² = 0.368</p>
                    <p className="text-sm text-gray-300">Weak correlation - only 36.8% variance explained</p>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Total Statistics Model</h4>
                  <p className="text-sm text-gray-400 mb-3">Variables Tested:</p>
                  <ul className="text-sm text-gray-300 space-y-1 mb-4">
                    <li>• Total Points</li>
                    <li>• Total Offensive Yards</li>
                    <li>• Pass/Rush Attempts and Yards</li>
                    <li>• Total Sacks</li>
                    <li>• Tackles for Loss Yards</li>
                    <li>• Total Turnovers Lost</li>
                    <li>• Total TDs Allowed</li>
                  </ul>
                  <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                    <p className="text-2xl font-bold text-green-400 mb-1">R² = 0.861</p>
                    <p className="text-sm text-gray-300">Strong correlation - 86.1% variance explained</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 mt-6">
                <h4 className="text-xl font-semibold text-green-400 mb-3">Key Finding</h4>
                <p className="text-lg">
                  Total season statistics are vastly superior predictors of playoff success compared to per-game averages
                  (R² 0.861 vs 0.368). Total stats provide a more comprehensive view of team performance throughout the season,
                  capturing the full extent of capabilities and consistency over time rather than game-by-game fluctuations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Strength */}
        <section id="conference" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Conference Strength Analysis</h3>

            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img
                src="/projects/cfb-conference.png"
                alt="Conference Strength"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-left md:text-justify leading-relaxed mb-6">
                Conference-wise analysis using the correlated statistical models revealed significant differences in playing
                styles and statistical profiles.
              </p>

              <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">How to Read the Charts</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-green-400 mb-2">Best Position: Bottom-Right</p>
                    <p className="text-sm">High offensive scores + Low defensive scores (strong defense)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-400 mb-2">Worst Position: Top-Left</p>
                    <p className="text-sm">Low offensive scores + High defensive scores (weak defense)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Conference Performance Patterns</h4>

                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-lg p-5">
                    <h5 className="font-semibold text-green-400 mb-2">SEC and ACC (Best Overall)</h5>
                    <p className="text-left md:text-justify">
                      Consistently positioned in the bottom-right quadrant across both average and total statistics,
                      indicating strong balanced performance with excellent offense and defense. These conferences produce
                      the most playoff-ready statistical profiles.
                    </p>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-5">
                    <h5 className="font-semibold text-yellow-400 mb-2">Big 12 and Pac-12 (Offensive-Oriented)</h5>
                    <p className="text-left md:text-justify">
                      Higher offensive yards but relatively weaker defensive statistics, reflecting high-scoring,
                      offensive-oriented playing styles. Strong in generating yardage and points but more vulnerable defensively.
                    </p>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-5">
                    <h5 className="font-semibold text-blue-400 mb-2">Big Ten (Balanced Approach)</h5>
                    <p className="text-left md:text-justify">
                      More defensive-oriented with lower offensive totals but strong defensive metrics. Balanced approach
                      with moderate offensive and defensive scores, representing a more traditional, defense-first philosophy.
                    </p>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-5">
                    <h5 className="font-semibold text-gray-400 mb-2">FBS Independent (Varied)</h5>
                    <p className="text-left md:text-justify">
                      Varied positioning showing diverse playing styles among independent teams without consistent conference
                      patterns or strategic uniformity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 mt-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Key Finding</h4>
                <p className="text-lg">
                  Conference variations reveal strategic and stylistic differences in approaches to the game. SEC and ACC
                  consistently produce the most playoff-ready statistical profiles with balanced excellence. Total statistics
                  analysis provided clearer separation between conferences than averages, further validating their superiority
                  as predictors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Snubs and Underperformers */}
        <section id="snubs" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Playoff Snubs & Underperformers Analysis</h3>

            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img
                src="/projects/cfb-snubs.png"
                alt="Snubs and Underperformers"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Statistical Snubs</h4>
                <p className="text-gray-300 text-lg text-left md:text-justify leading-relaxed mb-4">
                  Using the offensive and defensive models, teams were identified that had playoff-worthy statistics but
                  did not make the CFB Playoff. These teams scored higher than the average playoff team cutoff based on
                  the statistical models. This analysis does not necessarily mean these teams should have made the playoffs,
                  but rather identifies which teams would be next in line based purely on statistical performance.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">Underperformers</h4>
                <p className="text-gray-300 text-lg text-left md:text-justify leading-relaxed mb-4">
                  Teams that made the CFB Playoff but scored below the average of that year's statistical snubs were
                  classified as underperformers. If a team scored below average offensively and above average defensively
                  (indicating weaker defense - remember higher defensive stats are worse), they were considered statistical
                  underperformers.
                </p>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h5 className="text-lg font-semibold text-red-400 mb-3">Identified Underperformers:</h5>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <span className="text-blue-400 font-semibold">2014:</span> Florida State (14 games)
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">2018:</span> Notre Dame (13-12-1 record)
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">All Other Years (2015-2017, 2019-2022):</span> No significant underperformers identified
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 mt-6">
                <h4 className="text-xl font-semibold text-green-400 mb-3">Key Finding</h4>
                <p className="text-lg text-gray-300">
                  The minimal number of underperformers (only 2 out of 36 playoff teams from 2014-2022) shows the
                  CFB Playoff Committee's effectiveness in selecting teams. The statistical models largely validate the
                  committee's decisions, with only occasional discrepancies in 2014 and 2018. This suggests that while a
                  large number of teams meet statistical criteria for playoff selection, the committee's judgment-based
                  approach works well in identifying the most deserving teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusions */}
        <section id="conclusions" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6">Conclusions</h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p className="text-left md:text-justify">
                Linear modeling revealed high statistical correlation among playoff teams (R² &gt; 0.86), with offense
                slightly outweighing defense (R² 0.904 vs 0.895) as a playoff predictor. Total season statistics
                (R² 0.861) proved superior to per-game averages (R² 0.368) for playoff correlation.
              </p>

              <p className="text-left md:text-justify">
                Conference analysis showed SEC and ACC teams with the most playoff-ready profiles, while Big 12 and
                Pac-12 favor offense-oriented styles and Big Ten emphasizes defensive play. The CFB Playoff Committee's
                selections were statistically validated, with only 2 underperformers across 9 years.
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
