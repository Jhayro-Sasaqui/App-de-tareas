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

y para comprobarlo en la consola que nos muestre algo como en que puerto nos 


en nuestro servidor (index.js) habrá secciones:
settings, middlewares, routas, static files y starting the server

en el package.json hay un srcipt que al parecer no nos sirve, así que lo borramos 
y creamos dentro de ese objeto "script"
un nuevo script llamemoslo start
será para remplazar lo que antes escribiamos node src/index.js
entonces le asignamos esta ruta 
para que en la consola solo tengamos que escribir: npm start

tambien instalaremos nodemon:un a dependencia no tan importante pero que nos ayudará

npm install nodemon -D
la -D es xq como nuestro servidor no depende de este módulo, haremos que no se guarde en dependencias, sino que se creará automaticamente dentro de su propio objetoque será devdependencies

pero tambien crearemos un script  para nodemon así como hicimos con start pero ahora lo llamaremos dev y rambien accederá a la misma ruta

pero para llamarlo o ejecutarlo no solo será como npm start
ya que para cualquier otro script que no sea start se usará el "run"
entonces será npm run dev

nodemon ayudará a reiniciar el servidor cada vez que hagamos un cambio


app.set('port', process.env.PORT || 3000);
al parecer es app por la carpeta app 
set es un método de app
vamos a establecerle una configuración
app.set 
el nombre de la configuración es port (el puerto)

y le damos el valor: process.env.PORT
es para que tome el puerto del sistema operativo o el puerto de mi aplicaciónn que esta configurado en el sistema operativo

aquí ira el puerto que nos dará el servicio de la nube

n este caso mientras tanto le pondremos || 3000 despues del process.env.PORT

y para que nos lo muestre en consola le agregamos ${app.get('port')}
dentro de las comillas desoues del texto de server on port: 
console.log(`server on port ${app.get('port')}`);

ahora vamos a instalar morgan 
$npm install morgan
ya no le ponemos el -D xq este si será una dependencia importante 

morgan es un módulo que nos permitirá saber y lo que pasa en el navegador
las petiv¿ciones que nos haga, etc
-nos dirá que el usuario en el navegador está haciendo un GET
-y que es lo que nos está pidiendo 
-que se le está mostrando
por ahora nos saldrá que muestra un error 404 
-cuanto tiempo tarda en ms
-y vuantos bytes pesa

app.use(express.json());
react y nuestro servidor se van a estar comunicando en formato json
pero para que el servidor entienda:
le crearemos un middleware
crearemos el método json
cada vez que llegue un dato a nuestro servidor, va a pasar primero por esta función
está función va a comprobar si el dato es un formato json

crearemos una ruta:
app.use('/api/tareas' ,require('./routes/task.routes'));
para que al entrar a esa dirección nos muestre lo que hay en la carpeta 
puedes mostrar un mensaje en el document con res.send('') pero por lo general se muestra un json con res.json({}); por ejemlo mostrar el estado y decir que la API está funcionando

creemos el archivo index.html dentro de la carpeta public
requerimos el modulo path (ya viene instalado al instalar node)

creamos un index.html en la carpeta public 

en el index.js para los archivos estaticos(lo de la carpeta public(practicamente frontend)):
app utilizará un modulo desde express llamado static
por defecto este módulo encuentra la carpeta public
pero nuestra capeta public esta dentro de src

ntncs le daremos esa ruta
app.use(express.static(path.join(__dirname, 'public')));







# App-de-tareas
