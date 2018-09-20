UPDATE
  Products
SET
  name = $3, 
  price = $4,
  image_url = $5
WHERE
  shelf = $1 
  AND bin = $2
