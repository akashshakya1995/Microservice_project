[1-ABOUT] 
Implemented microservices for user and order module.

[2-REQUIREMENT]
node v16.13.2 with setup
npm 8.1.2 with setup
monogdb v5.0.5 with setup

[3-HOW_TO_SETUP]
npm init
npm install

[4-HOW_TO_RUN]
## RUN ALL MODULE SEPERATLY ##
node server.js


## DESCRIPTION ##
Developer can run user and order modules individually on particular end point, but we aim to develop microservices for modules so that customers can access multiple modules with single endpoint.

## MODULE ENDPOINT ##
[5-USER]
http://localhost:8000

[5.1-SIGNUP]
curl --location --request POST 'http://localhost:8000/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "xyz1@gmail.com",
  "password": "123456",
  "name": "Testing",
  "gender": "Male"
}'

[5.2-SIGNIN]
curl --location --request POST 'http://localhost:8000/signin' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "xyz1@gmail.com",
  "password": "123456"
}'

[5.3-GET_USERS]
curl --location --request GET 'http://localhost:8000/getuser' \
--header 'Content-Type: application/json' \
--header 'token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh5ejFAZ21haWwuY29tIiwidXNlcklkIjoiNjM5YzlhMjdjMmFkNGIzYmM0ODIxMzM1IiwiaWF0IjoxNjcxMjY2MDM4LCJleHAiOjE2NzE4NzA4Mzh9.bM7zAZrYrrDDdMJS-VnyR19K-t-pqWED5yPVtGKGQfE'

[6-ORDER]
http://localhost:8001

[6.1-ORDER_PLACE]
curl --location --request POST 'http://localhost:8001/order_place' \
--header 'Content-Type: application/json' \
--header 'token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh5ejFAZ21haWwuY29tIiwidXNlcklkIjoiNjM5YzlhMjdjMmFkNGIzYmM0ODIxMzM1IiwiaWF0IjoxNjcxMjY2MDM4LCJleHAiOjE2NzE4NzA4Mzh9.bM7zAZrYrrDDdMJS-VnyR19K-t-pqWED5yPVtGKGQfE' \
--data-raw '{
  "productName": "Book",
  "stock": 10
}'

[6.2-GET_ORDER]
curl --location --request GET 'http://localhost:8001/getorder' \
--header 'Content-Type: application/json' \
--header 'token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh5ejFAZ21haWwuY29tIiwidXNlcklkIjoiNjM5YzlhMjdjMmFkNGIzYmM0ODIxMzM1IiwiaWF0IjoxNjcxMjY2MDM4LCJleHAiOjE2NzE4NzA4Mzh9.bM7zAZrYrrDDdMJS-VnyR19K-t-pqWED5yPVtGKGQfE'

## IMPLEMENTED API GATEWAY ENDPOINT FOR THE CLIENT SO THAT THE CLIENT CAN ACCESS ALL THE APIS THROUGH A SINGLE PORT ##

[7-USER-ORDER]
http://localhost:9000F

[7.1-SIGNUP]
curl --location --request POST 'http://localhost:9000/microservice/user/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "xyz1@gmail.com",
  "password": "123456",
  "name": "Testing",
  "gender": "Male"
}'

[7.2-SIGNIN]
curl --location --request POST 'http://localhost:9000/microservice/user/signin' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "xyz1@gmail.com",
  "password": "123456"
}'

[7.3-GET_USERS]
curl --location --request GET 'http://localhost:9000/microservice/user/getuser' \
--header 'Content-Type: application/json' \
--header 'token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh5ejFAZ21haWwuY29tIiwidXNlcklkIjoiNjM5YzlhMjdjMmFkNGIzYmM0ODIxMzM1IiwiaWF0IjoxNjcxMjY2MDM4LCJleHAiOjE2NzE4NzA4Mzh9.bM7zAZrYrrDDdMJS-VnyR19K-t-pqWED5yPVtGKGQfE'


[7.4-ORDER_PLACE]
curl --location --request POST 'http://localhost:9000/microservice/order/order_place' \
--header 'Content-Type: application/json' \
--header 'token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh5ejFAZ21haWwuY29tIiwidXNlcklkIjoiNjM5YzlhMjdjMmFkNGIzYmM0ODIxMzM1IiwiaWF0IjoxNjcxMjY2MDM4LCJleHAiOjE2NzE4NzA4Mzh9.bM7zAZrYrrDDdMJS-VnyR19K-t-pqWED5yPVtGKGQfE' \
--data-raw '{
  "productName": "Book",
  "stock": 10
}'

[7.5-GET_ORDER]
curl --location --request GET 'http://localhost:9000/microservice/order/getorder' \
--header 'Content-Type: application/json' \
--header 'token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh5ejFAZ21haWwuY29tIiwidXNlcklkIjoiNjM5YzlhMjdjMmFkNGIzYmM0ODIxMzM1IiwiaWF0IjoxNjcxMjY2MDM4LCJleHAiOjE2NzE4NzA4Mzh9.bM7zAZrYrrDDdMJS-VnyR19K-t-pqWED5yPVtGKGQfE'





