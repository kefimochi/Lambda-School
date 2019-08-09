// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topics = document.querySelector(".topics");
let arrayTopics = [];

axios
  .get("https://lambda-times-backend.herokuapp.com/topics", {
    method: "get"
  })
  .then(res => {
    arrayTopics.push(res.data.topics);
    console.log("Res", res.data.topics);
    res.data.topics.forEach(topic => {
      let tab = document.createElement("div");
      tab.classList.add("tab");
      tab.textContent = topic;
      topics.appendChild(tab);
    });
  })
  .catch(err => {
    console.log(err);
  });
