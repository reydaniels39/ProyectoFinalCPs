# ProyectoFinalCPs
Proyecto Final en el que creo una lambda de códigos postales.

El proyecto permite crear una imagen y un contenedor de Docker mediante el uso del comando: "docker-compose up"
También cuenta con el comando "npm test" que nos permite ejecutar una suit de testing usando jest para probar el código del archivo handler.js
Además podemos utilizar el comando: "sls offline" para simular el servicio de AWS Lambda de manera offline y local en nuestra PC de forma que podamos realizar peticiones a la lambda usando el Endpoint: "localhost:3000/postales/codigoPostal" remplazando codigoPostal por un numero de algún CP de México.

Cuando usamos el comando de docker-compose up, se crea una imagen de docker y se ejecuta automáticamente siempre y cuando tengamos instalado docker en nuestra PC, este contenedor automáticamente ejecutará el comando sls offline al iniciar para poder utilizar la lambda. La dirección del endpoint es la misma que si ejecutaramos el código desde el proyecto: "localhost:3000/postales/CodigoPostal"

Al utilizar esta lambda con algún código postal usando el endpoint nos debería regresar el estado, municipio y colonias asociadas al código postal que mandemos como parámetro. Todo esto nos los regresará como un objeto con la información organizada en arreglos para un mejor entendimiento, además de todo nos regresará dentro del objeto una variable err que nos indicará si es que sucedió algún error, en caso de que no entonces su valor será NULL.

Una caracteristica del repositorio y el proyecto es que al realizar un push, debido al flujo de trabajo que establecimos utilizando github actions, también se subirá la lambda automáticamente a AWS.

Dentro de la carpeta de test podemos encontrar un archivo que nos permite ejecutar el testing sobre el archivo handler.js y además existe otra carpeta que contiene un archivo .js que nos da una pequeña utilidad para poder iniciar y terminar el servidor para poder ejecutar las pruebas.

El código del proyecto en sí se encuentra en el archivo handler.js que es en el que se encuentra nuestra lambda en sí por decirlo de alguna manera, está función toma como parámetro el código postal en la url que recibe y trabaja con el mismo para obtener los datos requeridos.

En la carpeta llamada .github se encuentra nuestra github action que uilicé en el proyecto.

En la carpeta data se encuentra un archivo .json que contiene toda la información sobre los códigos postales.

Por último los archivos Dockerfile y docker-compose.yml son los que establecen las "instrucciones" para poder generar nuestra imagen y contenedor de Docker.

Se utilizó serverless, express, jest, docker, github actions para serverless, entre otros.
