CREATE TABLE IF NOT EXISTS studios (
  _id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT,
  state TEXT,
  country TEXT
);
