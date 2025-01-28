import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import EmailGenerator from './components/EmailGenerator';
import AuthModal from './components/AuthModal';
import Setting from './components/Settings';
import Docs from './components/Docs ';

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
    <div 
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1737047119483-1ddb4cb13540?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Unsplash image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to make text more readable */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} setIsSignInOpen={setIsSignInOpen} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="-mt-[100px] w-10xl pt-12">
          {activeTab === 'email' && <EmailGenerator />}
        </div>
        {activeTab === 'about' && <About />}
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