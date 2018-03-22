CREATE TABLE resources (
	id serial PRIMARY KEY,
	title varchar not null,
	description varchar not null,
	url varchar not null
)


INSERT INTO resources (title, description, url) values ('The Web Developer Bootcamp', 'The only course you need to learn web development - HTML, CSS, JS, Node, and More!', 'https://udemy.com/the-web-developer-bootcamp/learn/v4/');
INSERT INTO resources (title, description, url) values ('Learn Node in 1 Hour', 'Node.js Tutorial for Beginners: Learn Node in 1 Hour', 'https://www.youtube.com/watch?v=TlB_eWDSMt4');
INSERT INTO resources (title, description, url) values ('Angular and React Developers', 'TypeScript Tutorial for Angular and React Developers', 'https://www.youtube.com/watch?v=NjN00cM18Z4');