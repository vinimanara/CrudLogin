# API usando NodeJS!

## Passo 1 - Clone e Instalação

````
No prompt de comando digite:
git clone https://github.com/vinimartins/CrudLogin.git
npm install
npm run start
```` 

## Passo 2 - No postman:

<strong> Crie o usuário </strong>
- Endpoint: http://localhost:3000/user/
- Método: Post
- Retorno: Id do Usuário
- Headers:
- Content-Type: application/json*
````
{
 "name":"Vini",
 "email":"teste@teste.com",
 "password":"123456"
}
````
<strong> Faça Login </strong> 
- Endpoint: http://localhost:3000/user/login
- Método: Post
- Retorno: Token com duração de 12h
- Headers:
- Content-Type: application/json
````
{
 "email":"teste@teste.com",
 "password":"123456"
}
````
<strong> Cadastre Animais </strong>
- Endpoint: http://localhost:3000/api/animal
- Método: Post
- Resultado = Id do animal cadastrado
- Obs.: Neste método há a verificação do token. 
<ul>Header: 
 <li>Content-type: Application/json</li>
 <li>Authorization: *Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjMGJmZmJjNjUyODQ0MzBhNTIxOTQiLCJpYXQiOjE1NzQ3MDIxNDF9.bKbN3ZTCESVW7Ya8oPp0sadZTMN4f4_akdNX3RHYyTM* </li>
 </ul>
 
````
{	
 "name":"Wakanakaka",
 "type":"Jaguatirica"
}
````

Publicado no endereço:
http://fathomless-hamlet-61397.herokuapp.com
