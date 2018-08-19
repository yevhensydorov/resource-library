CREATE TABLE resources
(
  id serial PRIMARY KEY,
  title varchar not null,
  description varchar not null,
  url varchar not null
);

ALTER TABLE resources ADD COLUMN num_of_votes integer default 0;

ALTER TABLE resources ADD COLUMN resource_type varchar not null default
('');

CREATE TABLE categories
(
  id serial PRIMARY KEY,
  category_name varchar not null
);

INSERT INTO categories
  (category_name)
values
  ('General');
INSERT INTO categories
  (category_name)
values
  ('HTML');
INSERT INTO categories
  (category_name)
values
  ('CSS');
INSERT INTO categories
  (category_name)
values
  ('JavaScript');
INSERT INTO categories
  (category_name)
values
  ('NodeJS');
INSERT INTO categories
  (category_name)
values
  ('Database');
INSERT INTO categories
  (category_name)
values
  ('React');
INSERT INTO categories
  (category_name)
values
  ('Project-Management');
INSERT INTO categories
  (category_name)
values
  ('Soft-Skills');

CREATE TABLE resources_categories
(
  resource_id integer references resources(id),
  category_id integer references categories(id)
);