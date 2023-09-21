# Laravel Nuxt Boilerplate Documentation

The documentation for the "Laravel Nuxt Boilerplate" application allows you to quickly start a new project using Nuxt 3 as the frontend layer and Laravel as the backend layer.

## Table of Contents

1. [System Requirements](#system-requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Application](#running-the-application)
5. [Using the Application](#using-the-application)
6. [API Documentation](#api-documentation)
7. [Validation Handling](#validation-handling)
8. [Style Management](#style-management)
9. [ESLint and Vee-Validate](#eslint-and-vee-validate)
10. [Auth](#auth)
11. [Locales](#locales)
12. [License](#license)

## System Requirements

To run the "Laravel Nuxt Boilerplate" application, you will need:

- [Node.js](https://nodejs.org) (recommended LTS version)
- [PHP](https://www.php.net) (recommended version 8.x)
- [Composer](https://getcomposer.org) (recommended 2.x)
- [Docker](https://www.docker.com) (for using Laravel Sail)
- [Laravel Sail](https://laravel.com/docs/8.x/sail) (for easily running the Laravel application)

## Installation

To install the application, follow these steps:

```bash
# Clone the repository
git clone https://github.com/AdrianKuriata/laravel-nuxt-boilerplate.git

# Navigate to the application directory
cd laravel-nuxt-boilerplate

# Copy the .env.example file to .env and customize the configuration
cp .env.example .env

# Install PHP dependencies
composer install

# Start Docker containers (using Laravel Sail)
./vendor/bin/sail up -d

# Install dependencies
npm i

# Start Nuxt
npm run dev
```

## Configuration

Application configuration is located in the `.env` file. Customize settings such as the database, environment, etc., according to your needs.

## Running the Application

To run the application, use the following command:

```bash
./vendor/bin/sail up -d
```

And next run Nuxt 3
```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Using the Application

With this boilerplate you can ease create new modern applications. There is latest version of Nuxt 3, Laravel 10. To manage store pinia is used.

## API Documentation

There is Laravel for API. You can easy use a ziggy route with useZiggy (auto import) to use routes from the API in the client layer.

## Validation Handling

Form validation is handled on the backend (in Laravel). Detailed information about validation can be found in the [Laravel documentation](https://laravel.com/docs/8.x/validation). For the client vee-validate is used.

## Style Management

The application uses Tailwind CSS for style management. You can customize styles in the Tailwind CSS configuration files. There is a simple components created with tailwind, but if you want, you can use other UI libraries for your project.

## ESLint

ESLint is used to enforce coding style for JavaScript. Check a configuration for more information

## Auth

There is used Laravel Breeze for backend authentication and @nuxt-alt/auth for client authorization. In fact to this day, there is no update for @nuxt/auth for Nuxt 3, so we are using alternative package. If there will be update for original package, we update this boilerplate. You can login, register or reset password.

## Locales

i18n is used for manage locales in the application. Every locale should be updated in the client/locales files. The next locales you can add nuxt.config.ts.

## License

The application is released under the MIT License.
