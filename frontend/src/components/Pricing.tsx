import React from 'react';
import { CheckCircle } from 'lucide-react';

function Pricing() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-zinc-400 text-lg">
          Choose the plan that's right for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="text-3xl font-bold">$29<span className="text-zinc-400 text-base font-normal">/mo</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              100 emails per month
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              Basic templates
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              Email support
            </li>
          </ul>
          <button className="w-full py-2 bg-white text-black rounded-lg hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>

        <div className="bg-zinc-900/50 rounded-xl border border-blue-500 p-6 transform scale-105">
          <div className="text-center mb-6">
            <div className="text-blue-500 font-medium mb-2">Most Popular</div>
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="text-3xl font-bold">$79<span className="text-zinc-400 text-base font-normal">/mo</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              500 emails per month
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              Advanced templates
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              Priority support
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              API access
            </li>
          </ul>
          <button className="w-full py-2 bg-white text-black rounded-lg hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>

        <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold">$199<span className="text-zinc-400 text-base font-normal">/mo</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              Unlimited emails
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              Custom templates
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              24/7 support
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CheckCircle size={16} className="text-blue-500" />
              Advanced analytics
            </li>
          </ul>
          <button className="w-full py-2 bg-white text-black rounded-lg hover:bg-blue-600 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;