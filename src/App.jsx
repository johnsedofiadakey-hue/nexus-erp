import React, { useState } from 'react';
import PublicSite from './components/public/PublicSite';
import Login from './components/Login';
import ERPApp from './components/erp/ERPApp';

function App() {
  const [view, setView] = useState('public'); // 'public', 'login', 'erp'

  const handleLogin = () => setView('erp');
  const handleLogout = () => setView('public');
  const goToLogin = () => setView('login');
  const goToPublic = () => setView('public');

  return (
    <div className="App">
      {view === 'public' && <PublicSite onLoginClick={goToLogin} />}
      {view === 'login' && <Login onLogin={handleLogin} onBack={goToPublic} />}
      {view === 'erp' && <ERPApp onLogout={handleLogout} />}
    </div>
  );
}

export default App;
