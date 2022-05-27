import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Experience from './Experience.js';
import experienceArray from './Experiences';

function App() {
  return (
    <div>
      <Header />
      {
        experienceArray.map(item => <Experience experience={item} />)
      }
      <Footer />
    </div>
  );
}

export default App;


