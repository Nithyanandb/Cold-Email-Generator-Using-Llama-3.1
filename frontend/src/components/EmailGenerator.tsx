import React, { useState } from 'react';
import { Sparkles, ArrowRight, Mail } from 'lucide-react';
import axios from 'axios';

function EmailGenerator() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const generateEmail = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://cold-email-generator-using-llama-3-1.onrender.com/generate-email', {
        url: url,
      });
      setEmail(response.data.email);
    } catch (error) {
      console.error('Error generating email:', error);
      alert('Error generating email. Please check the URL and try again.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition-colors group">
     
          <h3 className="text-lg font-semibold mb-2">Email Generation</h3>
          <p className="text-zinc-400">Generate personalized cold emails using AI technology</p>
        </div>
        {/* Other feature cards */}
      </div>

      <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-semibold mb-6">Generate Email</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter job posting URL"
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <button
              onClick={generateEmail}
              disabled={loading}
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 flex items-center justify-center gap-2 disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? (
                <>
                  <Sparkles className="animate-spin" size={20} />
                  Generating...
                </>
              ) : (
                <>
                  Generate
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </div>
        </div>

        {email && (
          <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-black">
            <div className="p-6 bg-zinc-900/30 border-b border-zinc-800">
              <div className="flex items-start gap-4 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Generated Email</span>
                    <span className="text-xs text-zinc-500">•</span>
                    <span className="text-xs text-zinc-500">just now</span>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-zinc-300 whitespace-pre-wrap">
                      {email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailGenerator;