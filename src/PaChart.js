import React, {useEffect, useState} from 'react';
import tippy from 'tippy.js';

const PaChart = () => {
  const d3 = window.d3;
  const margin = {top: 50, right: 50, bottom: 50, left: 50};

  const [size, setSize] = useState({ w: 640, h: 360 });
  const [confirmed, setConfirmed] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    const el = document.querySelector('#PaChartContainer');
    setSize({w: el.offsetWidth, h: el.offsetWidth * 0.5625})
  }, []);

  useEffect(() => {
    function handleResize (e) {
      const el = document.querySelector('#PaChartContainer');
      setSize({w: el.offsetWidth, h: el.offsetWidth * 0.5625})
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    d3.json('data/covid/pa-time-series.json').then((data) => setConfirmed(data));
  }, [d3]);
  
  useEffect(() => {
    if (confirmed) {
      const svg = d3.select('#PaChartContainer').append('svg')
        .attr("id", "PaChartSvg")
        .attr("width", size.w)
        .attr("height", size.h)
        .append('g')
        .attr("transform", "translate(" + 0 + "," + margin.top /2 + ")");
      setDate(confirmed[0].updated);
      let data = confirmed[0].cases;
      data = data.filter((c) => c.confirmed > 0);
      const parseTime = d3.timeParse("%m/%d/%Y");
      // Dates on X axis
      const xScale = d3.scaleTime().domain([d3.min(data, (d) => parseTime(d.date)), d3.max(data, (d) => parseTime(d.date))]).range([0, size.w - margin.left]);
      // Confirmed cases on Y axis
      const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => +d.confirmed)]).range([size.h - margin.top, 0]);
      
      const line = d3.line()
        .x((d) => xScale(parseTime(d.date)))
        .y((d) => yScale(+d.confirmed));

      const moveX = margin.left / 1.75;
  
      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(" + moveX+ "," + (size.h - margin.bottom) + ")")
        .call(d3.axisBottom(xScale).ticks(10).tickFormat(d3.timeFormat('%b %d')));
  
      svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale).tickFormat(d3.format('~s')))
        .attr('transform', `translate(${moveX}, 0)`);;

      svg.append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line)
        .attr('transform', `translate(${moveX}, 0)`);

      svg.selectAll("point")
        .data(data)
        .join("circle")
          .attr("fill", "#ffab00")
          .attr("r", 3)
          .attr("cx", (d) => xScale(parseTime(d.date)))
          .attr("cy", (d) => yScale(+d.confirmed))
          .attr("data-date", (d) => d.date)
          .attr("data-confirmed", (d) => d.confirmed)
          .attr("class", "point")
          .attr('transform', `translate(${moveX}, 0)`);

      const tooltips = tippy(document.querySelectorAll('.point'));
      tooltips.forEach((i) => i.setContent((r) => `${r.getAttribute('data-date')}: ${r.getAttribute('data-confirmed')}`));

      function bisectMX() {
        const bisect = d3.bisector(d => parseTime(d.date)).left;
        return mx => {
          const date = xScale.invert(mx);
          const index = bisect(data, date, 1);
          return index - 1;
        };
      }

      let openTT = null;

      d3.select("#PaChartContainer").on('touchmove mousemove', function() {
        const index = bisectMX()(d3.mouse(this)[0]);
        if (openTT !== null && openTT !== index) {
          tooltips[openTT].hide();
        }
        tooltips[index].show();
        openTT = index;
      });

      d3.select("#PaChartContainer").on("touchend mouseleave", () => {
        tooltips.forEach((t) => t.hide());
        openTT = null;
      });

      return () => d3.select("#PaChartSvg").remove();
    }

  }, [d3, margin, confirmed, size]);

  return (
    <div id="PaChart" className="card shadow-sm">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Confirmed Cases Chart</h2>
          {/* <a href="#" className="text-muted"><i className="bx bx-info-circle bx-sm" /></a> */}
        </div>
        <small><span className="font-weight-bold">Last updated:</span> {date && new Date(date).toDateString()}</small>
      </div>
      <div className="card-body">
        <div id="PaChartContainer" />
      </div>
    </div>
  )
};

export default PaChart;
