INSERT INTO cart 
(product, quantity) 
VALUES 
($1, 1);

select cart.id, cart.product, cart.quantity, products.price, products.category, products.image_src from cart
JOIN products 
ON products.product = cart.product
order by cart.id