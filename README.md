git clone https://github.com/KuajinaiSS/practica2_api

Backend
cd backend
composer install
cp .env.example .env
php artisan key:generate
Configura la base de datos en el archivo .env
php artisan migrate:fresh --seed
php artisan serve

cd ..
cd frontendd

frontend
npm install
npm run start


# Nombre_del_Proyecto

Descripción corta del proyecto en una línea.

## Descripción

Aquí puedes proporcionar una descripción general del proyecto, incluyendo tanto el frontend como el backend. Describe el propósito del proyecto, sus características principales y cualquier información relevante para los desarrolladores que utilicen o contribuyan al mismo.

### Frontend (React con Tailwind, Axios y React Router DOM)

#### Requisitos del Frontend

- Node.js y npm (o yarn) instalados

#### Instalación del Frontend

1. Accede al directorio del frontend: `cd frontend`
2. Instala las dependencias: `npm install` o `yarn install`

#### Uso del Frontend

1. Inicia el servidor de desarrollo: `npm start` o `yarn start`
2. Abre tu navegador en `http://localhost:3000` para ver la aplicación en ejecución

#### Estructura de Carpetas del Frontend

Describe la estructura de carpetas del frontend si tienes una organización específica para componentes, estilos, rutas, etc.

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
7. Ejecuta el servidor de desarrollo: `php artisan serve`

#### Uso del Backend

Proporciona instrucciones sobre cómo utilizar el backend, cómo interactuar con las API, etc.

#### Estructura de Carpetas del Backend

Puedes describir la estructura de carpetas del backend si tienes una organización específica para controladores, modelos, rutas, etc.

## Contribución

Incluye instrucciones generales sobre cómo otros desarrolladores pueden contribuir al proyecto, ya sea al frontend, al backend o a ambos.

## Licencia

Indica la licencia bajo la cual se distribuye el proyecto en general.

## Contacto

Proporciona información de contacto para preguntas, problemas o colaboraciones relacionadas con cualquier parte del proyecto (frontend o backend).
