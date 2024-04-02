# HotelTaskwithTypescript
# User Authentication API

This Node.js API provides user authentication functionality using JSON Web Tokens (JWT).

## Introduction

The User Authentication API allows users to authenticate using their username and password. Upon successful authentication, the API issues a JSON Web Token (JWT) which can be used for subsequent requests requiring authentication.

# TypeScript Project 

This README provides instructions for setting up a TypeScript project and installing TypeScript dependencies.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) - Package managers for Node.js

# Installation

## Setting up TypeScript in Your Project

This guide explains how to set up TypeScript in your project, configure TypeScript compiler options, and install TypeScript typings.


### Install TypeScript

Install TypeScript as a development dependency using npm or yarn:

```bash
npm install typescript --save-dev
# or
yarn add typescript --dev
```
### Create a tsconfig.json File

Create a tsconfig.json file in your project's root directory to configure TypeScript. This file specifies the TypeScript compiler options and settings for your project. Example tsconfig.json:
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "rootDir": "src",
    "allowJs": true,
    "outDir": "build",
    "esModuleInterop": true, 
      "forceConsistentCasingInFileNames": true, 
      "noImplicitAny": true,
      "skipLibCheck": true   
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Install TypeScript Typings 

If you're using third-party libraries that don't include TypeScript typings by default, you may need to install typings separately. Use npm or yarn to install typings:

```bash
npm install @types/express --save-dev
# or
yarn add @types/express --dev
```

## Access the endpoints

To access the endpoint you can use the deployed link: [https://hotel-management-2.onrender.com/]

You'll have to login first with provided username and password using [https://hotel-management-2.onrender.com/api/v1/login]
 ```javascript
 const users = [
    { id: 1, username: 'Mims', password: 'Dembele', role: 'user' },
    { id: 2, username: 'Miracle', password: 'ansufatii', role: 'admin' }
  ];
  ```
  After that you can acceess the following endpoints with the generated jwt token:
  #### Get All Rooms

- URL: `GET /rooms`
- Description: Retrieves a list of all rooms.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters: None
- Response:
  - Status Code: 200 (OK)
  - Body: List of rooms in JSON format

#### Create Room

- URL: `POST /rooms`
- Description: Creates a new room.
- Authentication: Required (JWT token)
- Authorization: Admin role required
- Parameters:
  - Request Body: Room data in JSON format
- Response:
  - Status Code: 201 (Created)
  - Body: Newly created room in JSON format

#### Get Room by ID

- URL: `GET /rooms/:id`
- Description: Retrieves a room by its ID.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters:
  - URL Path Parameter: Room ID
- Response:
  - Status Code: 200 (OK)
  - Body: Room details in JSON format

#### Update Room

- URL: `PUT /rooms/:id`
- Description: Updates a room by its ID.
- Authentication: Required (JWT token)
- Authorization: Admin role required
- Parameters:
  - URL Path Parameter: Room ID
  - Request Body: Updated room data in JSON format
- Response:
  - Status Code: 200 (OK)
  - Body: Updated room details in JSON format

#### Delete Room

- URL: `DELETE /rooms/:id`
- Description: Deletes a room by its ID.
- Authentication: Required (JWT token)
- Authorization: Admin role required
- Parameters:
  - URL Path Parameter: Room ID
- Response:
  - Status Code: 204 (No Content)

### Users

#### Get All Users

- URL: `GET /users`
- Description: Retrieves a list of all users.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters: None
- Response:
  - Status Code: 200 (OK)
  - Body: List of users in JSON format

#### Get User by ID

- URL: `GET /users/:id`
- Description: Retrieves a user by their ID.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters:
  - URL Path Parameter: User ID
- Response:
  - Status Code: 200 (OK)
  - Body: User details in JSON format

#### Update User

- URL: `PUT /users/:id`
- Description: Updates a user by their ID.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters:
  - URL Path Parameter: User ID
  - Request Body: Updated user data in JSON format
- Response:
  - Status Code: 200 (OK)
  - Body: Updated user details in JSON format

#### Delete User

- URL: `DELETE /users/:id`
- Description: Deletes a user by their ID.
- Authentication: Required (JWT token)
- Authorization: None
- Parameters:
  - URL Path Parameter: User ID
- Response:
  - Status Code: 204 (No Content)