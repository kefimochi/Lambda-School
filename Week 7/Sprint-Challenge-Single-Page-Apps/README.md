# Sprint Challenge: Single Page Applications
## Rick & Morty Edition

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Single Page Applications, React Router I - II, and React Forms.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate with students during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support by reaching out through DM to your TL. 
You have **three hours to complete** this challenge. **Plan your time accordingly.**

## Commits

In case you ever need to return to old code. Remember your **ABC: Always Be Committing!**

## Description

In this challenge, you will create a Single Page Application complete with Client-Side Routing. It must consume a 3rd party API service (based on the TV show [Rick and Morty](https://rickandmortyapi.com/documentation).)

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question.

- [ ] Explain benefit(s) using `client-side routing`?
> Answer: JS manages the data for application within its own memore, if additional data is needed a call to a simple JSON-returning API will be made. Doesn't refresh the page between routes and it is way faster when commuting between routes.
- [ ] What does AJAX stand for?
> Answer: Asynchronous JavaScript and XML
- [ ] What are `controlled components` in React?
> Answer: The React component that renders a form also controls what happens in that form on subsequent user input

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on GitHub.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: `git checkout -b <firstName-lastName>`.
- [ ] Implement the project on this branch, committing changes regularly.
- [ ] Push commits: `git push origin <firstName-lastName>`.
- [ ] **LOOK** at your project directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **RUN** `yarn install` or `npm install` to retrieve the client-side dependencies.
- [ ] **RUN** `yarn start` or `npm start` to fire up your React application.


#### Exceeded rate limits?

<details>
  <summary>⚠️ Expand for alternate API URL</summary>

If the [main API service](https://rickandmortyapi.com/documentation) goes down, or you exceed rate limits, try the following URL:

[**Backup URL:**](https://rick-api.herokuapp.com/api/) `https://rick-api.herokuapp.com/api/`

You can still be locked out - watch your [chrome devtools' network panel](https://developers.google.com/web/tools/chrome-devtools/network/reference) to make sure you aren't making too many requests.
</details>


[Instructions to completing](#completing)

## Minimum Viable Product (MVP)

> The MVP of this project is broken up between a couple parts.

1. Plan: Divide your allowed time, use either 15, 30 or 60 minute intervals.
    1. Plan estimated targets or waypoints ("By the '1 hour' mark I'll have 1 component functionally completed & styled"). **This is mostly about time-boxing.**
    1. If you get stuck - maximize your time: try building another part, going back to previous working commit, or asking your TL for help.
1. Follow [each part](#part-1).
1. Find design resources OR use your design skills make the application look professional.

#### MVP Preview:

![SPA-Sprint-Challenge-Preview](https://user-images.githubusercontent.com/397632/61949095-f1d05c80-af66-11e9-9712-80ce3da84675.gif)

### Part 1

Construct a Single Page Application with React incorporating multiple components.

Keep your components separate and design them before adding in your Router.

You can test them individually before adding in the Router ([Part 2](#part-2)).

Create 3 page components to display data from 3 API endpoints:

- `https://rickandmortyapi.com/api/character/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-characters)
- `https://rickandmortyapi.com/api/location/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-locations)
- `https://rickandmortyapi.com/api/episode/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-episodes)
- You will need to add a EpisodeList and EpisodeCard component yourself.
- [ ] Read the [Rick & Morty API](https://rickandmortyapi.com/documentation/) docs.
- [ ] Create a component to show a grid of data from the API.
  - [ ] Include `useState`, `useEffect`.
  - [ ] Use `Axios` (or `fetch`) to make a GET request to the 3 endpoints.
  - _Example API Endpoint: `https://rickandmortyapi.com/api/character/`_
  - [ ] Display API results using a [card](https://react.semantic-ui.com/views/card/#content-image-card) grid or [list](https://react.semantic-ui.com/elements/list/#content-icon) UI on the page.
  - [ ] Design each 'page' layout based on the available fields. (See docs for [schema](https://rickandmortyapi.com/documentation/#character-schema) details.)
  - [ ] Use a styling or component library for part of or all of your application. (Pick at least 1 of: [Semantic-UI](https://react.semantic-ui.com), [React Bootstrap](https://react-bootstrap.github.io/), [Material-UI](https://material-ui.com/), [styled components](https://www.styled-components.com/), [emotion](https://emotion.sh/docs/introduction)), etc.
  - [ ] Before adding routing, 'spot' check each component manually by importing into `App.js` and adding to JSX.

> 💡**Reminder:** `git commit -am 'Card UI Loading Data Successfully'`

### Part 2

Add a Router to this application using [React Router](https://reacttraining.com/react-router/web/guides/quick-start).

> **Tip:** Review the [examples on the React Router site.](https://reacttraining.com/react-router/web/guides/quick-start)

- [ ] Declare your routes with `<Route>` components (for each component created above.)
  - [ ] Include `/character`, `/location` and `/episode` routes.
- [ ] In your `App` component, add a navigation menu, [tab bar](https://react.semantic-ui.com/modules/tab/#types-basic), or similar. (Hint: Make sure to use React Routers `NavLink` to link to your different pages.)
- [ ] If you have any `<a>` tags, replace them with `<Link>` or `<NavLink>` components.

- [ ] **Make sure all tasks are complete:** Do a global search (Cmd-Shift-F in VS Code) for the string `TODO:`.

> 💡**Reminder:** `git commit -am 'MVP Completed'`


---------------------------------------------------------


> 🚀 **Pro Tip: Complete as many stretch goals as possible!** Even after the Sprint Challenge! You'll get a head start on important upcoming concepts!


## STRETCH GOALS 💪


There's a range of difficulty in the options below. 😈

_Note:_ The most difficult stretch goal(s) could take an expert an hour or more.

Start with the most _familiar (or fun) sounding_ stretch goal.
  Complete search component to your list views.
 - [ ] Add the `<SearchForm />` component (see `./components/SearchForm.js`).
 - [ ] Wire up the `onSearch(name)` callback prop to support [querying the API](https://rickandmortyapi.com/documentation/#filter-characters). (To search for `rick`, you would request `/api/character/?name=rick`.)
- [ ] _Remember:_ `useEffect` must reference any state on which it _depends_.


- [ ] Animate page transition and/or card loading.
- [ ] Persist search form field(s) by using the custom hook `useLocalStorage`.
- [ ] Add error handling for all async (axios/AJAX) calls. (Including some styled UI.)
- [ ] Add a "details view" and route to show more details for each type of record. (Hint: Look into route parameters or nested routes.)
  - [ ] Similar to the "details view" now with a UI twist: use a [modal](https://react.semantic-ui.com/modules/modal/#variations-size) component to show item view. (If you can, build [modal with routes](https://codesandbox.io/s/react-router-modal-gallery-classes-example-z98l5).)
- [ ] Add [paging support](https://react.semantic-ui.com/addons/pagination/#types-pagination) (next/previous links.)
- [ ] Refactor to use as few Components as possible - while still readable to a React Dev. (Hint: research these patterns: HoC, render props, FaaC.)
- [ ] Add additional fields to search form. They are unique for each endpoint. See [**Available parameters**.](https://rickandmortyapi.com/documentation/#filter-characters), etc..
- [ ] Use the [GraphQL Endpoint](https://rickandmortyapi.com/documentation/#graphql) with multiple search fields.

> 💡**Reminder:** `git commit -am 'Stretch Progress 💪'`

## Completing

> Follow these steps to complete your project:

- [ ] Submit a Pull Request to merge `<firstName-lastName>` branch into master (student's repo).
- [ ] Add your TL as a Reviewer on the Pull Request.
- [ ] TL then will count the HW as done by merging the branch into master.


<!-- TLs: NOTE: use resources to coach, or share over zoom - avoid sharing entire solution folder. Share preview links if available. -->

> **Note:** AFTER Sprint Challenge: [Solutions to many stretch goals](https://github.com/LambdaSchool/Sprint-Challenge-Single-Page-Apps-Solution/pulls) (and live demo URLs) are available from TLs (or GitHub admins.)

There are many ways to implement each of these requirements!

