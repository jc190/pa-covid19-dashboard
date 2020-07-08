import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-3">
    <a className="navbar-brand" href="/">PA COVID-19 Dashboard</a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="bmc-button" target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/jc190">
          {/* <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" /> */}
          <i className="bx bx-coffee-togo" style={{fontSize: '18px', lineHeight: '24px', transform: 'translateY(-1px)'}} />
          <span style={{marginRight: "8px", fontSize:"14px !important", verticalAlign: "bottom"}}>Buy me a coffee</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
