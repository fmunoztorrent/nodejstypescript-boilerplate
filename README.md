# Boiler plate API  NodeJS / Typescript / MySQL

## Uso y consumo API

##### Listar visitas

###### Paginación
Para usar paginación se debe incluir el parámetro **page** como querystring a la petición. Si no está presente se listará la página 1. El orden de aparición de los items es por id descendiente.

###### Respuesta en XML
La respuesta por defecto del API es en formato JSON. Si se requiere una respuesta en XML se debe incluir el parámetro **format=xml** dentro del querystring.

Se pueden combinar los dos parametros para usar paginación y el formato de respuesta. Ejemplo: https://localhost:8080/visits?format=xml&page=2

##### Ver detalle de un visit por ID
GET https://localhost:8080/visits/:id
Ejemplo: https://localhost:8080/visits/1
El parámetro **id** debe ser un número entero igual o mayor a 1.
Se puede obtener una respuesta en formato xml usando el parámetro **format=xml** en el querystring de la url de solicitud.

##### Creación de nueva visit
POST https://localhost:8080/visits
Ejemplo: https://localhost:8080/visits
###### Payload para creación de un nueva visita
```json
{
    "url": "https://google.cl",
    "ip": "192.168.1.1"
}
```
###### Restricciones para el payload y validaciones
1. No puede ser incluido el ID en formato numérico o fallará la petición.
---

## Lenguaje y herramientas  

  - NodeJS / Typescript / MySQL
  - Tests:  Jest
  - Librerias: Sequelize, Xml
  - Docker compose
  
---

## Instalación  

### Entorno de desarrollo  

##### Clonar repositorio  

```sh
$ git clone <URL>
```
##### Crear y levantar contenedor de MySQL  

```sh
$ sudo docker-compose up -d
```

1. Si se saca el parámetro -d se pueden ver los logs del MySQL.
2. Se incluye PhpMyAdmin en el puero 8082 para mayor comodidad.

##### Instalar dependencias NPM  

```sh
$ npm install
```
##### Iniciar entorno de desarrollo
  
```sh
$ npm run dev
```