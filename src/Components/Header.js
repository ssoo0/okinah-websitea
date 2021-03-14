import React, { Component } from 'react';

class Header extends Component {
   render() {

      return (
         <header id="home">

            <nav id="nav-wrap">

               {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#project"> COUMMUNITY </a></li>
                  <li><a className="smoothscroll" href="#about"> CONTACT </a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline"> START UP  </h1>
                  <h3> 人の温もりが今だに残る沖縄 </h3>
                  <h3> そんな沖縄でエンジニアのコミュニティをはじめました! </h3>
                  <h3> 週1で集まって一緒に作業したり教え合ったりしてます. 初心者も大歓迎!! </h3>
               </div>
            </div>



            <p className="scrolldown">
               <a className="smoothscroll" href="#project"><span></span></a>
            </p>
            {/* <img src={Backphoto} bottom="0px"/>  */}

         </header>
      );
   }
}

export default Header;
