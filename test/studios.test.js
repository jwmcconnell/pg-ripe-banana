const request = require('supertest');
const app = require('../lib/app');

describe('studio routes', () => {
  it('creates and returns a studio', () => {
    return request(app)
      .post('/api/v1/studios')
      .send({
        name: 'Paramount',
        city: 'Los Angeles',
        state: 'California',
        country: 'USA'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Paramount',
          city: 'Los Angeles',
          state: 'California',
          country: 'USA'
        });
      });
  });

  it('returns a list of studios', () => {
    return request(app)
      .get('/api/v1/studios')
      .then(res => {
        expect(res.body).toEqual(expect.any(Array));
      });
  });
});
