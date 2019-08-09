/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/kefimochi")
  .then(response => {
    console.log(response.data);
    // deal with the response data in here
  })
  .catch(err => {
    // deal with the error in here
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
// Goes to a provided url and converts the received data into a JSON object
axios
  .get("https://api.github.com/search/users?q=roman", {
    method: "get"
  })
  .then(res => {
    res.data.items.length !== 0 ? addUsersToDOM(res.data) : false;
    // res.json().then(result => {
    //   console.log("result", result);
    //   result.total_count !== 0 ? addUsersToDOM(result) : noUsersFound();
    // });
  })
  .catch(err => {
    console.log(err);
  });

function addUsersToDOM(users) {
  console.log("USERTEMS", users.items);
  users.items.forEach(person => {
    // Prevents undefined profiles from showing
    if (person === undefined) return;
    // Shows small cards for all found users
    extractUserObject(person);
  });
}

function extractUserObject(user) {
  axios
    .get(user.url, {
      method: "get"
    })
    .then(res => {
      console.log("Res", res.data);
      createUserComponent(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}

let cards = document.querySelector(".cards");

function createUserComponent(user) {
  console.log(user);
  let simpleUser = document.createElement("div");
  simpleUser.classList.add("simple-user");
  cards.appendChild(simpleUser);

  let topDescription = document.createElement("div");
  topDescription.classList.add("top-description");
  simpleUser.appendChild(topDescription);

  let avatar = document.createElement("img");
  avatar.setAttribute("src", user.avatar_url);
  topDescription.appendChild(avatar);

  let userShortInfo = document.createElement("div");
  userShortInfo.classList.add("user-short-info");
  topDescription.appendChild(userShortInfo);

  let name = document.createElement("h3");
  name.textContent = user.name;
  userShortInfo.appendChild(name);

  let login = document.createElement("span");
  login.textContent = `@${user.login}`;
  name.appendChild(login);

  let desciption = document.createElement("p");
  desciption.textContent = user.bio;
  userShortInfo.appendChild(desciption);

  let bottomDescription = document.createElement("div");
  bottomDescription.classList.add("bottom-description");
  simpleUser.appendChild(bottomDescription);

  let location = document.createElement("h4");
  location.textContent = user.location;
  bottomDescription.appendChild(location);

  let followers = document.createElement("h4");
  followers.textContent = `Followers: ${user.followers}`;
  bottomDescription.appendChild(followers);

  return simpleUser;
}
