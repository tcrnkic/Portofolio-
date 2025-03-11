// App.js
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {Link, Route, Routes} from "react-router-dom"
import Home from "./Home";
import APIs from "./APIs";
import Databases from "./Databases";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setIsGlowing(true);
    };

    const handleMouseLeave = () => {
      setIsGlowing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  const glowStyle = {
    position: 'fixed',
    zIndex: 100,
    top: cursorPosition.y - 0.5,
    left: cursorPosition.x - 0.5,
    width: isGlowing ? '1px' : '0',
    height: isGlowing ? '1px' : '0',
    borderRadius: '50%',
    backgroundColor: 'rgb(255, 255, 255, 0.1)',
    boxShadow: isGlowing ? '0 0 100px 40px rgba(255, 255, 255, 0.5)' : 'none',
    transition: 'width 0.3s, height 0.3s, box-shadow 0.3s',
    pointerEvents: 'none', 
  };
  return (
    
    <div className="flex md:flex-row flex-col  font-body h-screen">
      {window.innerWidth>800 &&  <div style={glowStyle}></div>}
      <Sidebar />
      <main className="flex-1 flex flex-col">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/APIs" element={<APIs/>}/>
      <Route path="/Databases" element={ <Databases /> }/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
