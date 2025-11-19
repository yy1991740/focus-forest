import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Timer from './components/Timer/Timer';
import Forest from './components/Forest/Forest';
import Stats from './components/Stats/Stats'; // Import Stats
import './App.css';

function App() {
  const [session, setSession] = useState(null);
  const [isLoginView, setIsLoginView] = useState(true);
  const [mainView, setMainView] = useState('timer'); // 'timer', 'forest', or 'stats'

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  const showForest = () => {
    setMainView('forest');
  };

  const showTimer = () => {
    setMainView('timer');
  };

  const showStats = () => { // Function to show stats view
    setMainView('stats');
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  const renderMainView = () => {
    switch (mainView) {
      case 'timer':
        return <Timer showForest={showForest} showStats={showStats} />;
      case 'forest':
        return <Forest showTimer={showTimer} showStats={showStats} />;
      case 'stats':
        return <Stats showTimer={showTimer} />;
      default:
        return <Timer showForest={showForest} showStats={showStats} />;
    }
  };

  return (
    <div className="App">
      {session && (
        <button onClick={handleLogout} className="logout-btn">
          退出登录
        </button>
      )}
      {!session ? (
        isLoginView ? (
          <Login toggleView={toggleView} />
        ) : (
          <Register toggleView={toggleView} />
        )
      ) : (
        renderMainView()
      )}
    </div>
  );
}

export default App;
