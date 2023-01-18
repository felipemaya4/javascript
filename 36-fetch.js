'use strict';

//fetch (ajax) y peticiones a servicios api rest 
var usuarios = [];
var divUsers = document.getElementById('usuarios');
var divProfe = document.getElementById('profesor');
var oneUser = document.getElementById('usuario');

let pProfe = document.createElement('p');
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
        //listUsers.appendChild(avatar); si tuviera avatar el JSON así podriamos agregar la imagen a la pagina
    
    return listUsers;
}

function getInfo(){
    let profesor = {
        nombre: 'Felipe',
        apellido: 'Maya',
        url: "hola mundo"
    };
    return new Promise((resolve, reject)=>{ // creando una promesa se inicializan dos funciones "reject"  y "resolve" para rechazar si hay algun error o para devolver el dato solicitado
        let profesor_string = '';
        setTimeout(function(){ // con setTimeout podemos observar como la promesa mientras se termina de ejecutar se esperan las siguientes
            profesor_string = JSON.stringify(profesor); // convertimos el array en un string 
            
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error') // validamos los datos si son del tipo correcto y que no esté vacío

            return resolve(profesor_string)
        },3000);
    });
}
getUsers()
.then(data => data.json()) // capturar datos
.then(users => { // procesamos los datos 
    usuarios = users;
    console.log(usuarios);
    divUsers.appendChild(listarUsuarios(usuarios));
    divUsers.querySelector('.loading').style.display = 'none';
    return getInfo(); // podemos concatenar peticiones asincronas cuando termine con una continua con la siguiente utilizando este estructura
})
.then(data =>{
    console.log(data);
    let profesor_json = JSON.parse(data); // convertimos el string en un objeto JSON
    pProfe.innerHTML = profesor_json.nombre+" "+profesor_json.apellido;
    divProfe.querySelector('.loading').style.display = 'none';
    divProfe.appendChild(pProfe);
    return getUser(2);
})
.then(data=>data.json())// captura el dato de la segunda peticion
.then(user =>{ // los procesa, en este caso un usuario del return getUser()
    console.log(user);
    oneUser.appendChild(listarUsuario(user));
    oneUser.querySelector('.loading').style.display = 'none';
})
.catch(error => { // con catch po demo capturar lo errores que pueden aparecer por alguna circunstancia 
    console.error(error);
});
