const fs = require('fs');
const csv = require('csvtojson');

const csvOptions = {
  noheader: false,
  headers: ['county','confirmed']
};

csv(csvOptions).fromFile('./raw-data/pa-confirmed.csv')
  .then((json) => {
    json.forEach((item) => {
      item.county = item.county.replace(/[^\x00-\x7F]/g, "");
      item.confirmed = item.confirmed.replace(/[^\x00-\x7F]/g, "");
    })
    fs.writeFile('./public/data/covid/pa-county-confirmed.json', JSON.stringify(json, null, 2), () => console.log('PA County CSV to JSON finished.'));
  });

csv().fromFile('./raw-data/time-series.csv')
  .then((json) => {
    const filtered = json.filter((item) => item["Province/State"] === "Pennsylvania");
    const cases = [];
    const mapped = filtered.map((item) => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const element = item[key];
          if (key !== 'Lat' && key !== 'Long' && !Number.isNaN(+element)) {
            cases.push({
              date: key,
              confirmed: element
            });
          }
        }
      }
      return {
        cases,
        state: "Pennsylvania",
        country: "US"
      }
    });
    fs.writeFile('./public/data/covid/pa-time-series.json', JSON.stringify(mapped, null, 2), () => console.log('PA time series CSV to JSON finished.'))
  })
