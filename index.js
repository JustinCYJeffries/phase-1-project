document.addEventListener("DOMContentLoaded", () =>{
//selectors and listeners
const peopleSelectors = document.querySelector('#peopleSelectors')


//fetch
//fetch family from db
function fetchFamily(){
    fetch("http://localhost:3000/jeffriesFamily")
    .then(r => r.json())
    .then(displayFamily)
}

function displayFamily(members){
    members.forEach(members => renderFamily(members))
}
function renderFamily(member){
    const memberButton = document.createElement('span')
    memberButton.classList = "boxButton"
    memberButton.id = member.id
    memberButton.innerHTML = member.name
    peopleSelectors.appendChild(memberButton)
    
}





fetchFamily()
})
