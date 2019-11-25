API usando NodeJS!

Clone o repo

digite npm install
npm run start

No postman:

Endpoint para criação do usuário
Método: Post
http://localhost:3000/user/
Resultado = Id do usuário
Headers:
content-type: application/json
{
 "name":"Vini",
 "email":"teste@teste.com",
 "password":"123456"
}

Endpoint para login
Método: Post
http://localhost:3000/user/login
Resultado = token com duração de 12h
Headers:
content-type: application/json
{
 "email":"teste@teste.com",
 "password":"123456"
}

Endpoint para cadastro de animais
Método: Post
http://localhost:3000/api/animal
Resultado = Id do animal cadastrado
Obs.: Neste método há a verificação do token. 

Header: 
Content-type: Application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjMGJmZmJjNjUyODQ0MzBhNTIxOTQiLCJpYXQiOjE1NzQ3MDIxNDF9.bKbN3ZTCESVW7Ya8oPp0sadZTMN4f4_akdNX3RHYyTM
{	
 "name":"Wakanakaka",
 "type":"Jaguatirica"
}


Publicado no endereço:
http://fathomless-hamlet-61397.herokuapp.com
