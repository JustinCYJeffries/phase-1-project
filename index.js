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

function fetchAnimalKingdom(){
    fetch("https://queue-times.com/en-US/parks/7/queue_times.json",
    {
      
    }
    )
    .then(r => r.json())
    .then(function (r){
        
        cleanUpFetch(r)
        })
}

function cleanUpFetch(lands){
    let landProp = lands.lands
      for(i=0; i<landProp.length; i++){
        landProp[i].rides.forEach(ride=>console.log(ride))
  
  }
       
    
}
function renderRides(ride){
    console.log(ride)
}

fetchAnimalKingdom()
fetchFamily()
})
