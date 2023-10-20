
let userName = document.getElementById('userName').value;
let userAge = document.getElementById('age').value;

// Create a new object with the user's input
function userInfo(){
const newUser = {
  name:userName ,
  age: userAge
  }
  // convert user input to string using json and stor in localStorage
  let userData =JSON.stringify(newUser);
  localStorage.setItem('userData', userData);
  let root = document.getElementById("displayData")
  root.textContent = `
    Data save in localStorage `
};
// getting localStora value
function showInfo(){
    let data = localStorage.getItem("userData")
    let itemGet = JSON.parse(data)
// Display storage vlaue in page 
let userCard = document.createElement("div")
        userCard.className= "user_Card"

        let name = document.createElement("p")
        name.textContent = `Name : ${itemGet.name}`
        let age = document.createElement("p")
        age.textContent = `Age : ${itemGet.age}`

        userCard.append(
            name,
            age
        )
        let root = document.getElementById("displayData")
        root.append(userCard)
}