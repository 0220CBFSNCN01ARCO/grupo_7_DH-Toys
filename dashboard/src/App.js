import React from 'react';
import Content from './Components/Content/Content'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
