dentro de documentos>programming
creamos la carpeta: TAREAS-MERN-STACK
LO ABRIMOS EN VSCode
creamos la carpeta "src"
aquí ira todo el código, tanto front como back
nosotros mismos configuraremos la manera de convertir código de react a código standar del navegador

dentro de src crearemos el index.js
nos permitira arrancar el servidor (node.js y express)

necesitaremos rutas o URLs para pedir, actualizar datos

creamos la carpeta routes
dentro crearemos el archivo: "task.routes.js"

crearemos una carpeta para definir los modelos de la base de datos

dentro creamos la carpeta models para crear un archivo que nos permita diseñar el esquema de nestros datos

dentro crearemos un archivo: "task.js"

necesitamos una manera de conectarnos a la base de datos
creamos el archivo "database.js"

crearemos una carpeta para guardar los archivos frontend

{el servidor además de tener una rest API tambien se encargará d enviar archivos al navegador(html, css, js)=>REACT}

AL PARECER REACT SE TRANSFORMA DEPUES EN HTML, CSS Y JS PARA QUE EL NAVEGADOR LO INTERPRETE; TIENE SENTIDO, AUNQUE PENSÉ QUE ERA LO CONTRARIO

 CREAREMOS LA CARPETA "PUBLIC" para que vaya nuestro código convertido de React

 Pero nuestro código realmente de React irá en otra carpeta: "App": el código de la biblioteca y el código de la interfaz

 Luego el código React que está en la carpeta "app" que creamos se transformará en html, css y js ´pra que el navegador lo tenfa que interpretar

  EMPEZAMOS:

  creamos nuestra Rest API
  Vamos a index.js
  aquí escribireos el código de nuestro servidor

  EN VSCode podemos usar el terminal integrado

  Ctrl + Shipt + p

  de preferencia que este en "BASH" no en "powershell"

  Vamos a inicializar un proyecto de Node js
  ecribimos:
  $npm init --yes
  esto nos creara un package.json con algunas configuraciones básicas:
   nombre de la app, descripción y algunios scripts

   ahora podemos ir instalando modulos 
   y se irán agregando a nuestro package.json

   instalaremos el modulo: express:
   $npm install express


   PARENTESIS:(
       Vamos a hacer un control de versiones e ir subiendo nuestro código a github conforme avancemos 
   )

   {
       primero inicializaremos un repositorio límpio en Git con el comando: $git init

       entonces nos aparecerá: "(master)" de otro color [a veces suele aparecer "(main)" támbien se puede así pero de preferencia: cambiarlo a master: ¿cómo?No me acuerdo XD, pero sé quelo solucionarás :)]

       luego vamos a nuestra cuenta de github y creemos un nuevo repositorio que no tenga readme ni licencia, ni nada...que esté empty=vacío

       volvamos al repositorio local y ejecutemos:
       $git remote add [origin] [url-de-tu-repositorio-en-github]

       *puede ser cualquier otro nombre, pero por lo general usamos origin, ahh y no se pone los corchetes

       ntonces nos quedaría así: 
       $git init rempote add origin https://github.com/Jhayro-Sasaqui/App-de-tareas

       para cerciorarnos de que se añadió el repositorio remoto: 
       $git remote -v

       para asegurarnos que nuestro área de preparación está limpia y loscommits enviados : $git status
       lo usaremos varias veces luego para comprobar el envio de nuestros commits, creo.

       Ahora a enviar nuestros archivos al remote repository:
       $language-bash git push origin master

       mejor sigamos los pasos que nos da el mismo Github xd

   }

   *express es solo un framework de node js


ahora nos vamos alm archivo index.js
vamos a requerir el modulo express:
{require('express');}
y lo vamos a guardar en una variable:
const express = require('express');

para luego llamarlo y ejecutarlo guardandolo en otra variable:
const app = express();

la variable en la que la guardamos es nuestro servidor

y ahora tenemos que definir en que puerto se escucha:
app.listen(3000, () => {});

y para comprobarlo en la consola que nos muestre algo como en que puerto nos escucha




# App-de-tareas
