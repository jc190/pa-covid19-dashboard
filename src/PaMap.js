import React, {useEffect, useState} from 'react';
import tippy from 'tippy.js';

const PaMap = () => {
  const d3 = window.d3;
  const topojson = window.topojson;

  const [size, setSize] = useState({w: 640, h: 360});
  const [confirmed, setConfirmed] = useState();
  const [geo, setGeo] = useState();

  useEffect(() => {
    const el = document.querySelector('#PaMapContainer');
    setSize((s) => ({w: el.offsetWidth, h: el.offsetWidth * 0.5625}));
  }, []);

  useEffect(() => {
    function handleResize (e) {
      const el = document.querySelector('#PaMapContainer');
      setSize({w: el.offsetWidth, h: el.offsetWidth * 0.5625});
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  useEffect(() => {
    d3.json('data/covid/pa-county-confirmed.json').then((data) => setConfirmed(data));
    d3.json('data/map/pa-topo.json').then((pa) => setGeo(topojson.feature(pa, pa.objects['pa-albers'])));
  }, [d3, topojson]);

  useEffect(() => {
    if (confirmed && geo) {
      // Create svg element
      const svg = d3.select(".card-body").append("svg")
        .attr("width", size.w)
        .attr("height", size.h);
      const projection = d3.geoIdentity();
      const path = d3.geoPath(projection.fitSize([size.w, size.h], geo));
      const scale = d3.scaleLinear().domain([0, d3.max(confirmed, (d) => +d.confirmed)]).range([.1, 1]);
  
      // Add counties with data and styling
      svg.selectAll('.county')
        .data(geo.features)
        .enter().append('path')
          .attr('data-name', (d) => `${d.properties.COUNTY_NAM}`)
          .attr('data-confirmed', (d) => filterConfirmed(d, confirmed))
          .attr('class', (d) => `county`)
          .attr('d', path)
          .attr('fill', (d, i, nodes) => nodes[i].dataset.confirmed > 0 ? d3.interpolateReds(scale(nodes[i].dataset.confirmed)) : 'rgb(211, 211, 211)');
      
      // Tooltips
      const tippyInstance = tippy(document.querySelectorAll('.county'));
      tippyInstance.forEach((i) => i.setContent((r) => `${capitalizeFirst(r.getAttribute('data-name'))}: ${r.getAttribute('data-confirmed')}`));

      return () => {
        svg.remove();
        tippyInstance.forEach((i) => i.destroy());
      }
    }
  }, [d3, geo, confirmed, size]);

  return (
    <div id="PaMap" className="card shadow-sm">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Confirmed Cases Map</h2>
          <a href="#" className="text-muted"><i className="bx bx-info-circle bx-sm" /></a>
        </div>
        <small><span className="font-weight-bold">Last updated:</span> {new Date().toString()}</small>
      </div>
      <div className="card-body">
        <div id="PaMapContainer" />
      </div>
    </div>
  );
}

function filterConfirmed (d, state) {
  const filtered = state.filter(item => item.county.trim().toLowerCase() === d.properties.COUNTY_NAM.trim().toLowerCase());
  return filtered.length > 0 ? filtered[0].confirmed : 0;
}

function capitalizeFirst (str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
} 

export default PaMap;
