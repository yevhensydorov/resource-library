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


CREATE TABLE resources_categories
(
  resource_id integer references resources(id),
  category_id integer references categories(id)
);
