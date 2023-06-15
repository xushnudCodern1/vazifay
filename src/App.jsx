






import { BrowserRouter, Routes, Route } from "react-router-dom";
import  img from './qiz.jfif'




// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Nopage from "./pages/Nopage";
import "./App.css"
import Sub from "./pages/sub";

import News from "./pages/News";
import Sale from "./pages/Sale";
import Set from "./pages/Set";

import Layout from "./pages/Layout";
import CHat from "./pages/chat";
import Nopage from "./pages/Nopage";


function App() {
  return (
    <div className="App">
      <div className="newapp">
        <div className="head">
          <ul id="ul2">
          
            <li>Ташкент</li>
            <li>About marketplace</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>Public offering</li>
          </ul>
          <ul id="ul1">
            <li id="li1">Interface language</li>
            <li>Have a question?</li>
          </ul>
        </div>

        <div className="head2">
          <div className="Adds">
            <h2>Adds</h2>
          </div>
          
        <input type="text"    placeholder="search..."/>
        <div className="ikki" id="bi">
          <div className="qizil"></div>
        </div>
       <div className="ikii2">
        <div className="qizil"></div>
       </div>
        </div>
<div className="user">
  <div className="kat">
    <img src={img}  /><h2>Dilfuza Qodirova</h2>
    <h3>@username</h3>
  </div>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
             <Route index  element={<Sub/>}/>
   <Route path="/chat" element={<CHat/>} />
             <Route path="/news"  element={<News/>}/>
             <Route path="/sale"  element={<Sale/>}/>
             <Route path="/setti"  element={<Set/>}/>
             <Route path="*" element={<Nopage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
</div>
      </div>
  
    </div>
  );
}

export default App;


