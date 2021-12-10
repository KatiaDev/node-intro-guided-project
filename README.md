# Animal Shelter Web API

Guided project for **Node API 1** Module.

In this project we will learn how to create a simple Web API using `Node.js` and `Express`, and cover the basics of server-side routing using global middleware.

## Prerequisites

- an HTTP client like [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/).

## Project Setup

- [ ] Clone this repository.
- [ ] Open the project folder in VSCode.

## Assignment

Build a RESTful Web API for an animal shelter to Create, Read, Update and Delete _"Dogs"_ .

A Dog has:

- a unique `id`.
- a `name`.
- a `weight`.

### Features

The Web API must provide a set of `endpoints` to fulfill the following needs:

- add a new Dog.
- view a list of existing Dogs.
- view the details of a single Dog.
- update the information of an existing Dog.
- remove a Dog.

Here is a table with the `endpoint` descriptions:

| Action                | URL                | Method | Response          |
| :-------------------- | :----------------- | :----- | :---------------- |
| Add a Dog             | /api/dogs          | POST   | the new Dog       |
| View list of Dogs     | /api/dogs          | GET    | array of Dogs     |
| View Dog details      | /api/dogs/{id}     | GET    | a Dog             |
| Update Dog            | /api/dogs/{id}     | PUT    | updated Dog       |
| Remove a Dog          | /api/dogs/{id}     | DELETE | deleted Dog       |

#### 1 [GET] /api/dogs 

- If there's an error in retrieving the _dogs_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The dogs information could not be retrieved" }`.

#### 2 [GET] /api/dogs/:id

- If the _dog_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The dog with the specified ID does not exist" }`.

- If there's an error in retrieving the _dog_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The dog information could not be retrieved" }`.

#### 3 [POST] /api/dogs

- If the request body is missing the `name` or `weight` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON: `{ message: "Please provide name and weight for the dog" }`.

- If the information about the _dog_ is valid:

  - save the new _dog_ the the database.
  - return HTTP status code `201` (Created).
  - return the newly created _dog_.

- If there's an error while saving the _dog_:
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON: `{ message: "There was an error while saving the dog to the database" }`.

#### 4 [PUT] /api/dogs/:id

- If the _dog_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The dog with the specified ID does not exist" }`.

- If the request body is missing the `name` or `weight` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON: `{ message: "Please provide name and weight for the dog" }`.

- If there's an error when updating the _dog_:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The dog information could not be modified" }`.

- If the dog is found and the new information is valid:

  - update the dog document in the database using the new information sent in the `request body`.
  - return HTTP status code `200` (OK).
  - return the newly updated _dog_.

#### 5 [DELETE] /api/dogs/:id

- If the _dog_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The dog with the specified ID does not exist" }`.

- If there's an error in removing the _dog_ from the database:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The dog could not be removed" }`.

