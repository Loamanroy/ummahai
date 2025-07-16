import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Sun, Moon, Wallet, Menu, X, Activity, TrendingUp, Shield, Zap, Brain, Globe } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { MetricCard } from './components/ui/MetricCard'

function App() {
  console.log('🚀 NEW App.tsx component loaded with Performance Showcase!')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const profitData = [
    { name: 'Jan', profit: 4000, trades: 24 },
    { name: 'Feb', profit: 3000, trades: 18 },
    { name: 'Mar', profit: 5000, trades: 32 },
    { name: 'Apr', profit: 7800, trades: 45 },
    { name: 'May', profit: 8900, trades: 52 },
    { name: 'Jun', profit: 12400, trades: 67 },
  ]

  const performanceData = [
    { name: 'Week 1', winRate: 85, volume: 120000 },
    { name: 'Week 2', winRate: 88, volume: 135000 },
    { name: 'Week 3', winRate: 82, volume: 98000 },
    { name: 'Week 4', winRate: 91, volume: 156000 },
  ]

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">U</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">UMMAH AI Platform</h1>
                <p className="text-xs text-slate-400">Quantum-Class Mesh Liquidity AI</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-slate-700 rounded-lg">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">CerebellumBot vX: Active & Breathing</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-xs bg-teal-500/20 text-teal-400 rounded border border-teal-500">
                Active
              </button>
              <button className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded border border-blue-500">
                Guide
              </button>
              <button className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded border border-purple-500">
                Simple View
              </button>
              <button className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded border border-blue-500">
                Themes
              </button>
              <button className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded border border-green-500">
                Layout
              </button>
              <button className="px-3 py-1 text-xs bg-teal-500 text-white rounded">
                Investor Registration
              </button>
              <button className="px-3 py-1 text-xs bg-green-600 text-white rounded">
                PARANOIA: OFF
              </button>
            </div>
          </div>
        </div>
      </header>

      <motion.div
        className={`fixed left-0 top-16 h-full w-64 bg-slate-800 border-r border-slate-700 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -256 }}
      >
        <div className="p-4">
          <nav className="space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Trading & Markets
            </div>
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-700 rounded-lg transition-colors flex items-center space-x-2">
              <TrendingUp size={16} />
              <span>Live Trading</span>
            </button>
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-700 rounded-lg transition-colors flex items-center space-x-2">
              <Activity size={16} />
              <span>Market Analysis</span>
            </button>
            
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 mt-6">
              AI & Analytics
            </div>
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-700 rounded-lg transition-colors">
              AI Modules Overview
            </button>
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-700 rounded-lg transition-colors">
              Quantum Predictor
            </button>
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-700 rounded-lg transition-colors">
              Risk Management
            </button>
          </nav>
        </div>
      </motion.div>

      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} pt-4`}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-20 mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                CerebellumBot <span className="text-teal-400">vX</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Advanced AI-powered trading platform with quantum-class mesh liquidity and real-time data intelligence
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors duration-300">
                  Start Trading
                </button>
                <button className="px-8 py-4 border border-teal-500 text-teal-400 hover:bg-teal-500/10 font-semibold rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How It <span className="text-teal-400">Works</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience the future of AI-powered trading with our revolutionary 3-step process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-16 bg-teal-400/30 hidden md:block"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect & Configure</h3>
                <p className="text-slate-300 leading-relaxed">
                  Link your exchange accounts securely and configure your trading preferences with our intuitive setup wizard
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-16 bg-teal-400/30 hidden md:block"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Analysis</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our quantum-class AI analyzes market data in real-time, identifying optimal trading opportunities across multiple exchanges
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Execute & Profit</h3>
                <p className="text-slate-300 leading-relaxed">
                  Automated execution of trades with advanced risk management, while you monitor performance through our intuitive dashboard
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Architecture Overview Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Architecture <span className="text-teal-400">Overview</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Built on cutting-edge technology stack for maximum performance and reliability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Engine</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Quantum-class neural networks with real-time market analysis and predictive modeling capabilities
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Advanced machine learning algorithms</li>
                  <li>• Real-time data processing</li>
                  <li>• Predictive market analysis</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Security Layer</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Military-grade encryption with zero-knowledge architecture ensuring complete privacy and anonymity
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• End-to-end encryption</li>
                  <li>• Zero-knowledge protocols</li>
                  <li>• Anonymous trading</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Execution Engine</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Lightning-fast trade execution with advanced risk management and portfolio optimization
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Sub-millisecond execution</li>
                  <li>• Advanced risk management</li>
                  <li>• Portfolio optimization</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30 rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Multi-Exchange</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Seamless integration with major cryptocurrency exchanges for optimal liquidity and arbitrage
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• 15+ exchange integrations</li>
                  <li>• Cross-exchange arbitrage</li>
                  <li>• Unified liquidity pools</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-teal-400" size={24} />
                <h3 className="text-lg font-semibold">Real-Time Clock</h3>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-teal-400 mb-2">
                  {formatTime(currentTime)}
                </div>
                <div className="text-sm text-slate-400">
                  {formatDate(currentTime)}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Sun className="text-yellow-400" size={24} />
                <h3 className="text-lg font-semibold">Weather</h3>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">22°C</div>
                <div className="text-sm text-slate-400">Sunny, Clear Sky</div>
                <div className="text-xs text-slate-500 mt-2">New York, NY</div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Moon className="text-purple-400" size={24} />
                <h3 className="text-lg font-semibold">Prayer Times</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Fajr</span>
                  <span>05:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dhuhr</span>
                  <span>12:45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Asr</span>
                  <span>16:20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Maghrib</span>
                  <span>19:15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Isha</span>
                  <span>20:45</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <motion.h2 
              className="text-2xl font-bold text-slate-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Performance Showcase
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <MetricCard
                title="Total Profit"
                value="$24,567.89"
                icon={<TrendingUp size={20} />}
                trend="up"
                trendValue="+12.5% this month"
              />
              
              <MetricCard
                title="Win Rate"
                value="87.3%"
                icon={<Activity size={20} />}
                trend="up"
                trendValue="+2.1% this week"
              />
              
              <MetricCard
                title="Active Trades"
                value={42}
                icon={<Zap size={20} />}
                trend="neutral"
                trendValue="Stable volume"
              />
              
              <MetricCard
                title="Risk Score"
                value="2.4/10"
                icon={<Shield size={20} />}
                trend="down"
                trendValue="Low risk maintained"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                className="bg-slate-800 border border-slate-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Profit Trend</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={profitData}>
                      <defs>
                        <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="profit" 
                        stroke="#14B8A6" 
                        strokeWidth={2}
                        fill="url(#profitGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                className="bg-slate-800 border border-slate-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Win Rate Performance</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="winRate" 
                        stroke="#14B8A6" 
                        strokeWidth={3}
                        dot={{ fill: '#14B8A6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#14B8A6', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Wallet className="text-green-400" size={24} />
                <h3 className="text-lg font-semibold">Wallet</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Total Balance</span>
                  <span className="text-xl font-bold text-green-400">$12,450.67</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Available</span>
                  <span className="text-green-400">$8,230.45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">In Trading</span>
                  <span className="text-yellow-400">$4,220.22</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="text-teal-400" size={24} />
                <h3 className="text-lg font-semibold">AI Modules</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quantum Predictor</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Risk Analyzer</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Market Scanner</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Portfolio Optimizer</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Supported Exchanges Section */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Supported <span className="text-teal-400">Exchanges</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Seamlessly integrated with 15+ major cryptocurrency exchanges for optimal liquidity and trading opportunities
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  { name: 'Binance', symbol: 'B', color: 'from-yellow-400 to-yellow-600' },
                  { name: 'Bybit', symbol: 'B', color: 'from-orange-400 to-orange-600' },
                  { name: 'OKX', symbol: 'O', color: 'from-blue-400 to-blue-600' },
                  { name: 'Coinbase', symbol: 'C', color: 'from-blue-500 to-blue-700' },
                  { name: 'Kraken', symbol: 'K', color: 'from-purple-400 to-purple-600' },
                  { name: 'KuCoin', symbol: 'K', color: 'from-green-400 to-green-600' }
                ].map((exchange, index) => (
                  <motion.div
                    key={exchange.name}
                    className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6 text-center hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${exchange.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-white font-bold text-xl">{exchange.symbol}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{exchange.name}</h3>
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                      <span className="text-teal-400 text-sm">Active</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-slate-400 mb-4">And 9+ more exchanges coming soon</p>
                <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/25">
                  View All Exchanges
                </button>
              </motion.div>
            </div>
          </section>

          {/* Privacy & Anonymity Section */}
          <section className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Privacy & <span className="text-teal-400">Anonymity</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Military-grade encryption with zero-knowledge architecture ensuring complete privacy and anonymity
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { icon: Shield, title: 'End-to-End Encryption', desc: 'Military-grade AES-256 encryption' },
                        { icon: Zap, title: 'Zero-Knowledge Protocols', desc: 'Complete data anonymization' },
                        { icon: Globe, title: 'Anonymous Trading', desc: 'No personal data required' },
                        { icon: Activity, title: 'Secure Data Storage', desc: 'Distributed encrypted storage' }
                      ].map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="text-white" size={20} />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                            <p className="text-slate-400 text-sm">{feature.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="order-1 lg:order-2 text-center lg:text-left"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-8 shadow-2xl shadow-teal-500/25">
                    <Shield className="text-white" size={60} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Complete Privacy Protection</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Your trading data is fully encrypted and anonymized. We use advanced cryptographic protocols 
                    to ensure your financial information remains completely private and secure at all times.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/25">
                      Learn More
                    </button>
                    <button className="px-6 py-3 border border-teal-500 text-teal-400 font-semibold rounded-lg hover:bg-teal-500/10 transition-all duration-300">
                      Security Audit
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Performance Showcase Section */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Performance <span className="text-teal-400">Showcase</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Real-time metrics and performance data from our advanced AI trading algorithms
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { label: 'Total Profit', value: '$2,847,392', change: '+24.7%', color: 'text-green-400' },
                  { label: 'Win Rate', value: '87.3%', change: '+5.2%', color: 'text-teal-400' },
                  { label: 'Active Trades', value: '1,247', change: '+12.8%', color: 'text-blue-400' },
                  { label: 'Risk Score', value: '2.1/10', change: '-0.3', color: 'text-yellow-400' }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-sm text-slate-400 mb-2">{metric.label}</div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className={`text-sm ${metric.color}`}>{metric.change}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Live Trading Performance</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mb-4">Recent Trades</h4>
                    <div className="space-y-3">
                      {profitData.map((trade, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                          <div>
                            <div className="text-white font-medium">{trade.name}</div>
                            <div className="text-sm text-slate-400">{trade.trades} trades</div>
                          </div>
                          <div className={`font-bold ${trade.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {trade.profit > 0 ? '+' : ''}${trade.profit.toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mb-4">Performance Metrics</h4>
                    <div className="space-y-4">
                      {performanceData.map((metric, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-slate-300">{metric.name}</span>
                          <span className="text-white font-semibold">{metric.winRate}% | Vol: {metric.volume}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Investor Benefits Section */}
          <section className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Investor <span className="text-teal-400">Benefits</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Exclusive advantages and features designed for serious cryptocurrency investors
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Advanced Analytics',
                    description: 'Deep market analysis with AI-powered insights and predictive modeling for optimal trading decisions.',
                    features: ['Real-time market analysis', 'Predictive algorithms', 'Risk assessment tools']
                  },
                  {
                    icon: Shield,
                    title: 'Institutional Security',
                    description: 'Bank-grade security infrastructure with multi-layer protection and insurance coverage.',
                    features: ['Multi-signature wallets', 'Cold storage protection', 'Insurance coverage']
                  },
                  {
                    icon: Zap,
                    title: 'Lightning Execution',
                    description: 'Sub-millisecond trade execution with direct exchange connectivity and minimal slippage.',
                    features: ['Ultra-low latency', 'Direct market access', 'Minimal slippage']
                  },
                  {
                    icon: Globe,
                    title: 'Global Markets',
                    description: 'Access to 15+ major exchanges worldwide with unified portfolio management.',
                    features: ['Multi-exchange access', 'Global liquidity', 'Unified dashboard']
                  },
                  {
                    icon: Activity,
                    title: '24/7 Monitoring',
                    description: 'Round-the-clock market monitoring with automated alerts and risk management.',
                    features: ['Continuous monitoring', 'Automated alerts', 'Risk management']
                  },
                  {
                    icon: Brain,
                    title: 'AI Optimization',
                    description: 'Machine learning algorithms that continuously optimize your trading strategies.',
                    features: ['Strategy optimization', 'Performance learning', 'Adaptive algorithms']
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-6 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                      <benefit.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Badges Section */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Trusted by <span className="text-teal-400">Professionals</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Join thousands of professional traders and institutions who trust our platform
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {[
                  { name: 'SOC 2 Certified', icon: Shield },
                  { name: 'ISO 27001', icon: Globe },
                  { name: 'PCI DSS', icon: Activity },
                  { name: 'GDPR Compliant', icon: Zap }
                ].map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    className="bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 rounded-lg p-6 text-center hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <badge.icon className="text-teal-400 mx-auto mb-4" size={32} />
                    <div className="text-white font-semibold text-sm">{badge.name}</div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    quote: "CerebellumBot vX has revolutionized our trading operations. The AI-powered insights are incredibly accurate.",
                    author: "Sarah Chen",
                    role: "Portfolio Manager, Quantum Capital"
                  },
                  {
                    quote: "The security features and institutional-grade infrastructure give us complete confidence in the platform.",
                    author: "Michael Rodriguez",
                    role: "CTO, Digital Assets Fund"
                  },
                  {
                    quote: "Outstanding performance and reliability. Our returns have increased by 40% since implementing this platform.",
                    author: "David Kim",
                    role: "Head of Trading, Apex Investments"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={testimonial.author}
                    className="bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-teal-400 text-4xl mb-4">"</div>
                    <p className="text-slate-300 mb-6 leading-relaxed">{testimonial.quote}</p>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Platform <span className="text-teal-400">Roadmap</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Our vision for the future of AI-powered cryptocurrency trading
                </p>
              </motion.div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-400/30 hidden md:block"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      quarter: 'Q1 2025',
                      title: 'Advanced AI Integration',
                      description: 'Enhanced machine learning algorithms with quantum computing integration for superior market prediction.',
                      status: 'completed',
                      features: ['Quantum AI algorithms', 'Enhanced prediction models', 'Real-time optimization']
                    },
                    {
                      quarter: 'Q2 2025',
                      title: 'Multi-Chain Support',
                      description: 'Expansion to support multiple blockchain networks including Ethereum, Solana, and Polygon.',
                      status: 'in-progress',
                      features: ['Cross-chain trading', 'DeFi integration', 'Yield farming strategies']
                    },
                    {
                      quarter: 'Q3 2025',
                      title: 'Institutional Features',
                      description: 'Advanced portfolio management tools and institutional-grade reporting capabilities.',
                      status: 'planned',
                      features: ['Portfolio analytics', 'Compliance reporting', 'Multi-user management']
                    },
                    {
                      quarter: 'Q4 2025',
                      title: 'Global Expansion',
                      description: 'Launch in new markets with localized support and regulatory compliance.',
                      status: 'planned',
                      features: ['Regional compliance', 'Local partnerships', 'Multi-language support']
                    }
                  ].map((milestone, index) => (
                    <motion.div
                      key={milestone.quarter}
                      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      <div className="flex-1 md:w-1/2">
                        <div className={`bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                          <div className="flex items-center mb-4">
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                              milestone.status === 'in-progress' ? 'bg-teal-500/20 text-teal-400' :
                              'bg-slate-500/20 text-slate-400'
                            }`}>
                              {milestone.quarter}
                            </div>
                            <div className={`ml-3 w-2 h-2 rounded-full ${
                              milestone.status === 'completed' ? 'bg-green-400' :
                              milestone.status === 'in-progress' ? 'bg-teal-400' :
                              'bg-slate-400'
                            }`}></div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                          <p className="text-slate-300 mb-4 leading-relaxed">{milestone.description}</p>
                          <ul className="space-y-2">
                            {milestone.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full border-4 border-slate-900 hidden md:block"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Signup Footer */}
          <motion.div
            className="mt-16 mb-8 max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest updates on new features, 
                trading insights, and platform improvements delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
                <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-800">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default App
