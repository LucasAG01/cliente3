# AJAX en JavaScript

## 1. Qué es AJAX

AJAX significa **Asynchronous JavaScript And XML**.

Es una técnica que permite **enviar y recibir datos del servidor sin recargar la página completa**.

### Funcionamiento básico

- Un usuario hace una acción  
- JavaScript envía la petición al servidor en segundo plano  
- La página no se recarga  
- Cuando llega la respuesta, se actualiza solo una parte del contenido  

---

## 2. Para qué sirve

- Validar formularios sin recargar  
- Consultar datos  
- Actualizar partes de la web  
- Hacer la aplicación más dinámica e interactiva  

---

## 3. Tecnologías que forman AJAX

AJAX no es una sola tecnología, sino una combinación de:

- HTML y CSS → presentación  
- DOM → modificar la página dinámicamente  
- XML / JSON → intercambio de datos  
- XMLHttpRequest → hacer peticiones al servidor  
- JavaScript → unir todo  

---

## 4. Requisitos

Para trabajar con AJAX necesitas un **servidor web**, porque las peticiones van al servidor.

Normalmente:

- Apache  
- PHP  
- MySQL / MariaDB  

Ejemplo de paquete completo:

- XAMPP  

---

## 5. Comunicación síncrona y asíncrona

### Síncrona

El navegador espera la respuesta del servidor.  
El usuario queda bloqueado.

### Asíncrona

La petición se hace en segundo plano.  
El usuario puede seguir usando la página.

---

## 6. El objeto XMLHttpRequest

Es el objeto principal de JavaScript para trabajar con AJAX.

```javascript
let peticion = new XMLHttpRequest();
```

### Métodos importantes

#### open()

```javascript
peticion.open("GET", "http://localhost/archivo.php", true);
```

Parámetros:
- método: GET o POST  
- url: archivo del servidor  
- async: true o false  

#### send()

```javascript
peticion.send();
```

POST:
```javascript
peticion.send("nombre=Ana&apellidos=Pérez");
```

#### setRequestHeader()

```javascript
peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```

#### abort()

Cancela la petición.

---

## 7. Propiedades importantes

### readyState

- 0 → no inicializada  
- 1 → conexión establecida  
- 2 → solicitud recibida  
- 3 → procesando  
- 4 → terminada  

### status

- 200 → OK  
- 404 → no encontrado  

### statusText

- OK  
- Not Found  

### responseText

Respuesta en texto.

### responseXML

Respuesta en XML.

### onreadystatechange

Función que se ejecuta cuando cambia readyState.

---

## 8. Ejemplo básico AJAX (GET)

```javascript
let peticion = new XMLHttpRequest();
peticion.open("GET", "http://localhost/procesar.php?nombre=Bob&apellidos=Esponja", true);
peticion.send();

peticion.addEventListener("load", function() {
    document.getElementById("resultado").innerHTML = peticion.responseText;
});
```

---

## 9. GET vs POST

### GET

```javascript
peticion.open("GET", "http://localhost/procesar.php?nombre=Bob&apellidos=Esponja", true);
peticion.send();
```

Ventajas:
- simple  
- útil para consultas  

Inconveniente:
- datos visibles en la URL  

---

### POST

```javascript
let peticion = new XMLHttpRequest();
peticion.open("POST", "http://localhost/procesar.php", true);
peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
peticion.send("nombre=Bob&apellidos=Esponja");
```

IMPORTANTE:
```javascript
peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```

---

## 10. XML

```javascript
let cds = peticion.responseXML.documentElement.getElementsByTagName("CD");
```

Acceso a datos:

```javascript
cds[i].getElementsByTagName("TITLE")[0].innerHTML
```

---

## 11. JSON

```javascript
let datos = JSON.parse(peticion.responseText);
console.log(datos[0].title);
```

Ventajas:
- más simple  
- más ligero  
- más usado  

---

## 12. jQuery y AJAX

Cargar jQuery:

```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```

Ventajas:
- menos código  
- más fácil  
- compatible con navegadores  

---

## 13. $.ajax()

```javascript
$.ajax({
    url: "http://localhost/fecha.php",
    type: "GET",
    success: function(respuesta) {
        $("#resultado").text(respuesta);
    }
});
```

---

## 14. Métodos rápidos

### load()

```javascript
$("#resultado").load("http://localhost/fecha.php");
```

### post()

```javascript
$.post("http://localhost/procesar.php", "nombre=Bob&apellidos=Esponja", function(respuesta) {
    $("#resultado").html(respuesta);
});
```

### get()

```javascript
$.get("http://localhost/procesar.php", {nombre:"Bob"}, function(respuesta) {
    $("#resultado").html(respuesta);
});
```

### getJSON()

```javascript
$.getJSON("http://localhost/datosjson.php", function(datos) {
    console.log(datos);
});
```

---

## 15. Diferencias clave

### XMLHttpRequest vs jQuery

XMLHttpRequest:
- más código  
- más manual  

jQuery:
- más simple  
- menos código  

---

### GET vs POST

GET:
- datos en URL  

POST:
- datos ocultos  

---

### XML vs JSON

XML:
- más complejo  

JSON:
- más simple  
- más usado  