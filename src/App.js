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
              <strong>Disclaimer: </strong>
              <span>This website and its contents herein, including all data, mapping, and analysis is provided to the public strictly for general information purposes only. I do not bear any legal responsibility for any consequence caused by the use of information provided. I strictly prohibit use of this website in commerce or reliance on this website for medical guidance.</span>
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
          <div className="col col-lg-12 col-xl-4">
            <News />
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-header">
                <h2>Resources</h2>
              </div>
              <div className="card-body">
                <ul className="nav flex-column resource-list">
                  <li className="nav-item">
                    <h3>PA Department of Health</h3>
                    <a className="nav-link" href="https://www.health.pa.gov/topics/disease/coronavirus/Pages/Coronavirus.aspx">Coronavirus (COVID-19) PA Overview</a>
                    <a className="nav-link" href="https://www.pa.gov/guides/responding-to-covid-19/">Responding to COVID-19 in Pennsylvania</a>
                  </li>
                  <li className="nav-item">
                    <h3>CDC</h3>
                    <a className="nav-link" href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">Coronavirus (COVID-19)</a>
                  </li>
                  <li className="nav-item">
                    <h3>WHO</h3>
                    <a className="nav-link" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">Coronavirus disease (COVID-19) Pandemic</a>
                  </li>
                  <li className="nav-item">
                    <h3>JHU</h3>
                    <a className="nav-link" href="https://coronavirus.jhu.edu/map.html">Coronavirus COVID-19 Global Cases Map</a>
                    <a className="nav-link" href="https://github.com/CSSEGISandData/COVID-19">Data Repository by Johns Hopkins CSSE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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
            <small className="pb-3">Made by James Calhoun - <a href="https://github.com/jc190/pa-covid19-dashboard">[<i className='bx bxl-github' /> Github]</a> - Stay informed. Stay safe.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
