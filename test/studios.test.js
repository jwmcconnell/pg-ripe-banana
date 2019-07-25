const request = require('supertest');
const app = require('../lib/app');

const Studio = require('../lib/models/Studio');

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
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          name: expect.any(String)
        });
      });
  });

  it('returns a studio by its id', async() => {
    const { _id } = await Studio.findOne();
    return request(app)
      .get(`/api/v1/studios/${_id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: expect.any(String),
          city: expect.any(String),
          state: expect.any(String),
          country: expect.any(String),
        });
      });
  });
});
