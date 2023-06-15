 import img2 from './28.png'
 import img3 from './chat.png'
 import img4 from './news.png'
 import imgx from './sale.jpg'
 import img5 from './setting.png'

import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
     
   <Link to="/">
   
  <div className="icon">
  <img src={img2} />
    <h2>Subscribed</h2>
    
  </div>
    </Link>
  
  
  <Link to="/chat">
  <div className="icon1">
  <img src={img3} />
    <h2>Chat</h2>
  </div>
  </Link>
 



  
   <Link to="/news">
   <div className="icon2">
   <img src={img4} />
    <h2>News</h2>
   </div>
   </Link>
  



  
    <Link to="/sale">
    <div className="icon3">
    <img src={imgx} />
    <h2>Sale</h2>
    </div>
    </Link>
  



   <Link to="/setti">
   <div className="icon4">
   <img src={img5} />
    <h2>Settings</h2>
   </div>
   </Link>

        {/* <li><Link to="/" >home</Link></li>
        <li><Link to="/about" >abot</Link></li>
        <li><Link to="/contact" >contact</Link></li> */}
      
      <Outlet />
    </div>
  )
}

export default Layout