import React from "react";
import './App.css';
import log from '/log.png';
import sign from '/sign.png';
import cart from '/cart.png';
import fb from '/fb.png';
import x from '/x.png';
import git from '/git.png';
import solid from '/solid.webp';
import Tail from'/Tailwind.webp';
import admin from '/TailAdmin.webp';
import Go from '/Go.webp';
import  Appp from '/App.webp';
import Base from '/Base.webp';
import g from '/g.png';
import bb from '/bb.png';
import tad from '/tad.png';
import im2 from '/ui.webp';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import {BrowserRouter,Routes,Route,Link } from "react-router-dom";
export default function App()
{
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/Signin" element={<Signin/>} />
  <Route path="/Signup" element={<Signup />} />
  </Routes>
  </BrowserRouter>
  );
  function Home(){
  return(
  <>
  <div  className="nav">
  <ul id="na">
    <li><img src={log} width={50} height={50} id="im"/></li>
    <li><h1> UI deck </h1></li>
    <li><select className="dropdown">
      <option>Template</option>
      <option>BusinessIntelligence Templates</option>
      <option>Portfolio Templates</option>
      <option>Saas Landing pages</option>
    </select></li>
    <li><select className="dropdown1">
      <option>Resources</option>
      <option>Blog</option>
      <option>Docs</option>
    </select></li>
    <li><p id="Sup">Support</p>
    </li>
    <li id="logo">
   <img src={fb} width={20}height={20} ></img>
    <img src={x} width={20}height={20} ></img>
    <img src={git}width={20}height={20} ></img></li>

    <li><input type="search" className="s" placeholder="Search" ></input></li>
    <li className="b"><button>Go</button></li>
    <li><img src={sign} width={40} height={40}id="sim"/></li>
    <li><Link to="/Signin"><button id="sign">Signin</button></Link></li>
    <li></li>
    <li>
   <img src={cart} width={30} height={30} id="c"></img> 

    </li>
  
  </ul>
  <hr/>
</ div>
<div><img src={im2} width={1500} height={700}/></div><br/>
<center><h1>Featured Templates</h1><p>Top-rated and trending templates, adored by users most</p></center><br/>
<div className="Container">
  <div id="item"><img src={solid} width={330} height={200}></img><p>Tailwind CSS<br/>
 <h2>AI Agent: AI UI Kit, Templates and Components for Tailwind CSS & Figma</h2></p></div>
  <div id="item"><img src={Tail} width={330} height={200}></img><p>React  <br /><h2>TailAdmin React - Tailwind React Dashboard Template</h2></p></div>
  <div id="item"><img src={admin}width={330} height={200}></img><p>Tailwind CSS<br/><h2>Solid - Tailwind CSS Template for SaaS and Software</h2></p></div>
  <div id="item"><img src={Base}width={330} height={200}></img><p>Tailwind CSS<br/><h2>Base - Free Startup and Agency Tailwind Template</h2></p></div>
  <div id="item"><img src={Appp}width={330} height={200}></img><p>Tailwind CSS</p><h2>Appline - Tailwind CSS App and Software Template</h2></div>
  <div id="item"><img src={Go}width={330} height={200}></img><p>Tailwind CSS</p><h2>Go - Tailwind Business and Agency Site Template</h2></div>

</div>
<footer>
  <center>
    Check out our other products<br/><br/>
    <ul className="ft"><li>
<a href="https://plainadmin.com"  style={{textDecoration:"none", color:"white"}}>
  <div><img src={bb} width={40} height={35} alt="PlainAdmin" /><h3>PlainAdmin</h3></div>
</a></li>
  <li><a href="https://tailgrids.com/"style={{textDecoration:"none",color:"white"}}><div><img src={g} width={40} height={35}/> <h3>TailGrid</h3></div></a></li>   
  <li><a href="https://tailgrids.com/"style={{textDecoration:"none",color:"white"}}><div><img src={tad} width={40} height={35}/> <h3 >TailAdmin</h3></div></a></li>   
   
      </ul>

<hr />
  © 2025 UIdeck, all rights reserved — A Product by Pimjo
  <br/></center>
</footer>
  </>
  );
}
}
