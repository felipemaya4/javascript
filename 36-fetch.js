'use strict';

//fetch (ajax) y peticiones a servicios api rest 
var usuarios = [];
var divUsers = document.getElementById('usuarios');
var oneUser = document.getElementById('usuario');
function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function getUser(id){
    return fetch('https://jsonplaceholder.typicode.com/users/'+id)
}
function listarUsuarios(usuarios){
    var listUsers = document.createElement('ol');
    usuarios.map((user)=>{
        let nombre = document.createElement('li');

        nombre.innerHTML =  user.name;
        nombre.id = user.id;
        listUsers.appendChild(nombre);
    });
    return listUsers;
}

function listarUsuario(usuario){
    var listUsers = document.createElement('ol');
    
        let nombre = document.createElement('li');
      //  let avatar = document.createElement('img');
        nombre.innerHTML =  usuario.name;
        nombre.id = usuario.id;
        //avatar.src = usuario.avatar
        //avatar.width = '100';
        listUsers.appendChild(nombre);
        //listUsers.appendChild(avatar); si tuviara avatar el JSON así podriamos agregar la imagen a la pagina
    
    return listUsers;
}
getUsers()
.then(data => data.json()) // capturar datos
.then(users => { // procesamos los datos 
    usuarios = users;
    console.log(usuarios);
    divUsers.appendChild(listarUsuarios(usuarios));
    divUsers.querySelector('.loading').style.display = 'none';
    return getUser(2); // podemos concatenar peticiones asincronas cuando termine con una continua con la siguiente utilizando este estructura
})
.then(data=>data.json())// captura el dato de la segunda peticion
.then(user =>{ // los procesa, en este caso un usuario del return getUser()
    console.log(user);
    oneUser.appendChild(listarUsuario(user));
    oneUser.querySelector('.loading').style.display = 'none';
})