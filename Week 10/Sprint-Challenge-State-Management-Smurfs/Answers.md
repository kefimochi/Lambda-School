1. What problem does the context API help solve?

Prop drilling is a common pattern of passing props all the way from a root element to its children whenever its needed, yet if there's like 12 child node elements all of them will have to pass props. With context API this chain can be escaped and we can pass props straight to the desired child.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are basically events triggered by the UI, they're telling reducers exactly what has to be done and are passing some of the necessary information. Reducers accept that object info and type of an action, and are returning the new state to the entire application. Store allows UI elements to grab pieces of global data all over the app. Store is known as a single piece of truth because it passes the global state everywhere where individual components then are allowed to choose which pieces of state they need to grab.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the whole state of the app with all global data while the component state is kind of like picking and choosing which data you want. I'd say always go with the latter one in order to save space and time.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows Redux to run asynchronously, meaning not having to wait for an API call to do something else in the application. It changes the calling of an action because now we're nesting themm together like `asyncFunc => data => dispatch => {}`

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I love Redux Thunk because it makes calling APIs easier and distribution of information among the global state faster.
