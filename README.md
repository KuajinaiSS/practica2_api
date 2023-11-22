# Practica 2 API

### Frontend (React con Tailwind, Axios y React Router DOM)

#### Requisitos del Frontend

- Node.js y npm (o yarn) instalados

#### Instalación del Frontend

1. Clona el repositorio del frontend: `git clone https://github.com/KuajinaiSS/practica2_api`
2. Accede al directorio del frontend: `cd frontendd`
3. Instala las dependencias: `npm install`

#### Uso del Frontend

1. Inicia el servidor de desarrollo: `npm run start`
2. Abre tu navegador en `http://localhost:3000` para ver la aplicación en ejecución

### Backend (Laravel)

#### Requisitos del Backend

- PHP instalado
- Composer instalado

#### Instalación del Backend

1. Accede al directorio del backend: `cd backend`
2. Instala las dependencias: `composer install`
3. Copia el archivo de configuración: `cp .env.example .env`
4. Genera la clave de la aplicación: `php artisan key:generate`
5. Configura la base de datos en el archivo `.env`
6. Ejecuta las migraciones: `php artisan migrate:fresh --seed`

7. Instalación de Paquetes de NuGet para .NET (si aplicable)
Ejecuta los siguientes comandos en el directorio del backend para instalar los paquetes de NuGet necesarios:
```bash
dotnet add package Microsoft.EntityFrameworkCore.Design --version 7.0.11
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 7.0.11
dotnet add package System.IdentityModel.Tokens.Jwt --version 7.0.0
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 7.0.11
dotnet add package BCrypt.Net-Next --version 4.0.3
```

8. Ejecuta el servidor de desarrollo: `php artisan serve`
