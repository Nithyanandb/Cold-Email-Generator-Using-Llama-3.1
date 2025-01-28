import React from 'react';
import { Globe, Zap, Shield, Users } from 'lucide-react';

function About() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Cold Email Pro</h1>
        <p className="text-zinc-400 text-lg">
          We're revolutionizing cold email outreach with AI-powered personalization and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
          <Globe className="text-blue-500 mb-4" size={24} />
          <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
          <p className="text-zinc-400">Connect with professionals worldwide</p>
        </div>
        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
          <Zap className="text-blue-500 mb-4" size={24} />
          <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
          <p className="text-zinc-400">Generate emails in seconds</p>
        </div>
        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
          <Shield className="text-blue-500 mb-4" size={24} />
          <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
          <p className="text-zinc-400">Enterprise-grade security</p>
        </div>
        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
          <Users className="text-blue-500 mb-4" size={24} />
          <h3 className="text-lg font-semibold mb-2">Team Ready</h3>
          <p className="text-zinc-400">Collaborate with your team</p>
        </div>
      </div>

      <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-8">
        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        <p className="text-zinc-400 leading-relaxed">
          Cold Email Pro was founded with a simple mission: to make cold email outreach more effective and personalized. 
          We believe that every professional deserves the tools to make meaningful connections, and our AI-powered platform 
          makes that possible.
        </p>
      </div>
    </div>
  );
}

export default About;