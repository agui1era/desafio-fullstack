# Desafío Previred - API RESTful con Spring Boot 3.4 y OpenAPI

Este proyecto es una API RESTful desarrollada con **Spring Boot 3.4.2**, que permite realizar operaciones CRUD sobre usuarios.  
Se utiliza **H2 como base de datos en memoria**, **Spring Data JPA**, y **Swagger/OpenAPI** para la documentación.

## 📌 Características principales
✔ API RESTful con CRUD de usuarios  
✔ Documentación generada automáticamente con OpenAPI/Swagger  
✔ Base de datos en memoria **H2**  
✔ Desplegable con **Docker y Docker**  

---

## 🚀 **Requisitos**
Para ejecutar el proyecto, necesitas instalar:
- [JDK 17](https://adoptium.net/)
- [Apache Maven](https://maven.apache.org/)
- [Docker )](https://www.docker.com/)

---

## 🔧 **Configuración**
Este proyecto usa **H2 Database** en memoria, por lo que los datos se perderán al reiniciar.

### **Configuración en `application.properties`**
📌 Archivo: `src/main/resources/application.properties`
```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
springdoc.api-docs.enabled=true
springdoc.swagger-ui.enabled=true
```

---

## 🏗 **Construcción y Ejecución**

### 📌 **Ejecutar con Maven**
```bash
mvn spring-boot:run
```

### 📌 **Construir el JAR**
```bash
mvn clean package -DskipTests
java -jar target/*.jar
```

### 📌 **Ejecutar con Docker**
```bash
docker build -t desafio-previred .
docker run -p 8080:8080 desafio-previred
```

---

## 🛠 **Endpoints de la API**
### 📌 Base URL: `http://localhost:8080`

### **1️⃣ Crear un usuario (POST)**
```bash
curl -X POST http://localhost:8080/usuarios      -H "Content-Type: application/json"      -d '{
           "nombres": "Juan",
           "apellidos": "Pérez",
           "rut": 12345678,
           "dv": "K",
           "fechaNacimiento": "1990-05-15",
           "correoElectronico": "juan.perez@example.com",
           "contrasena": "123456"
         }'
```

### **2️⃣ Obtener todos los usuarios (GET)**
```bash
curl -X GET http://localhost:8080/usuarios
```

### **3️⃣ Obtener un usuario por ID (GET)**
```bash
curl -X GET http://localhost:8080/usuarios/1
```

### **4️⃣ Actualizar un usuario (PUT)**
```bash
curl -X PUT http://localhost:8080/usuarios/1      -H "Content-Type: application/json"      -d '{
           "nombres": "Juan Carlos",
           "apellidos": "Pérez",
           "rut": 12345678,
           "dv": "K",
           "fechaNacimiento": "1990-05-15",
           "correoElectronico": "juan.carlos@example.com",
           "contrasena": "nuevaClave123"
         }'
```

### **5️⃣ Eliminar un usuario (DELETE)**
```bash
curl -X DELETE http://localhost:8080/usuarios/1
```


