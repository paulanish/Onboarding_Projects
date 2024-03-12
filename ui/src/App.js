// // App.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './containers/Home.js';
// import About from './containers/About.js';
// // import Contact from './containers/Contact';
// // import Header from './components/Header';
// // import Footer from './components/Footer';


// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* <Header /> */}
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/home" element={<Home />} />
//           {/* <Route path="/contact" component={Contact} />
//           <Route path="/" component={Home} /> */}
//         </Routes>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home.js';
import About from './containers/About.js';
import Contact from './containers/Contact.js';
import JoinNow from './containers/JoinNow.js';
import Navigation from './components/navigation.js';
import Classes from './containers/classes.js';
import Footer from './components/Footer.js';
// Import other components as needed


export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
        <Navigation />
        <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/joinNow" element={<JoinNow/>} />
          <Route path="/classes" element={<Classes/>} />
          
          <Route path="*" element={<><h1>No Page Found</h1></>} />
          {/* Add more routes as needed */}
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
