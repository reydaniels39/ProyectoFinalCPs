# ProyectoFinalCPs
Proyecto Final en el que creo una lambda de códigos postales.

El proyecto permite crear una imagen y un contenedor de Docker mediante el uso del comando: "docker-compose up"
También cuenta con el comando "npm test" que nos permite ejecutar una suit de testing usando jest para probar el código del archivo handler.js
Además podemos utilizar el comando: "sls offline" para simular el servicio de AWS Lambda de manera offline y local en nuestra PC de forma que podamos realizar peticiones a la lambda usando el Endpoint: "localhost:3000/postales/codigoPostal" remplazando codigoPostal por un numero de algún CP de México.

Cuando usamos el comando de docker-compose up, se crea una imagen de docker y se ejecuta automáticamente siempre y cuando tengamos instalado docker en nuestra PC, este contenedor automáticamente ejecutará el comando sls offline al iniciar para poder utilizar la lambda. La dirección del endpoint es la misma que si ejecutaramos el código desde el proyecto: "localhost:3000/postales/CodigoPostal"

Al utilizar esta lambda con algún código postal usando el endpoint nos debería regresar el estado, municipio y colonias asociadas al código postal que mandemos como parámetro. Todo esto nos los regresará como un objeto con la información organizada en arreglos para un mejor entendimiento, además de todo nos regresará dentro del objeto una variable err que nos indicará si es que sucedio algún error, en caso de que no entonces su valor será NULL.

Una caracteristica del repositorio y el proyecto es que al realizar un push, debido al flujo de trabajo que establecimos utilizando github actions, también se subirá la lambda automáticamente a AWS.

Se utilizó serverless, express, jest, docker, github actions para serverless, entre otros.
