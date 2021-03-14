import React, { Component } from 'react';



class Footer extends Component {
  render() {


    return (
      <footer>

        <div className="row">
        <ul className="copyright">
              <li>&copy; 2021 SoSo </li>
              <li>Design by SoSo </li>
           </ul>

          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>

    
    
    )
}
}

export default Footer;
