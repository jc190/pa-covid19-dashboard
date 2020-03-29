import React from 'react';
import PaChart from './PaChart';
import PaMap from './PaMap';
import Navbar from './Navbar';
import News from './News';

import './App.css';

function App() {
  return (
    <div className="App" id="App">
      <header>
        <Navbar />
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PaMap />
          </div>
          <div className="col-lg-6">
            <PaChart />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <News />
          </div>
          <div className="col-4">
            <div className="card shadow-sm">
              <div className="card-header">
                <h2>Resources</h2>
              </div>
              <div className="card-body">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card shadow-sm">
              <a className="twitter-timeline" data-height="500" href="https://twitter.com/PAHealthDept?ref_src=twsrc%5Etfw">Tweets by PAHealthDept</a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container-fluid">
          <hr />
          <div className="text-center">
            <small className="pb-3">Made by James Calhoun - <a href="#">[<i className='bx bxl-github' /> Github]</a> - Stay informed. Stay safe.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
