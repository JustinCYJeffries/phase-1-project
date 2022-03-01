document.addEventListener("DOMContentLoaded", () =>{
//selectors and listeners
const peopleSelectors = document.querySelector('#peopleSelectors')
const openRidetitle = document.querySelector('#openRideTitle')
const closedRidetitle = document.querySelector('#closedRideTitle')
let addOpenRides = true
let addClosedRides = true
const closedRideTable=document.querySelector('#closedRides');
const openRideTable=document.querySelector('#openRides');
const allParks=document.querySelector('#allParks');
const magicKingdom=document.querySelector('#magicKingdom');
const epcot=document.querySelector('#epcot');
const hollywoodStudios=document.querySelector('#hollywoodStudios');
const animalKingdom=document.querySelector('#animalKingdom');
//fetch
//fetch family from db
const buttonChange = document.querySelectorAll(".cellButtons")
console.log(buttonChange)
Array.from(buttonChange).forEach(el =>{
    el.addEventListener('click', e =>{
        
        if (e.target.name == buttonChange){
            document.getElementById(e.target.id).classList.add('selectedButtons')
        }else el.classList.remove('selectedButtons')
    })
})


function fetchFamily(){
    fetch("http://localhost:3000/jeffriesFamily")
    .then(r => r.json())
    .then(displayFamily)
}
function fetchAnimalKingdom(){
    fetch("https://queue-times.com/en-US/parks/8/queue_times.json",)
    .then(r => r.json())
    .then(function (r){
        cleanUpFetch(r)
        })
}
function fetchMagicKingdom(){
    fetch("https://queue-times.com/en-US/parks/6/queue_times.json",)
    .then(r => r.json())
    .then(function (r){
        cleanUpFetch(r)
        })
}

function fetchHollywoodStudios(){
    fetch("https://queue-times.com/en-US/parks/7/queue_times.json",)
    .then(r => r.json())
    .then(function (r){
        cleanUpFetch(r)
        })
}
function fetchEpcot(){
    fetch("https://queue-times.com/en-US/parks/5/queue_times.json",)
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
//event listeners
allParks.addEventListener("click", (e) =>{
    resetFields(e)
    fetchAnimalKingdom(e)
    fetchMagicKingdom(e)
    fetchHollywoodStudios(e)
    fetchEpcot(e)
}
)

magicKingdom.addEventListener("click",  (e) =>{
    resetFields(e)
    fetchMagicKingdom(e)
}
)
hollywoodStudios.addEventListener("click",  (e) =>{
    resetFields(e)
    fetchHollywoodStudios(e)
}
)
epcot.addEventListener("click", (e) =>{
    resetFields(e) 
    fetchEpcot(e)
}
)
animalKingdom.addEventListener("click",  (e) =>{
    resetFields(e) 
    fetchAnimalKingdom(e)
}
)

//functions
function resetFields(){
    openRideTable.innerHTML=" "
    closedRideTable.innerHTML=" "
}

function displayFamily(members){
    members.forEach(members => renderFamily(members))
}
function renderFamily(member){
    const memberButton = document.createElement('button')
    memberButton.classList = "button"
    memberButton.id = member.id
    memberButton.innerHTML = member.name
    peopleSelectors.appendChild(memberButton)
    
}



function cleanUpFetch(lands){
    
    let landProp = lands.lands
      for(i=0; i<landProp.length; i++){
        landProp[i].rides.forEach(ride=>checkOpen(ride))
      }  
}

function checkOpen(ride){
    //confirmed this works, keep here
    //console.log(ride.is_open)
    if(ride.is_open === true){
       renderOpenRideTable(ride)
    }
    else renderClosedRideTable(ride)
    
}

function heightElement(heightData){
    globalThis.over32=heightData[5].over32
    globalThis.over35=heightData[4].over35.concat(over32)
    globalThis.over38=heightData[3].over38.concat(over35)
    globalThis.over40=heightData[2].over40.concat(over38)
    globalThis.over44=heightData[1].over44.concat(over40)
    globalThis.over48=heightData[0].over48.concat(over44)   
    }

function renderOpenRideTable(ride){
    
    if (typeof ride != "undefined" && addOpenRides ){
        openRidetitle.textContent = "These Rides are Open"
        let row= document.createElement('tr')
        let heading1= document.createElement('th')
        heading1.innerHTML= "Ride Name"
        let heading2= document.createElement('th')
        heading2.innerHTML= "Wait time"
        row.appendChild(heading1)
        row.appendChild(heading2)
        openRideTable.appendChild(row)
        addOpenRides=false;
       
        renderOpenRides(ride)
       }
       else renderOpenRides(ride)

}
function renderOpenRides(ride){
    let row= document.createElement('tr')
    let cell1= document.createElement('td')
    cell1.innerHTML= `${ride.name}`
    let cell2= document.createElement('td')
    cell2.innerHTML= `${ride.wait_time}`
    row.appendChild(cell1)
    row.appendChild(cell2)
    openRideTable.appendChild(row)

}
function renderClosedRideTable(ride){
    if (typeof ride != "undefined" && addClosedRides ){
    closedRidetitle.textContent = "These Rides are Closed"
    let row= document.createElement('tr')
    let heading1= document.createElement('th')
    heading1.innerHTML= "Ride Name"
    let heading2= document.createElement('th')
    heading2.innerHTML= "Wait time"
    row.appendChild(heading1)
    row.appendChild(heading2)
    closedRideTable.appendChild(row)
    addClosedRides=false;
   
    renderClosedRides(ride)
   }
   else renderClosedRides(ride)
    
}
function renderClosedRides(ride){
    let row= document.createElement('tr')
    let cell1= document.createElement('td')
    cell1.innerHTML= `${ride.name}`
    let cell2= document.createElement('td')
    cell2.innerHTML= `${ride.wait_time}`
    row.appendChild(cell1)
    row.appendChild(cell2)
    closedRideTable.appendChild(row)
   
    }
    




fetchFamily()
fetchHeightInfo()
})
