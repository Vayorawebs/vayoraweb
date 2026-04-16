import React, { useState } from 'react';
import { Calculator, PhoneMissed, TrendingUp, HandCoins, ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const LeadMagnet = () => {
  const { toast } = useToast();
  const [callsPerWeek, setCallsPerWeek] = useState(100);
  const [missedPercent, setMissedPercent] = useState(25);
  const [avgValue, setAvgValue] = useState(150);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '' });

  // Calculations
  const monthlyCalls = callsPerWeek * 4.33;
  const missedCallsMonthly = Math.round(monthlyCalls * (missedPercent / 100));
  const lostRevenueMonthly = Math.round(missedCallsMonthly * avgValue);
  
  // Assuming AI properly routes, engages, and converts 40% of those missed leads
  const recoveredRevenueMonthly = Math.round(lostRevenueMonthly * 0.4);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone || "N/A",
          subject: "New Lead Magnet Submission",
          message: `AI Lead Calculator Submission.\nLost Rev: $${lostRevenueMonthly}\nAI Recoverable: $${recoveredRevenueMonthly}`,
        }),
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to submit');
      }
      
      setLoading(false);
      setIsFormOpen(false);
      toast({
        title: "Blueprint Sent!",
        description: "Check your email for your custom AI Voice Agent blueprint.",
      });
      setContactData({ name: '', email: '', phone: '' });
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden card-glow">
      <div className="p-8 md:p-12">
        <div className="flex items-center space-x-3 mb-6">
          <Calculator className="text-[var(--vayora-accent-sage)] w-8 h-8" />
          <h2 className="text-3xl font-bold text-white">Missed Call Cost Calculator</h2>
        </div>
        <p className="text-[var(--vayora-text-secondary)] mb-10 text-lg">
          Discover how much revenue you're losing every month from unanswered calls, and see exactly how much an AI Voice Agent can recover for you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Inputs Section */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-white">Weekly Call Volume</label>
                <span className="text-[var(--vayora-accent-sage)] font-bold">{callsPerWeek} calls</span>
              </div>
              <input 
                type="range" 
                min="10" max="1000" step="10"
                value={callsPerWeek} 
                onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                className="w-full appearance-none bg-[var(--vayora-bg-elevated)] h-2 rounded-full outline-none focus:ring-2 focus:ring-[var(--vayora-accent-sage)]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-white">Missed Calls (%)</label>
                <span className="text-[var(--vayora-accent-sage)] font-bold">{missedPercent}%</span>
              </div>
              <input 
                type="range" 
                min="0" max="100" step="1"
                value={missedPercent} 
                onChange={(e) => setMissedPercent(Number(e.target.value))}
                className="w-full appearance-none bg-[var(--vayora-bg-elevated)] h-2 rounded-full outline-none focus:ring-2 focus:ring-[var(--vayora-accent-sage)]"
              />
              <p className="text-xs text-[var(--vayora-text-muted)] mt-2">National average is 20-30%</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-white">Average Customer Value ($)</label>
                <span className="text-[var(--vayora-accent-sage)] font-bold">${avgValue}</span>
              </div>
              <input 
                type="range" 
                min="10" max="2000" step="10"
                value={avgValue} 
                onChange={(e) => setAvgValue(Number(e.target.value))}
                className="w-full appearance-none bg-[var(--vayora-bg-elevated)] h-2 rounded-full outline-none focus:ring-2 focus:ring-[var(--vayora-accent-sage)]"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[var(--vayora-bg-primary)] rounded-xl p-8 border border-[var(--vayora-bg-elevated)]">
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <PhoneMissed className="text-red-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-[var(--vayora-text-muted)] text-sm mb-1">Lost Monthly Revenue (Est.)</p>
                  <p className="text-3xl font-bold text-red-100">${lostRevenueMonthly.toLocaleString()}</p>
                </div>
              </div>

              <div className="h-px w-full bg-[var(--vayora-bg-elevated)]"></div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[var(--vayora-accent-sage)]/10 rounded-lg">
                  <TrendingUp className="text-[var(--vayora-accent-sage)] w-6 h-6" />
                </div>
                <div>
                  <p className="text-[var(--vayora-text-muted)] text-sm mb-1">Revenue Recoverable by AI (Est.)</p>
                  <p className="text-3xl font-bold text-[var(--vayora-accent-sage)]">${recoveredRevenueMonthly.toLocaleString()}</p>
                  <p className="text-xs text-[var(--vayora-text-muted)] mt-1">Assuming a 40% conversion recovery rate</p>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-[var(--vayora-bg-elevated)]">
              {!isFormOpen ? (
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full py-4 px-6 bg-white text-black font-semibold rounded-lg hover:bg-[var(--vayora-accent-sage)] hover:text-black transition-colors flex items-center justify-center space-x-2"
                >
                  <HandCoins className="w-5 h-5" />
                  <span>Claim Your Recovered Revenue</span>
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 fade-in-up">
                  <p className="text-sm text-[var(--vayora-text-secondary)] font-medium mb-4">Enter your details to receive a free strategy on integrating an AI Voice Agent.</p>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[var(--vayora-bg-elevated)] border border-transparent focus:border-[var(--vayora-accent-sage)] rounded-lg px-4 py-3 text-white outline-none transition-all"
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[var(--vayora-bg-elevated)] border border-transparent focus:border-[var(--vayora-accent-sage)] rounded-lg px-4 py-3 text-white outline-none transition-all"
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                  />
                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full py-3 px-6 bg-[var(--vayora-accent-sage)] text-black font-semibold rounded-lg hover:bg-white transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                      <>
                        <span>Get Strategy Blueprint</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;
