const pool = require('../utils/pg-pool');

class Studio {
  // INSERT
  create(studio) {
    return pool.query(`INSERT INTO
      studios(name, city, state, country)
      VALUES($1, $2, $3, $4)
      RETURNING *`,
      [studio.name, studio.city, studio.state, studio.country])
      .then(results => results.rows[0]);
  }

  // SELECT
  find() {
    return pool
      .query('SELECT _id, name FROM studios')
      .then(results => results.rows);
  }

  // SELECT
  findById(id) {
    return pool
      .query('SELECT * FROM studios WHERE _id = $1', [id])
      .then(results => results.rows[0]);
  }

  // UPDATE

  // DELETE
  findByIdAndDelete(id) {
    return pool
      .query('DELETE * FROM studios WHERE _id = $1 RETURNING *', [id])
      .then(results => results.rows[0]);
  }

  // get a single studio for testing
  findOne() {
    return pool
      .query('SELECT * FROM studios LIMIT 1')
      .then(results => results.rows[0]);
  }
}

module.exports = new Studio();
