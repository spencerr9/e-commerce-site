create table products(
    id serial primary key,
    product text,
    price decimal(4,2),
    category varchar(20),
    image_src text
)