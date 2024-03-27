const MY_API =  'https://api.elchocrud.pro/api/v1/6f15a7b57c4787ab06e96d3640ea27bf/payments'

const modal = document.getElementById("myModal");
const btn = document.getElementById("editButton");
const span = document.getElementsByClassName("close")[0];

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  let studentName = document.querySelector("#studentName").value;
  let payment = document.querySelector("#payment").value;
  let dateOfPayment = document.querySelector("#dateOfPayment").value;


  const data = {
    studentName,
    payment,
    dateOfPayment,
    payed: false,
  }
  postData(data)

});


// async/await
async function postData(data) {
  try{
    const response = await fetch(MY_API,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json)
  }catch (err){
    console.error('ERROR' + err)
  }
}


// get
const getPayments = async () => {
  try{
   // return fetch(MY_API)
   //      .then(res=>res.json())
   //      .then(data=>renderPayments(data))
    const res = await fetch(MY_API)
    const data = await res.json()
    renderPayments(data)
  }catch (err){
    console.error('ERROR' + err)
  }
}
getPayments()

// render
function renderPayments(data) {
  let html = ''
  const root = document.querySelector('#root')

  data.forEach((item) => {
    html += `
         <tr>
             <td>${item.studentName}</td>
             <td>${item.payment}</td>
             <td>${item.dateOfPayment}</td>
             <td class="actions">
                 <input checked="${item.payed}" onchange="togglePayed(${item._id})" id="checkbox" type="checkbox" class="checkbox" />
                 <button class="edit-button" id="editButton">
                   <img src="./assets/icons/edit.svg" alt="" />
                 </button>
                 <button class="delete-button" id="deleteButton">
                   <img src="./assets/icons/deleteIcon.svg" alt="" />
                 </button>
             </td>
          </tr>
    `
    root.innerHTML = html
  })
}

async function togglePayed(id) {
  const newData = {
    payed: true,
  }
  try{
    const response = await fetch(`${MY_API}/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    const json = await response.json()
    // console.log(json)
  }catch (err){
    alert('ERROR'+err)
  }
}


const updateFn = async (id) => {
  modal.style.display = 'block';
  try {
    const res = await fetch(`${MY_API}/${id}`)
    const data = await res.json()
    console.log(data)

    document.querySelector('#studentName').value = data.studentName
  }catch (err){
    alert('ERROR' + err)
  }
}
btn.addEventListener('click',()=>{
  updateFn()
})


// try/catch
// const prime = 0
// console.log(1)
// try{
//   prime = 1000
// }catch (err){
//   console.error('ERROR' + err)
// }
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// function getData() {
//   fetch(MY_API,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
// }

// function postData(data) {
//   fetch(MY_API,{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//       .then(res=>{
//          return res.json()
//        })
//       .catch(err=> alert('ERROR:'+err))
// }



