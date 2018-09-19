UPDATE Products 
SET name=$1, price=$2, image_url=$3
WHERE SHELF=$1 AND BIN=$1