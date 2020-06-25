import React from 'react';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="app">
      this will eventually have a piano
      <Logo />
      <main className="app-content">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
