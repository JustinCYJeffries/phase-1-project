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
function fetchAnimalKingdom(){
    fetch("https://queue-times.com/en-US/parks/7/queue_times.json",)
    .then(r => r.json())
    .then(function (r){
        cleanUpFetch(r)
        })
}
 function fetchHeightInfo() {
    fetch("http://localhost:3000/rideHeights")
    .then(r => r.json())
    .then(heightElement)
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



function cleanUpFetch(lands){
    let landProp = lands.lands
      for(i=0; i<landProp.length; i++){
        landProp[i].rides.forEach(ride=>addHeightElement(ride))
      }  
}

function checkOpen(ride){
    //confirmed this works, keep here
    console.log(ride.is_open)
    if(ride.is_open === true){
       console.log(ride,"is open")
    }
    else  console.log(ride, "is closed")
    
}

function heightElement(heightData){
    globalThis.over32=heightData[5].over32
    globalThis.over35=heightData[4].over35.concat(over32)
    globalThis.over38=heightData[3].over38.concat(over35)
    globalThis.over40=heightData[2].over40.concat(over38)
    globalThis.over44=heightData[1].over44.concat(over40)
    globalThis.over48=heightData[0].over48.concat(over44)   
    }
function addHeightElement(ride){
    for(i=0;i<over32.length;i++){
        console.log(over32[i])
        if(over32[i]=ride.name){
            console.log(ride)
        }
    }
}


function renderRides(ride){
    console.log(ride)
}

fetchAnimalKingdom()

fetchFamily()
fetchHeightInfo()
})
