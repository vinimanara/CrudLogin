# API usando NodeJS!

## Passo 1 - Clone o repo

````
git clone https://github.com/vinimartins/CrudLogin.git
```` 
## Passo 2 - Instalação:

````
npm install
npm run start
```` 
## Passo 3 - No Postman:

<strong> Crie o usuário </strong>
- Endpoint: http://localhost:3000/user/
- Método: Post
- Retorno: Id do Usuário
- Headers:
- Content-Type: application/json*

````
{
	"email": "teste@teste.com", 
	"name": "José da Silva",
	"password": "123456"
}
````

<strong> Faça o Login </strong> 
- Endpoint: http://localhost:3000/auth
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

<strong> Liste Usuários </strong>
- Endpoint: http://localhost:3000/users
- Método: GET
- Resultado: Lista de todos usuários
- Obs.: Neste método há verificação de token JWT
<ul>Header: 
 <li>Content-type: Application/json</li>
 <li>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjMGJmZmJjNjUyODQ0MzBhNTIxOTQiLCJpYXQiOjE1NzQ3MDIxNDF9.bKbN3ZTCESVW7Ya8oPp0sadZTMN4f4_akdNX3RHYyTM </li>
</ul>
 
 
<strong> Liste Usuário Por ID </strong>
- Endpoint: http://localhost:3000/users/5e1d08f5ba6a971110263be8
- Método: GET
- Obs.: Neste método há verificação de token JWT
<ul>Header: 
 <li>Content-type: Application/json</li>
 <li>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjMGJmZmJjNjUyODQ0MzBhNTIxOTQiLCJpYXQiOjE1NzQ3MDIxNDF9.bKbN3ZTCESVW7Ya8oPp0sadZTMN4f4_akdNX3RHYyTM </li>
</ul>
 -Resultado:

````
{
    "_id": "5e1d08f5ba6a971110263be8",
    "name": "José da Silva",
    "email": "teste@teste.com",
    "password": "$2a$10$aJdRxjY2Flmzdm7tAmiWMewgQl1RqrE6.khzvmzBmqQjaj.upMYE.",
    "date": "2020-01-14T00:19:01.398Z",
    "__v": 0
}
````


<strong> Remova Usuário Por ID </strong>
- Endpoint: http://localhost:3000/users/5e1d08f5ba6a971110263be8
- Método: DELETE
- Obs.: Neste método há verificação de token JWT
<ul>Header: 
 <li>Content-type: Application/json</li>
 <li>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjMGJmZmJjNjUyODQ0MzBhNTIxOTQiLCJpYXQiOjE1NzQ3MDIxNDF9.bKbN3ZTCESVW7Ya8oPp0sadZTMN4f4_akdNX3RHYyTM </li>
</ul>

<strong> Atualize Usuário Por ID </strong>
- Endpoint: http://localhost:3000/users/5e1d08f5ba6a971110263be8
- Método: PUT
- Obs.: Neste método há verificação de token JWT
<ul>Header: 
 <li>Content-type: Application/json</li>
 <li>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjMGJmZmJjNjUyODQ0MzBhNTIxOTQiLCJpYXQiOjE1NzQ3MDIxNDF9.bKbN3ZTCESVW7Ya8oPp0sadZTMN4f4_akdNX3RHYyTM </li>
</ul>


<strong> Cadastre Animais </strong>
- Endpoint: http://localhost:3000/animals
- Método: Post
- Resultado = Id do animal cadastrado
- Obs.: Em todas chamadas /animals há a verificação do JWT. 
<ul>Header: 
 <li>Content-type: Application/json</li>
 <li>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjMGJmZmJjNjUyODQ0MzBhNTIxOTQiLCJpYXQiOjE1NzQ3MDIxNDF9.bKbN3ZTCESVW7Ya8oPp0sadZTMN4f4_akdNX3RHYyTM </li>
</ul>
 
````
{	
 "name":"Mia",
 "type":"Gato"
}
````

Publicado no endereço:
http://fathomless-hamlet-61397.herokuapp.com
