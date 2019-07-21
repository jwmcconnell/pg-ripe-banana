-- Deploy fresh database tables
\i '/docker-entrypoint-initdb.d/tables/studios.sql'

\i '/docker-entrypoint-initdb.d/seed/seed.sql'