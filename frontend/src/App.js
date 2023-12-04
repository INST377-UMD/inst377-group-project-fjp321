import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate }
  from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';

class App extends React.Component {
  render() {
    return (
      <div className='app-root'>
        <Router>
          <Navbar parent='App'/>
          <Routes>
            <Route index element={<Navigate to='/home' replace />} />
            <Route path='/home' element={<Home parent='App'/>} />
            <Route path='/about' element={<About parent='App'/>} />
            <Route path='/help' element={<Help parent='App'/>} />
          </Routes>
          <Footer parent='App'/>
        </Router>
      </div>
    );
  }
}

export default App;
