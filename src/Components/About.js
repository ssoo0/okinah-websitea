import React, { Component } from 'react';
import sosoweb from "./soso-web.png";

class About extends Component {
   render() {

      return (
         <section id="about">
            <div className="row">
               <div className="three columns header-col">
                  <h1><span> CONTACT </span></h1><br />
               </div>
               <div className="nine columns main-col">
                  <h3> 発起人 : SoSo </h3>
                  <p> Web系から機械学習まで何でも教えます! まったくの初心者でも! 特に費用もかからないのでスクールに通う前にぜひ来てみてください! </p>
                  <p> 個人のホームページ :  <a href="https://main.d3umo865zsgz63.amplifyapp.com/"><img src={sosoweb}/></a> </p>
                  <p >
                     連絡先 : rp0035pp[AtMarkを入れてください]gmail.com
                  </p>
                  
               </div>
            </div>
         </section>
      );
   }
}

export default About;
