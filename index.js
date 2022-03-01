document.addEventListener("DOMContentLoaded", () =>{




    //selectors and listeners
const peopleSelectors = document.querySelector('#populatePeople')
const openRidetitle = document.querySelector('#openRideTitle')
const closedRidetitle = document.querySelector('#closedRideTitle')
const favoriteRideTable = document.querySelector('#favoriteRides')
let addOpenRides = true
let addClosedRides = true
const closedRideTable=document.querySelector('#closedRides');
const openRideTable=document.querySelector('#openRides');
const allParks=document.querySelector('#allParks');
const magicKingdom=document.querySelector('#magicKingdom');
const epcot=document.querySelector('#epcot');
const hollywoodStudios=document.querySelector('#hollywoodStudios');
const animalKingdom=document.querySelector('#animalKingdom');
const favoriteRideTitle=document.querySelector('#favoriteRideTitle');
let rideArray = []
//fetch
//fetch family from db



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
    fetch("https://queue-times.com/en-US/parks/7/queue_times.json")
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
function resetFavoriteFields(){
    favoriteRideTable.innerHTML=" "
}

function displayFamily(members){
    members.forEach(members => renderFamily(members))
}
function renderFamily(member){
    const memberButton = document.createElement('button')
    memberButton.name = member.name
    memberButton.classList = "button"
    memberButton.id = member.id
    memberButton.innerHTML = member.name
    memberButton.favorites = member.favorites
    peopleSelectors.appendChild(memberButton)
    topTenCleanup(member)
    memberButton.addEventListener("click", (e)=>{
        resetFavoriteFields(e)
        const clickedUser = {
            id:e.target.id,
            name:e.target.name
        }
        if (clickedUser.id==memberButton.id){
           
            favoriteRideTitle.innerHTML=`${clickedUser.name}'s favorite rides!`
           
        }
        
       
        }
    
    
    )
    
    
}

function topTenCleanup(member){
    let favoriteList = member.favorites
    for(i=0; i<favoriteList.length; i++){
        let key=member.name
         favoriteList[i][key]=favoriteList[i].rideValue
         rideCollection(favoriteList[i])

      }  

    }

function cleanUpFetch(lands){
    let landProp = lands.lands
      for(i=0; i<landProp.length; i++){
        landProp[i].rides.forEach(ride=>{
            ride.park="Magic Kingdom",
            ride.height="under32"
            over48.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over48inches"
                    console.log(ride.name)
                }
            })
            over44.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over44inches"
                    console.log(ride)
                }
            })
            over40.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over40inches"
                    console.log(ride)
                }
            })
            over38.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over38inches"
                    console.log(ride)
                }
            })
            over35.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over35inches"
                    console.log(ride)
                }
            })
            over32.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over32inches"
                    console.log(ride)
                }
            })
            rideCollection(ride)
        })
      }  
}
async function rideCollection(ride){
    rideArray.push(ride);
    rideFilter(rideArray)
 }
async function rideFilter(arry){
    await rideCollection();
    console.log(arry)
}
 
 
    
 
    



function generateFavoriteList(favorite){
    console.log(favorite)
    let row= document.createElement('tr')
    let cell1= document.createElement('td')
    cell1.innerHTML= `${favorite.rideValue}`
    let cell2= document.createElement('td')
    cell2.innerHTML= `${favorite.name}`
    row.appendChild(cell1)
    row.appendChild(cell2)
    favoriteRideTable.appendChild(row)
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
    globalThis.over35=heightData[4].over35
    globalThis.over38=heightData[3].over38
    globalThis.over40=heightData[2].over40
    globalThis.over44=heightData[1].over44
    globalThis.over48=heightData[0].over48 
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
    fetchHeightInfo()    
    fetchFamily()
    fetchAnimalKingdom()
    fetchMagicKingdom()
    fetchHollywoodStudios()
    fetchEpcot()

    


})
