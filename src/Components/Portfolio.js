import React, { Component } from 'react';
import event1 from "./event1.jpg";
import event2 from "./event2.jpg";

class Portfolio extends Component {
  render() {

    return (
      <section id="project">

        <div className="row work">

          <div className="three columns header-col">
            <h1><span> COMMUNITY </span></h1><br />
          </div>

          <div className="nine columns main-col">
            <h3> 週一で集まります </h3>
            <p> 那覇でリアルに集まって勉強したり教えあったりしてます. 昼から始めて夜は鍋/焼き肉でもしましょう! いつ来てもいつ帰っても大丈夫です. </p>
            <h3> Open Community </h3>
            <p>エンジニアにはオープンソースの文化があります. 作ったコードを無料で公開し, 個人や組織が独占しないというものです. ITが急速に発展できた要因であり, 世界中の誰もが開発できる素晴らしい文化です. その文化をこのコミュニティにも拡げ, コミュニティの管理/所有権をコミュニティに参加する全員で共有します. よって, コミュニティの参加者全員が好きなようにこのコミュニティを運営できます. イベントするのもよし, みんなで案件をとって仕事にするのもよし. 自由にコミュニティを作っていきましょう! </p>
            <h3> お布施方式 </h3>
            <p> 特に参加費はとりません! ただコミュニティをより良くするために, お布施という形をとります. お布施というのはお金である必要はありません. いろいろな形でコミュニティに貢献していきましょう!  <a ><img src={event1} width="40%"/> <img src={event2} width="40%"/></a></p>
    
            
          </div>
        </div>
      </section>
    );

  }
}

export default Portfolio;
