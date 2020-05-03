import React, { useState, useEffect } from 'react';
import Content from '../components/content';
import TopBar from '../components/topBar';
import { Grid } from '../components/card';
import { getSeries } from '../services';

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSeries()
      .then((res) => res.json())
      .then((series) => {
        setSeries(series);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, []);

  return (
    <>
      <TopBar title="Popular Series" />
      <Content>
        <Grid data={series} isLoading={isLoading} error={error} />
      </Content>
    </>
  );
};

export default SeriesPage;
