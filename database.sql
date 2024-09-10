create table person (
  user_id serial primary key,
  name varchar(255),
  surname varchar(255)
);

create table post (
  id serial primary key,
  title varchar(255),
  content varchar(255),
  fk_id_user int references person(user_id)
);