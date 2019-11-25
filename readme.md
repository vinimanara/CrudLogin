API usando NodeJS!

Clone o repo

digite npm install
npm run start

No postman:

Endpoint para criação do usuário
Método: Post
http://localhost:3000/user/
Resultado = Id do usuário

Endpoint para login
Método: Post
http://localhost:3000/user/login
Resultado = token com duração de 12h

Endpoint para cadastro de animais
Método: Post
http://localhost:3000/api/animal
Resultado = Id do animal cadastrado
Obs.: Neste método há a verificação do token. 
Necessário passar no header a key Authorization: "Bearer eymSAIDJIKm..."

Publicado no endereço:
http://fathomless-hamlet-61397.herokuapp.com
