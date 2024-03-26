import { generateUUID } from "../utils/helpers.js";

function postUser(data) {
  const newUser = {
    name: data.username,
    age: data.date,
    userType: data.userType,
    id: data.id,
  }

  fetch('https://dba9d08984ff3285.mokky.dev/students',{
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      'content-type': 'application/json'
    }
  })
}

function getUser() {
  spinner.style = 'display: block'
  const students = fetch('https://dba9d08984ff3285.mokky.dev/students')
  students
      .then(data=>data.json())
      .then(result=>render(result))
      .catch(err=>err).finally(()=>spinner.style = 'display: none')
  // return fetch('https://dba9d08984ff3285.mokky.dev/students')
  //     .then(res=>res.json())
  //     .then(data=> render(data))
  //     .finally(()=> spinner.style ='display: none')
}

function removeUser(id) {
  console.log(id)
  fetch(`https://dba9d08984ff3285.mokky.dev/students/${id}`,{
    method: 'DELETE',
  })
  getUser()
}

function render(data) {
  let html = ''
  data.forEach(item=>{
    html += `
            <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.userType}</td>
                <td>
                    <button type="button" onclick="removeUser(${item.id})">Remove</button>
                </td>
            </tr>
    `
    document.querySelector('#tbody').innerHTML = html
  })
  getUser()
}


let spinner = document.querySelector("#spinner");
let errorElement = document.querySelector("#error");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const date = document.querySelector("#date").value;
  const userType = document.querySelector("#userType").value;

  const data = {
    username, 
    date, 
    userType, 
    id: generateUUID() 
  };

  postUser(data)
  // getUser()
  
});

getUser()

