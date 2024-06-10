import React from 'react';
import './App.css';

const Header = ()=> {
 

  return (
    <div className='container'>
    <div className='App'>
        <header class="main-header clearfix" role="header">
    <div class="logo">
        <a href="#"><em>Welcom To my ToDo list</em></a>
    </div>
    <a href="#menu" class="menu-link"><i class="fa fa-bars"></i></a>
    <nav id="menu" class="main-nav" role="navigation">
        <ul class="main-menu">
            <li><a href="#section1"><em>Home</em></a></li>
            <li class="has-submenu"><a href="#section2"><em>About Us</em></a>
                <ul class="sub-menu">
                    <li><a href="#section2">Who we are?</a></li>
                    <li><a href="#section3">What we do?</a></li>
                    <li><a href="#section3">How it works?</a></li>
                    <li><a href="https://templatemo.com/about" rel="sponsored" class="external">External URL</a></li>
                </ul>
            </li>
            <li><a href="#"><em>Courses</em></a></li>
            
            <li><a href="#"><em>Contact</em></a></li>
            <li><a href="#" class="external"><em>External</em></a></li>
        </ul>
    </nav>
</header>
</div>
    </div>
  );
};

export default Header;