import React, {useEffect, useState} from 'react';

const News = () => {
  useEffect(() => {
    fetch('https://news.google.com/rss/search?q=pennsylvania+%2B+coronavirus&hl=en-US&gl=US&ceid=US:en', {mode: 'cors'})
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h2>Recent News</h2>
      </div>
      <div className="card-body">
        <p>hello</p>
      </div>
    </div>
  );
}

export default News;
