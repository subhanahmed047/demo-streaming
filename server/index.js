const express = require('express');
const path = require('path');
const dataSource = require('./data/sample.json');
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

const PROGRAM_TYPE_SERIES = 'series';
const PROGRAM_TYPE_MOVIE = 'movie';

app.get('/api/series', (req, res) => {
  let series = sortDataByTitle(getDataByProgramType(PROGRAM_TYPE_SERIES));
  if (req.query.limit) {
    series = series.splice(0, req.query.limit);
  }
  res.json(series);
});

app.get('/api/movies', (req, res) => {
  let series = sortDataByTitle(getDataByProgramType(PROGRAM_TYPE_MOVIE));
  if (req.query.limit) {
    series = series.splice(0, req.query.limit);
  }
  res.json(series);
});

app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../dist'),
  });
});

const getDataByProgramType = (programType) => {
  return dataSource.entries.filter(
    (entry) => entry.programType === programType && entry.releaseYear > 2010
  );
};

const sortDataByTitle = (data) => {
  return data.sort((a, b) =>
    a.title.localeCompare(b.title, 'en', { numeric: true })
  );
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Listening at Port ${port}`));
