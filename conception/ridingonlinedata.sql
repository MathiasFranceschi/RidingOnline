BEGIN;

INSERT INTO "user" ("id", "firstname", "lastname", "email", "password", "role") VALUES
(1, 'jean', 'test', 'test@test.com', 'AZERTY', 'admin'),
(2, 'eric', 'test', 'test@test.com', 'AZERTY', 'user');

INSERT INTO "tag" ("id", "name") VALUES
(1, 'roadtrip'), (2, 'offroad');

INSERT INTO "post" ("id", "title", "content", "slug") VALUES
(1, 'La route des grandes alpes', 'Je suis du contenu incroyable qui raconte un voyage sur la route des grandes alpes',
'la-route-des-grandes-alpes'), (2, 'Transalpes', 'Je suis du contenu incroyable qui raconte un voyage sur le parcours transalpes', 'transalpes');

INSERT INTO "img" ("img_path", "img_name", "post_id") VALUES
('/img/img1', 'jesuisuneimage', 1), ('/img/img2', 'jesuisuneimage2', 2);

INSERT INTO "tag_has_post" ("tag_id", "post_id") VALUES
(1, 1), (2, 2);

INSERT INTO "comment" ("id", "title", "content", "note", "user_id", "post_id") VALUES
(1, 'J''ai adoré lire ce roadtrip !', 'J''ai super envie de faire pareil !!!!', '5', 1, 1),
(2, 'J''aime l''offroad', 'cool.', '3', 2, 2);

COMMIT;

-- BEGIN;

-- SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));
-- SELECT setval('tag_id_seq', (SELECT MAX(id) from "tag"));
-- SELECT setval('post_id_seq', (SELECT MAX(id) from "post"));
-- SELECT setval('comment_id_seq', (SELECT MAX(id) from "comment"));

-- COMMIT;