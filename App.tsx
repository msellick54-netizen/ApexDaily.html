
import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  AlertTriangle, 
  Zap, 
  CheckCircle2, 
  Lightbulb, 
  ShieldAlert,
  Info
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  Cell, 
  Legend,
  ComposedChart,
  Area,
  AreaChart
} from 'recharts';

import { TabType } from './types';
import { 
  FLAVOUR_DATA, 
  PREFERENCE_CHART_DATA, 
  INTENT_CHART_DATA, 
  COVERAGE_CHART_DATA, 
  CPI_CHART_DATA,
  RISK_TABLE_DATA
} from './constants';

import KPICard from './components/KPICard';
import InsightBox from './components/InsightBox';
import ChartCard from './components/ChartCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: <TrendingUp size={18} /> },
    { id: 'demand' as TabType, label: 'Demand Analysis', icon: <BarChart3 size={18} /> },
    { id: 'coverage' as TabType, label: 'Coverage & Portfolio', icon: <Target size={18} /> },
    { id: 'risk' as TabType, label: 'Risk Assessment', icon: <AlertTriangle size={18} /> },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-l-4 border-[#ccff00] p-6 mb-8 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#ccff00] p-3 rounded shadow-[0_0_15px_rgba(204,255,0,0.5)]">
            <Zap className="text-[#111111]" fill="currentColor" size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black font-montserrat tracking-tighter">
              APEX <span className="font-light">DAILY</span>
            </h1>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-xl font-semibold text-white">Flavour Launch Dashboard</h2>
          <p className="text-[#999999] text-sm font-medium">Data-Driven Business Challenge | BM4040 Assessment</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-[#333333]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm transition-all border-b-4 ${
              activeTab === tab.id
                ? 'text-[#ccff00] border-[#ccff00] bg-[#ccff00]/5'
                : 'text-[#999999] border-transparent hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <KPICard value="43" label="Waitlist Responses" sublabel="High-intent early adopters" />
              <KPICard value="3" label="Phase Rollout" sublabel="Unflavoured → Chocolate → Berry" />
              <KPICard value="72%" label="Portfolio Coverage" sublabel="With 3-SKU strategy" />
            </div>

            <section className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Executive Summary</h3>
                  <p className="text-sm text-[#999999]">Based on waitlist analysis (n=43) and UK market validation</p>
                </div>
                <span className="bg-[#ccff00] text-[#111111] px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest">
                  Recommended Strategy
                </span>
              </div>

              <div className="space-y-4">
                <InsightBox 
                  icon={<CheckCircle2 size={18} />} 
                  title="Strategic Recommendation" 
                  description={<p><strong>Implement 3-Phase Staged Rollout:</strong> Launch Unflavoured (Q1) to secure core "Functional Purist" niche (35% preference, 20% ready-to-buy), expand to Chocolate (Q2) for "Performance Indulgence" segment (26% preference, 27% ready-to-buy), then Berry (Q3) for "Active Recovery" niche (12% preference, seasonal timing).</p>}
                />
                <InsightBox 
                  icon={<Lightbulb size={18} />} 
                  title="Key Finding" 
                  description={<p>Unflavoured dominates waitlist demand (15/43 responses) with highest volume despite lower ready-to-buy rate than Chocolate. This validates a niche profitability strategy: serve distinct performance communities sequentially rather than pursuing mass market expansion.</p>}
                />
                <InsightBox 
                  icon={<ShieldAlert size={18} />} 
                  title="Risk Mitigation" 
                  description={<p>Chocolate CPI rose 70% (103.8 → 176.5) from Feb 2024 to Jan 2026. Monitor commodity costs quarterly before Phase 2 commitment to protect premium positioning and margin integrity.</p>}
                />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'demand' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Waitlist Flavour Preference" subtitle="Response distribution by flavour category">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PREFERENCE_CHART_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
                    <XAxis dataKey="name" stroke="#999999" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#999999" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333333' }}
                      itemStyle={{ color: '#ccff00' }}
                    />
                    <Bar dataKey="value" fill="#ccff00" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Purchase Intent vs Demand" subtitle="Ready-to-buy rate comparison">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={INTENT_CHART_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
                    <XAxis dataKey="name" stroke="#999999" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis yAxisId="left" stroke="#4488ff" fontSize={12} tickLine={false} axisLine={false} label={{ value: 'Responses', angle: -90, position: 'insideLeft', fill: '#4488ff', fontSize: 10 }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#ccff00" fontSize={12} tickLine={false} axisLine={false} label={{ value: 'Ready-to-Buy %', angle: 90, position: 'insideRight', fill: '#ccff00', fontSize: 10 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333333' }} />
                    <Legend iconType="rect" verticalAlign="bottom" wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar yAxisId="left" dataKey="total" name="Total Responses" fill="#4488ff" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="rate" name="Ready-to-Buy Rate (%)" stroke="#ccff00" strokeWidth={3} dot={{ r: 6, fill: '#ccff00' }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            <section className="bg-[#1a1a1a] border border-[#333333] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">Ready-To-Buy Analysis by Flavour</h3>
                <p className="text-sm text-[#999999]">Conversion potential across flavour categories</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#ccff00]/10 border-b-2 border-[#333333]">
                    <tr>
                      <th className="p-4 text-[#ccff00] font-bold text-sm">Flavour</th>
                      <th className="p-4 text-[#ccff00] font-bold text-sm">Total Sign-Ups</th>
                      <th className="p-4 text-[#ccff00] font-bold text-sm">Ready-To-Buy Count</th>
                      <th className="p-4 text-[#ccff00] font-bold text-sm">Ready-To-Buy Rate</th>
                      <th className="p-4 text-[#ccff00] font-bold text-sm">Strategic Phase</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#333333]">
                    {FLAVOUR_DATA.map((row) => (
                      <tr key={row.name} className="hover:bg-[#ccff00]/5 transition-colors">
                        <td className="p-4 font-bold text-white">{row.name}</td>
                        <td className="p-4 text-[#999999]">{row.total}</td>
                        <td className="p-4 text-[#999999]">{row.readyToBuy || '—'}</td>
                        <td className="p-4">
                          {row.rate > 0 ? (
                            <span className={row.status === 'high' ? 'text-red-500' : row.status === 'medium' ? 'text-orange-400' : 'text-green-400'}>
                              {row.rate.toFixed(1)}%
                            </span>
                          ) : '—'}
                        </td>
                        <td className="p-4">
                          {row.phase !== '-' ? (
                            <span className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-wider ${row.phase.includes('Phase') ? 'bg-[#ccff00] text-[#111111]' : 'border border-[#ccff00] text-[#ccff00]'}`}>
                              {row.phase}
                            </span>
                          ) : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'coverage' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Customer Coverage by Portfolio Size" subtitle="Portfolio optimisation analysis">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={COVERAGE_CHART_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
                    <XAxis dataKey="name" stroke="#999999" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis domain={[0, 100]} stroke="#999999" fontSize={12} tickLine={false} axisLine={false} label={{ value: 'Coverage %', angle: -90, position: 'insideLeft', fill: '#999999', fontSize: 10 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333333' }} />
                    <Legend />
                    <Bar dataKey="coverage" name="Customer Coverage %" fill="#ccff00" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="target" name="Target (65%)" stroke="#ff4444" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartCard>

              <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-1">Coverage Insights</h3>
                <p className="text-sm text-[#999999] mb-6">Strategic implications</p>
                <div className="space-y-4">
                  <InsightBox 
                    icon={<Zap size={16} />}
                    title="2-SKU Portfolio (Unflavoured + Chocolate)"
                    description={<p><strong>Coverage:</strong> ~60% of waitlist (26/43)<br/><strong>Strategic Value:</strong> Captures both core niche (Functional Purist) and highest-converting segment (Performance Indulgence) while minimizing inventory complexity.</p>}
                  />
                  <InsightBox 
                    icon={<Target size={16} />}
                    title="3-SKU Portfolio (+ Berry)"
                    description={<p><strong>Coverage:</strong> ~72% of waitlist (31/43)<br/><strong>Strategic Value:</strong> Adds +12% incremental coverage but requires 50% more SKU complexity. Justified as Phase 3 after validating initial cash flow.</p>}
                  />
                  <InsightBox 
                    icon={<Lightbulb size={16} />}
                    title="Phasing Rationale"
                    description={<p>Staged rollout de-risks capital commitment: learn from Phase 1, adjust Phase 2 production based on real conversion, and expand when operational capability allows. Niche profitability &gt; mass volume.</p>}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'risk' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Chocolate Input-Cost Risk" subtitle="Cocoa CPI trend (2024-2026)">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CPI_CHART_DATA}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ff4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
                    <XAxis dataKey="date" stroke="#999999" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis domain={[90, 190]} stroke="#999999" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333333' }} />
                    <Area type="monotone" dataKey="value" name="Chocolate CPI" stroke="#ff4444" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartCard>

              <section className="bg-[#1a1a1a] border border-[#333333] rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">Risk Mitigation Strategy</h3>
                  <p className="text-sm text-[#999999]">Phase 2 (Chocolate) controls</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-[#ccff00]/10 border-b-2 border-[#333333]">
                      <tr>
                        <th className="p-4 text-[#ccff00] font-bold">Risk Factor</th>
                        <th className="p-4 text-[#ccff00] font-bold">Mitigation</th>
                        <th className="p-4 text-[#ccff00] font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#333333]">
                      {RISK_TABLE_DATA.map((row) => (
                        <tr key={row.factor} className="hover:bg-[#ccff00]/5">
                          <td className="p-4 font-bold text-white">{row.factor}</td>
                          <td className="p-4 text-[#999999]">{row.mitigation}</td>
                          <td className="p-4">
                            <span className={`font-bold ${row.severity === 'high' ? 'text-red-500' : row.severity === 'medium' ? 'text-orange-400' : 'text-green-400'}`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <section className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-8">
              <h3 className="text-lg font-bold text-white mb-6">Data Limitations & Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-[#ccff00] font-bold text-base mb-4 flex items-center gap-2">
                    <AlertTriangle size={18} /> Limitations
                  </h4>
                  <ul className="space-y-3 text-[#999999] text-sm list-disc list-inside">
                    <li>Small sample size (n=43) limits statistical power</li>
                    <li>Selection bias: early adopters ≠ mass market</li>
                    <li>Mapping 'Fruity' to Berry is interpretive assumption</li>
                    <li>Seasonality not fully captured in Dec 2025 data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#ccff00] font-bold text-base mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} /> Next Steps
                  </h4>
                  <ul className="space-y-3 text-[#999999] text-sm list-disc list-inside">
                    <li>Broader UK survey (n≥300) in Q2 2026</li>
                    <li>Landing page A/B test with paid traffic</li>
                    <li>Berry sub-variant R&D (strawberry vs mixed)</li>
                    <li>Demand forecast model integrating pre-orders + CTR</li>
                    <li>Quarterly CPI monitoring dashboard</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-12 pb-8 bg-[#1a1a1a] border-t-2 border-[#333333] rounded-t-lg text-center px-4 md:px-8">
        <p className="text-white font-bold mb-2">Interactive Dashboard built for BM4040 Assessment</p>
        <p className="text-[#999999] text-sm mb-10 max-w-2xl mx-auto">
          This dashboard synthesizes primary waitlist data (n=43) with UK market evidence to support a data-driven flavour launch strategy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-12">
          <div>
            <strong className="block text-[#ccff00] mb-1">Presented By</strong>
            <p className="text-white">Martin Sellick</p>
            <p className="text-[#999999] text-xs">Founder, Apex Daily LTD</p>
          </div>
          <div>
            <strong className="block text-[#ccff00] mb-1">Academic Context</strong>
            <p className="text-white">MSc Business Analytics & AI</p>
            <p className="text-[#999999] text-xs">University of Lancashire</p>
          </div>
          <div>
            <strong className="block text-[#ccff00] mb-1">Assessment Module</strong>
            <p className="text-white">BM4040</p>
            <p className="text-[#999999] text-xs">Data Powered Decision-Making</p>
          </div>
          <div>
            <strong className="block text-[#ccff00] mb-1">Date</strong>
            <p className="text-white">January 2026</p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#333333] text-[10px] text-[#666666] flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <Info size={12} />
            Built with Recharts & Tailwind CSS | Data sourced from Apex Daily & Bricks AI
          </div>
          <a href="#" className="text-[#ccff00] hover:underline">apexdaily.co.uk</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
