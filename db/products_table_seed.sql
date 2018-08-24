create table products(
    id serial primary key,
    product text,
    price integer,
    category varchar(20),
    image_src text
)