import React, {useEffect, useState} from 'react';

const News = () => {
  const [size, setSize] = useState({w: 560, h: 315});
  useEffect(() => {
    const el = document.querySelector('#YT-Vid-Container');
    setSize({w: el.offsetWidth, h: el.offsetWidth * 0.5625});
  }, [])
  useEffect(() => {
    function handleResize (e) {
      const el = document.querySelector('#YT-Vid-Container');
      setSize({w: el.offsetWidth, h: el.offsetWidth * 0.5625});
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  // useEffect(() => {
  //   fetch('https://news.google.com/rss/search?q=pennsylvania+%2B+coronavirus&hl=en-US&gl=US&ceid=US:en', {mode: 'cors'})
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h2>Informational Video</h2>
      </div>
      <div className="card-body">
        <div id="YT-Vid-Container"  className="d-flex">
          <iframe width={size.w} height={size.h} src="https://www.youtube-nocookie.com/embed/BtN-goy9VOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default News;
