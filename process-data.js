const fs = require('fs');
const csv = require('csv-parser');

const dailyReportsDir = './COVID-19/csse_covid_19_data/csse_covid_19_daily_reports';
const timeSeriesDir = './COVID-19/csse_covid_19_data/csse_covid_19_time_series';

// Process daily report

fs.readdir(dailyReportsDir, (err, files) => {
  // Handle errors
  if (err) { console.error(err); }
  
  const csvFiles = files.filter((file) => /(?:\.csv)$/.test(file));
  const latestFile = csvFiles[csvFiles.length - 1];
  const collection = [];

  // Read latest file
  fs.createReadStream(dailyReportsDir + '/' + latestFile)
    .pipe(csv())
    .on('data', (data) => {
      // Filter PA counties
      if (data.FIPS && /42\d\d\d/.test(parseInt(data.FIPS))) {
        // Push to collection with required info
        collection.push({
          county: data.Admin2,
          confirmed: data.Confirmed,
          deaths: data.Deaths,
          fips: data.FIPS,
          updated: data.Last_Update
        });
      }
    })
    .on('end', () => {
      // Write collection to file
      fs.writeFile('./public/data/covid/pa-county-confirmed.json', JSON.stringify(collection, null, 2), () => console.log('PA County CSV to JSON finished.'));
    })
    .on('error', (err) => console.error(err));
});


const timeCollection = [];
// Process time series report
fs.createReadStream(timeSeriesDir + '/time_series_covid19_confirmed_US.csv')
  .pipe(csv())
  .on('data', (data) => {
    if (data.FIPS && /42\d\d\d/.test(parseInt(data.FIPS))) {
      timeCollection.push(data);
    }
  })
  .on('end', () => {
    const reduced = timeCollection.reduce((acc, cval, i) => {
      for (const key in cval) {
        if (/(\/20)$/.test(key)) {
          const i = acc.cases.findIndex((c) => c.date ? c.date === key : false);
          if (i === -1) {
            acc.cases.push({
              date: key,
              confirmed: +cval[key]
            });
            continue;
          }
          acc.cases[i].confirmed += +cval[key];
        }
      }
      return acc;
    }, {
      cases: [],
      state: 'Pennsylvania',
      country: 'US'
    });
    reduced.updated = reduced.cases[reduced.cases.length - 1].date;
    fs.writeFile('./public/data/covid/pa-time-series.json', JSON.stringify([reduced], null, 2), () => console.log('PA time series CSV to JSON finished.'));
  })
  .on('error', (err) => console.error(err));
