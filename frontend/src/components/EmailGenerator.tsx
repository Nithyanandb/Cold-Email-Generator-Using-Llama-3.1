import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Mail, Newspaper, Copy, Check, Link, X, RefreshCw, Loader2 } from 'lucide-react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function EmailGenerator() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const emailRef = useRef(null);
  const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://629dfaba-51a3-441a-824c-aec031b15f9a-00-1izh6s7c06t05.sisko.replit.dev";


  useEffect(() => {
    if (email && emailRef.current) {
      emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [email]);

  const generateEmail = async () => {
    if (!url.trim()) {
      setShowUrlInput(true);
      return;
    }

    setLoading(true);
    setEmail('');
    setShowUrlInput(false);

    try {
      const response = await axios.post(`${BACKEND_URL}/generate-email`,
        { url },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setEmail(response.data.email);
    } catch (error) {
      console.error('Error generating email:', error);
      if (axios.isAxiosError(error)) {
        alert(`Error generating email: ${error.response?.data?.detail || error.message}`);
      } else {
        alert('Error generating email. Please check the URL and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleRefresh = () => {
    setUrl('');
    setEmail('');
    setCopied(false);
    setShowUrlInput(false);
  };



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col"
    >
      <AnimatePresence>
        {!email && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex items-center justify-center p-4"
          >
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl mx-auto flex items-center justify-center shadow-2xl"
              >
                <Newspaper size={40} className="text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              >
                AI Email Generator
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-lg sm:text-xl"
              >
                Transform job postings into personalized emails in seconds
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col items-center gap-6">
            <AnimatePresence>
              {showUrlInput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full relative"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Link size={20} className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Paste your job posting URL here..."
                        className="w-full pl-12 pr-12 py-4 bg-black rounded-xl text-white placeholder-gray-500 transition-all text-lg border-none outline-none"
                      />

                      <button
                        onClick={() => setShowUrlInput(false)}
                        className="absolute inset-y-0 right-4 flex items-center"
                      >
                        <X size={20} className="text-gray-500 hover:text-gray-300 transition-colors" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-16 flex items-center gap-4">
              <motion.button
                onClick={generateEmail}
                disabled={loading}
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0 }}
                className="px-8 py-4 bg-white text-black font-medium rounded-xl hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2 disabled:opacity-50 whitespace-nowrap text-lg shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Crafting...
                  </>
                ) : (
                  <>
                    Generate Email
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
              {email && (
                <motion.button
                  onClick={handleRefresh}
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0 }}
                  className="p-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
                >
                  <RefreshCw size={20} />
                </motion.button>
              )}
            </div>
          </div>

          {email && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
              ref={emailRef}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <Mail size={24} className="text-white" />
                    </motion.div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-xl text-white">Generated Email</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-500">just now</span>
                        </div>
                        <motion.button
                          onClick={handleCopy}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-8 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors backdrop-blur-sm"
                        >
                          {copied ? (
                            <>
                              <Check size={16} className="text-green-400" />
                              <span className="text-green-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={16} className="text-white" />
                              <span className="text-white">Copy</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                      <div className="prose prose-invert max-w-none">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="bg-black/30 rounded-xl p-6 text-base text-gray-300 border border-gray-800/50 shadow-lg"
                        >
                          <TypeAnimation
                            sequence={[email]}
                            wrapper="div"
                            speed={90}
                            style={{ whiteSpace: 'pre-wrap' }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default EmailGenerator;