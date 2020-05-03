const request = require('supertest');

let server;

describe('/api/series', () => {
  beforeEach(() => {
    server = require('./index');
  });
  afterEach(() => {
    server.close();
  });

  describe('GET /', () => {
    it('should return status code 200', async () => {
      const res = await request(server).get('/api/series');
      expect(res.status).toBe(200);
    });
    it('should non return data with program type other than series', async () => {
      const res = await request(server).get('/api/series');
      expect(
        res.body.some((series) => series.programType !== 'series')
      ).toBeFalsy();
    });
    it('should only return 1 series', async () => {
      const res = await request(server).get('/api/series?limit=1');
      expect(res.body.length === 1).toBeTruthy();
    });
    it('should not return a series with releaseYear < 2010', async () => {
      const res = await request(server).get('/api/series');
      expect(
        res.body.some((series) => series.releaseYear >= 2010)
      ).toBeTruthy();
    });
    it('should return 2 series sorted by Title', async () => {
      const res = await request(server).get('/api/series?limit=2');
      expect(res.body[0].title.localeCompare(res.body[1].title)).toBe(-1);
    });
  });
});

describe('/api/movies', () => {
  beforeEach(() => {
    server = require('./index');
  });
  afterEach(() => {
    server.close();
  });

  describe('GET /', () => {
    it('should return status code 200', async () => {
      const res = await request(server).get('/api/movies');
      expect(res.status).toBe(200);
    });
    it('should non return data with program type other than movies', async () => {
      const res = await request(server).get('/api/movies');
      expect(
        res.body.some((movie) => movie.programType !== 'movie')
      ).toBeFalsy();
    });
    it('should only return 1 movie', async () => {
      const res = await request(server).get('/api/movies?limit=1');
      expect(res.body.length === 1).toBeTruthy();
    });
    it('should not return a movie with releaseYear < 2010', async () => {
      const res = await request(server).get('/api/movies');
      expect(res.body.some((movie) => movie.releaseYear >= 2010)).toBeTruthy();
    });
    it('should return 2 movies sorted by Title', async () => {
      const res = await request(server).get('/api/movies?limit=2');
      expect(res.body[0].title.localeCompare(res.body[1].title)).toBe(-1);
    });
  });
});
