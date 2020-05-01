const express = require('express');
const dataSource = require('./data/sample.json');
const app = express();

const PROGRAM_TYPE_SERIES = 'series';
const PROGRAM_TYPE_MOVIE = 'movie';

app.get('/api/series', (req, res) => {
  res.send(getDataByProgramType(PROGRAM_TYPE_SERIES));
});

app.get('/api/movies', (req, res) => {
  res.send(getDataByProgramType(PROGRAM_TYPE_MOVIE));
});

const getDataByProgramType = (programType) => {
  return dataSource.entries.filter(
    (entry) => entry.programType === programType
  );
};

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server is Listening at Port ${port}`));
