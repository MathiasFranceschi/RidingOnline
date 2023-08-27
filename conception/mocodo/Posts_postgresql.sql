CREATE DATABASE POSTS;
\c POSTS;

CREATE TABLE CATEGORISE (
  code_post VARCHAR(42),
  code_tag VARCHAR(42),
  PRIMARY KEY (code_post, code_tag)
);

CREATE TABLE COMMENT (
  code_comment VARCHAR(42),
  title VARCHAR(42),
  content VARCHAR(42),
  note VARCHAR(42),
  code_post VARCHAR(42),
  code_user VARCHAR(42),
  PRIMARY KEY (code_comment)
);

CREATE TABLE COMPORTE (
  code_post VARCHAR(42),
  code_image VARCHAR(42),
  PRIMARY KEY (code_post, code_image)
);

CREATE TABLE IMAGE (
  code_image VARCHAR(42),
  name VARCHAR(42),
  image_path VARCHAR(42),
  PRIMARY KEY (code_image)
);

CREATE TABLE POST (
  code_post VARCHAR(42),
  title VARCHAR(42),
  content VARCHAR(42),
  slug VARCHAR(42),
  PRIMARY KEY (code_post)
);

CREATE TABLE TAG (
  code_tag VARCHAR(42),
  name VARCHAR(42),
  PRIMARY KEY (code_tag)
);

CREATE TABLE USER (
  code_user VARCHAR(42),
  firstname VARCHAR(42),
  lastname VARCHAR(42),
  email VARCHAR(42),
  password VARCHAR(42),
  PRIMARY KEY (code_user)
);

ALTER TABLE CATEGORISE ADD FOREIGN KEY (code_tag) REFERENCES TAG (code_tag);
ALTER TABLE CATEGORISE ADD FOREIGN KEY (code_post) REFERENCES POST (code_post);
ALTER TABLE COMMENT ADD FOREIGN KEY (code_user) REFERENCES USER (code_user);
ALTER TABLE COMMENT ADD FOREIGN KEY (code_post) REFERENCES POST (code_post);
ALTER TABLE COMPORTE ADD FOREIGN KEY (code_image) REFERENCES IMAGE (code_image);
ALTER TABLE COMPORTE ADD FOREIGN KEY (code_post) REFERENCES POST (code_post);