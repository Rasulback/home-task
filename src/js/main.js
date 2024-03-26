






let row = document.querySelector('.row')

const renderCart = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(res=>res.json())
        .then(users=> users.results.forEach(item=>{

            let statusColor = ''
            if (item.status === 'Alive'){
                statusColor = 'green'
            }else if(item.status === 'unknown'){
                statusColor = 'grey'
            }else if(item.status === 'Dead'){
                statusColor = 'red'
            }


            let createDiv = document.createElement('div')
            createDiv.className = 'col-3';
            createDiv.innerHTML = `
                 <div class="card js-card" style="width: 20rem; border: 5px solid ${statusColor}" onclick="alert(${item.id})">
                    <img src="${item.image}" class="card-img-top" alt="...">
                     <div class="card-body">
                         <h5 class="card-title">${item.name}</h5>
                         <p class="card-text">${item.status}</p>
                     </div>
                 </div>
            `
            row.append(createDiv)
        }))
}

renderCart()


