# Sprint Challenge: State Management - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored the context API, the reducer pattern, and Redux. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

** Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout State Management and your command of the concepts and techniques in the the context API, the reducer pattern, and Redux.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build the Smurfs village once again, only this time, you will utilize context or Redux as your state management. Don't use any old code from your previous Smurfs Sprint Challenge. Build this challenge from the ground up using what you have learned about state management.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What problem does the context API help solve?
- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?
- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

## Project Set Up

Follow these steps to set up your project:

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `yarn` to retrieve all `server-side` the dependencies.
- [ ] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an empty Array `[]` returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [ ] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [ ] **cd** into `smurfs` and run `yarn` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

- [ ] Plan and implement how you are going to manage your state for your application
- [ ] You _must_ use either context or Redux as your state management system
- [ ] Once you have planned out your state management system, fetch data from the smurf server
- [ ] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

## API documentation

### GET '/smurfs'

- [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [ ] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
```

### POST '/smurfs'

- [ ] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [ ] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

- [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```
