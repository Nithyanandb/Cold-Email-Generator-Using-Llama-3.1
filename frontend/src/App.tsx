
import { useState } from 'react';
import About from './About';
import Header from './components/Header';
import Docs from './Docs ';
import EmailGenerator from './EmailGenerator';
import Pricing from './Pricing';
import AuthModal from './AuthModal';
import Setting from './Settings';

function App() {
  const [activeTab, setActiveTab] = useState('email');
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', signInEmail, signInPassword);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} setIsSignInOpen={setIsSignInOpen} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'email' && <EmailGenerator />}
        {activeTab === 'about' && <About />}
        {activeTab === 'pricing' && <Pricing />}
        {activeTab === 'docs' && <Docs />}
        {activeTab === 'settings' && <Setting />}
      </main>
      {isSignInOpen && (
        <AuthModal
          isSignInOpen={isSignInOpen}
          setIsSignInOpen={setIsSignInOpen}
          handleSignIn={handleSignIn}
          signInEmail={signInEmail}
          setSignInEmail={setSignInEmail}
          signInPassword={signInPassword}
          setSignInPassword={setSignInPassword}
        />
      )}
    </div>
  );
}

export default App;