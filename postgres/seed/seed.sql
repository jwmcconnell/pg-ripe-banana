BEGIN TRANSACTION;

INSERT into studios (name, city, state, country)
values ('Paramount Pictures', 'Hollywood', 'California', 'United States of America');

INSERT into studios (name, city, state, country)
values ('Fox', 'Hollywood', 'California', 'United States of America');

COMMIT;
