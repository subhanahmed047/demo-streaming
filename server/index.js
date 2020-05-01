const express = require('express');
const path = require('path');
const dataSource = require('./data/sample.json');
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

const PROGRAM_TYPE_SERIES = 'series';
const PROGRAM_TYPE_MOVIE = 'movie';

app.get('/api/series', (req, res) => {
  res.json(getDataByProgramType(PROGRAM_TYPE_SERIES));
});

app.get('/api/movies', (req, res) => {
  res.json(getDataByProgramType(PROGRAM_TYPE_MOVIE));
});

app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../dist'),
  });
});

const getDataByProgramType = (programType) => {
  return dataSource.entries.filter(
    (entry) => entry.programType === programType
  );
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Listening at Port ${port}`));
