CREATE TABLE resources
(
  id serial PRIMARY KEY,
  title varchar not null,
  description varchar not null,
  url varchar not null
);


INSERT INTO resources
  (title, description, url)
values
  ('The Web Developer Bootcamp', 'The only course you need to learn web development - HTML, CSS, JS, Node, and More!', 'https://udemy.com/the-web-developer-bootcamp/learn/v4/');
INSERT INTO resources
  (title, description, url)
values
  ('Learn Node in 1 Hour', 'Node.js Tutorial for Beginners: Learn Node in 1 Hour', 'https://www.youtube.com/watch?v=TlB_eWDSMt4');
INSERT INTO resources
  (title, description, url)
values
  ('Angular and React Developers', 'TypeScript Tutorial for Angular and React Developers', 'https://www.youtube.com/watch?v=NjN00cM18Z4');
INSERT INTO resources
  (title, description, url)
values
  ('Modern React with Redux', 'Master the fundamentals of React v16.3.2 and Redux as you develop apps with React Router, Webpack, and ES6', 'https://www.udemy.com/react-redux/');

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


CREATE TABLE resources_categories
(
  resource_id integer references resources(id),
  category_id integer references categories(id)
);


INSERT INTO resources_categories
  (resource_id, category_id)
VALUES
  (1, 5);
INSERT INTO resources_categories
  (resource_id, category_id)
VALUES
  (2, 6);
INSERT INTO resources_categories
  (resource_id, category_id)
VALUES
  (3, 1);
INSERT INTO resources_categories
  (resource_id, category_id)
VALUES
  (4, 1);