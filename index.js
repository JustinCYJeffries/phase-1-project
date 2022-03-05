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
const parkSelectors = document.querySelector('#parkSelectors')
const favoriteRideTitle=document.querySelector('#favoriteRideTitle');
const notTallTable=document.querySelector('#notTallEnough');
let rideArray = []
let favoriteArray = []
let totalRides = []
let int ={increment:0}
let clickedUser = []
const resetButton = document.querySelector("#reset")
const div = document.getElementById('dropdown')
const form= document.getElementById('newUserForm')
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
        cleanUpFetchAK(r)
        })
}
function fetchMagicKingdom(){
    fetch("https://queue-times.com/en-US/parks/6/queue_times.json",)
    .then(r => r.json())
    .then(function (r){
        cleanUpFetchMK(r)
        })
}

function fetchHollywoodStudios(){
    fetch("https://queue-times.com/en-US/parks/7/queue_times.json")
    .then(r => r.json())
    .then(function (r){
        cleanUpFetchHS(r)
        })
}
function fetchEpcot(){
    fetch("https://queue-times.com/en-US/parks/5/queue_times.json",)
    .then(r => r.json())
    .then(function (r){
        let landProp = r.lands
      for(i=0; i<landProp.length; i++){
        landProp[i].rides.forEach(ride=>{
            ride.park="Epcot",
            ride.height="under32"
            over48.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over48inches"
                    
                }
            })
            over44.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over44inches"
                    
                }
            })
            over40.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over40inches"
                   
                }
            })
            over38.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over38inches"
                   
                }
            })
            over35.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over35inches"
                  
                }
            })
            over32.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over32inches"
                   
                }
            })
           rideArray.push(ride)
           
        })

      } 
      rideCollection(rideArray)
        
        })
}
 function fetchHeightInfo() {
    fetch("http://localhost:3000/rideHeights")
    .then(r => r.json())
    .then(heightElement)
}
//event listeners
parkSelectors.addEventListener("click",(e)=> {
    let parkTitle= document.getElementById('parkName')
    let ridePark=document.querySelectorAll("[title]")    
    ridePark==Array.prototype.slice.call(ridePark)
    parkTitle.textContent=""
    ridePark.forEach(row =>{
        row.style.display="none"
        
        if(e.target.id=="all Parks"){
            parkTitle.textContent="All Parks"
        row.style.display="block" }
        else if (e.target.id==row.title){
            row.style.display="block" 
            parkTitle.textContent=row.title
            
        }
    })
   
    
    })
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.height.value)

    let newUser = {
        name:e.target.name.value,
        height:e.target.height.value
    }
    if (e.target.favorite1.value=0){
        updateNewUser(newUser)
    }
    else if(e.target.favorite2.value =0){
        newUser.favorites=[{
            name:e.target.favorite1.value,
            rideValue:1
        }]
        updateNewUser(newUser)
    }
    else if(e.target.favorite3.value =0){
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        }
    ]
        updateNewUser(newUser)
    }
    else if(e.target.favorite4.value =0){
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        },
        {
            name:e.target.favorite3.value,
            rideValue:3
        }
    ]
        updateNewUser(newUser)
    }
    else if(e.target.favorite5.value =0){
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        },
        {
            name:e.target.favorite3.value,
            rideValue:3
        },
        {
            name:e.target.favorite4.value,
            rideValue:4
        }
    ]
        updateNewUser(newUser)
    }
    else if(e.target.favorite6.value =0){
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        },
        {
            name:e.target.favorite3.value,
            rideValue:3
        },
        {
            name:e.target.favorite4.value,
            rideValue:4
        },
        {
            name:e.target.favorite5.value,
            rideValue:5
        }
    ]
        updateNewUser(newUser)
    }
    else if(e.target.favorite7.value =0){
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        },
        {
            name:e.target.favorite3.value,
            rideValue:3
        },
        {
            name:e.target.favorite4.value,
            rideValue:4
        },
        {
            name:e.target.favorite5.value,
            rideValue:5
        },
        {
            name:e.target.favorite6.value,
            rideValue:6
        }
    ]
        updateNewUser(newUser)
    }
    else if(e.target.favorite8.value =0){
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        },
        {
            name:e.target.favorite3.value,
            rideValue:3
        },
        {
            name:e.target.favorite4.value,
            rideValue:4
        },
        {
            name:e.target.favorite5.value,
            rideValue:5
        },
        {
            name:e.target.favorite6.value,
            rideValue:6
        },
        {
            name:e.target.favorite7.value,
            rideValue:7
        }
    ]
        updateNewUser(newUser)
    }
    else if(e.target.favorite9.value =0){
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        },
        {
            name:e.target.favorite3.value,
            rideValue:3
        },
        {
            name:e.target.favorite4.value,
            rideValue:4
        },
        {
            name:e.target.favorite5.value,
            rideValue:5
        },
        {
            name:e.target.favorite6.value,
            rideValue:6
        },
        {
            name:e.target.favorite7.value,
            rideValue:7
        },
        {
            name:e.target.favorite8.value,
            rideValue:8
        }
    ]
        updateNewUser(newUser)
    }
    else if(e.target.favorite10.value =0){
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        },
        {
            name:e.target.favorite3.value,
            rideValue:3
        },
        {
            name:e.target.favorite4.value,
            rideValue:4
        },
        {
            name:e.target.favorite5.value,
            rideValue:5
        },
        {
            name:e.target.favorite6.value,
            rideValue:6
        },
        {
            name:e.target.favorite7.value,
            rideValue:7
        },
        {
            name:e.target.favorite8.value,
            rideValue:8
        },
        {
            name:e.target.favorite9.value,
            rideValue:9
        }
    ]
        updateNewUser(newUser)
    }
    else {
        newUser.favorites=[
            {
            name:e.target.favorite1.value,
            rideValue:1
        },
        {
            name:e.target.favorite2.value,
            rideValue:2
        },
        {
            name:e.target.favorite3.value,
            rideValue:3
        },
        {
            name:e.target.favorite4.value,
            rideValue:4
        },
        {
            name:e.target.favorite5.value,
            rideValue:5
        },
        {
            name:e.target.favorite6.value,
            rideValue:6
        },
        {
            name:e.target.favorite7.value,
            rideValue:7
        },
        {
            name:e.target.favorite8.value,
            rideValue:8
        },
        {
            name:e.target.favorite9.value,
            rideValue:9
        },
        {
            name:e.target.favorite10.value,
            rideValue:10
        }
    ]
        updateNewUser(newUser)
    }
    function updateNewUser(newUser){
        console.log(newUser)
        return fetch('http://localhost:3000/jeffriesFamily', {
            method:"PATCH",
            
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newUser)
        })
    }
})

//functions

function heightElement(heightData){
    globalThis.over32=heightData[5].over32
    globalThis.over35=heightData[4].over35
    globalThis.over38=heightData[3].over38
    globalThis.over40=heightData[2].over40
    globalThis.over44=heightData[1].over44
    globalThis.over48=heightData[0].over48 
    }
function displayFamily(members){
    members.forEach(member => {
    let memberButton = document.createElement('button')
    memberButton.name = member.name
    memberButton.classList = "button"
    memberButton.id = member.id
    memberButton.innerHTML = member.name
    memberButton.favorites = member.favorites
    memberButton.height=member.height
    peopleSelectors.appendChild(memberButton)
    let favoriteList = member.favorites
    for(i=0; i<favoriteList.length; i++){
        let key="memberName"
         favoriteList[i][key]=member.name
         favoriteArray.push(favoriteList[i])
         
      }  
    memberButton.addEventListener("click", (e)=>{
        let favTable=document.getElementById("favoriteRides")
        let notTallTitle=document.querySelector("#notTallEnoughTitle")
        notTallTitle.textContent = ""
        let tempNoTable =[]
        tempNoTable=Array.prototype.slice.call(notTallTable.children)
        tempNoTable.forEach(row=>{
            row.style.display="none"
        })
        favTable=Array.prototype.slice.call(favTable.children)
        favTable.forEach(row=>{
            row.style.display="none"
        })
        clickedUser = {
            id:e.target.id,
            name:e.target.name
        }
        if (clickedUser.id==memberButton.id){
           let memberButton={event:e.target.name}
            favoriteRideTitle.innerHTML=`${clickedUser.name}'s favorite rides!`
          let clicked = document.getElementsByClassName(clickedUser.name)
          clicked=Array.prototype.slice.call(clicked)  
          clicked.forEach(row=>{
                row.style.display="block"
            })
        
            
        }
        if(e.target.height != "over48"){
            
            notTallTitle.textContent = "Not Tall Enough"
        }
        let heightOver48=notTallTable.getElementsByClassName("over48inches")       
        let heightOver44=notTallTable.getElementsByClassName("over44inches") 
        let heightOver40=notTallTable.getElementsByClassName("over40inches")
        let heightOver38=notTallTable.getElementsByClassName("over38inches")
        let heightOver35=notTallTable.getElementsByClassName("over35inches")
        let heightOver32=notTallTable.getElementsByClassName("over32inches")
        if(e.target.height == "over44"){
            heightOver48=Array.prototype.slice.call(heightOver48)
            heightOver48.forEach(row=>{
                row.style.display="block"
            })
        }
        if(e.target.height === "over40"){
            heightOver48=Array.prototype.slice.call(heightOver48)
            heightOver48.forEach(row=>{
                row.style.display="block"
            })
            heightOver44=Array.prototype.slice.call(heightOver44)
            heightOver44.forEach(row=>{
                row.style.display="block"
            })
        }
        if(e.target.height === "over38"){
            heightOver48=Array.prototype.slice.call(heightOver48)
            heightOver48.forEach(row=>{
                row.style.display="block"
            })
            heightOver44=Array.prototype.slice.call(heightOver44)
            heightOver44.forEach(row=>{
                row.style.display="block"
            })
            heightOver40=Array.prototype.slice.call(heightOver40)
            heightOver40.forEach(row=>{
                row.style.display="block"
            })
        }
        if(e.target.height == "over35"){
            heightOver48=Array.prototype.slice.call(heightOver48)
            heightOver48.forEach(row=>{
                row.style.display="block"
            })
            heightOver44=Array.prototype.slice.call(heightOver44)
            heightOver44.forEach(row=>{
                row.style.display="block"
            })
            heightOver40=Array.prototype.slice.call(heightOver40)
            heightOver40.forEach(row=>{
                row.style.display="block"
            })
            heightOver38=Array.prototype.slice.call(heightOver38)
            heightOver38.forEach(row=>{
                row.style.display="block"
            })
        }
        if(e.target.height == "over32"){
            heightOver48=Array.prototype.slice.call(heightOver48)
            heightOver48.forEach(row=>{
                row.style.display="block"
            })
            heightOver44=Array.prototype.slice.call(heightOver44)
            heightOver44.forEach(row=>{
                row.style.display="block"
            })
            heightOver40=Array.prototype.slice.call(heightOver40)
            heightOver40.forEach(row=>{
                row.style.display="block"
            })
            heightOver38=Array.prototype.slice.call(heightOver38)
            heightOver38.forEach(row=>{
                row.style.display="block"
            })
            heightOver35=Array.prototype.slice.call(heightOver35)
            heightOver35.forEach(row=>{
                row.style.display="block"
            })
        }
        if(e.target.height == "under32"){
            heightOver48=Array.prototype.slice.call(heightOver48)
            heightOver48.forEach(row=>{
                row.style.display="block"
            })
            heightOver44=Array.prototype.slice.call(heightOver44)
            heightOver44.forEach(row=>{
                row.style.display="block"
            })
            heightOver40=Array.prototype.slice.call(heightOver40)
            heightOver40.forEach(row=>{
                row.style.display="block"
            })
            heightOver38=Array.prototype.slice.call(heightOver38)
            heightOver38.forEach(row=>{
                row.style.display="block"
            })
            heightOver35=Array.prototype.slice.call(heightOver35)
            heightOver35.forEach(row=>{
                row.style.display="block"
            })
            heightOver32=Array.prototype.slice.call(heightOver32)
            heightOver32.forEach(row=>{
                row.style.display="block"
            })
        }
    }
        
    
    
    )
    })    
    rideCollection(favoriteArray)
}


function cleanUpFetchMK(lands){
    let landProp = lands.lands
      for(i=0; i<landProp.length; i++){
        landProp[i].rides.forEach(ride=>{
            ride.park="Magic Kingdom",
            ride.height="under32"
            over48.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over48inches"
                    
                }
            })
            over44.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over44inches"
                    
                }
            })
            over40.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over40inches"
                   
                }
            })
            over38.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over38inches"
                   
                }
            })
            over35.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over35inches"
                  
                }
            })
            over32.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over32inches"
                   
                }
            })
           rideArray.push(ride)
           
        })

      } 
      rideCollection(rideArray) 
}
function cleanUpFetchAK(lands){
    let landProp = lands.lands
      for(i=0; i<landProp.length; i++){
        landProp[i].rides.forEach(ride=>{
            ride.park="Animal Kingdom",
            ride.height="under32"
            over48.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over48inches"
                    
                }
            })
            over44.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over44inches"
                    
                }
            })
            over40.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over40inches"
                   
                }
            })
            over38.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over38inches"
                   
                }
            })
            over35.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over35inches"
                  
                }
            })
            over32.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over32inches"
                   
                }
            })
           rideArray.push(ride)
           
        })

      } 
      rideCollection(rideArray) 
}
function cleanUpFetchHS(lands){
    let landProp = lands.lands
      for(i=0; i<landProp.length; i++){
        landProp[i].rides.forEach(ride=>{
            ride.park="Hollywood Studios",
            ride.height="under32"
            over48.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over48inches"
                    
                }
            })
            over44.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over44inches"
                    
                }
            })
            over40.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over40inches"
                   
                }
            })
            over38.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over38inches"
                   
                }
            })
            over35.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over35inches"
                  
                }
            })
            over32.forEach(bigride =>{
                if(bigride==ride.name){
                    ride.height="over32inches"
                   
                }
            })
           rideArray.push(ride)
           
        })

      } 
      rideCollection(rideArray) 
}
function cleanUpFetchEP(lands){
     
}



function rideCollection(array){
    totalRides.push(array)
   collectionlogger(totalRides)
}
function collectionlogger(arr){
   int.increment = int.increment || 0
  
       if(int.increment == 4){
         arr[0].forEach(name=>{
             for(let i=0; i<arr[1].length;i++){
                 if(name.name === arr[1][i].name){ 
                    Object.assign(name, arr[1][i])
                     
                     
                     
                 }

             }

         })  
         forEachRide(arr[1])
         forEachFavorite(arr[0])
         generateDropdown(arr[1])
         resetButton.addEventListener("click", (e)=>{
            let dropdowns = document.querySelectorAll('select')
            console.log(dropdowns)
            dropdowns==Array.prototype.slice.call(dropdowns)
            dropdowns.forEach(menu=> {
                menu.innerHTML=" "
                menu.disabled=false
                menu.style={"display":"none;"}
            })
           
            generateDropdown(arr[1])
        
        })
          
        }
   return ++int.increment
    
}
 function forEachFavorite(array){
     array.forEach(ride=>{
         generateFavoriteList(ride)
        }
         )
     }
 function forEachRide(array){
    array.forEach(function(ride){
        checkOpen(ride);
        renderNotTallRides(ride);
       
        
    })
   
}
  

function generateDropdown(array){
    
    let dropdown = document.querySelector('#favorite1')
    dropdown.style={"display":"block;"}
    let indexZero=document.createElement('option')
     indexZero.text="Choose Favorite Ride" 
     indexZero.value=0
     dropdown.appendChild(indexZero)
       
    array.forEach(ride=>{
    
    let option = document.createElement('option')
        option.text=ride.name
        option.value=ride.name
        dropdown.appendChild(option)
        
    })
    let newRides = []
    dropdown.onchange=(c)=>{
        array.forEach(ride=>{ 
        if(c.target.value !=ride.name){
         newRides.push(ride)
        }})
        
        generateNextDropdown(newRides)
        dropdown.disabled=true
    }
    
    }
  
  function generateNextDropdown(array){
    let dropdown = document.querySelector('#favorite2')
    dropdown.style={"display":"block;"}
     let indexZero=document.createElement('option')
     
     indexZero.text="Choose 2nd Favorite Ride" 
     indexZero.value=0
     
    
     dropdown.appendChild(indexZero)
       
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
      
   })
   let newRides = []
   dropdown.onchange=(c)=>{
       array.forEach(ride=>{ 
       if(c.target.value !=ride.name){
        newRides.push(ride)
       }})
       generateThirdDropdown(newRides)
       dropdown.disabled=true
    }
   
   }
   function generateThirdDropdown(array){
    let dropdown = document.querySelector('#favorite3')
    dropdown.style={"display":"block;"} 
    let indexZero=document.createElement('option')
    
    indexZero.text="Choose 3rd Favorite Ride" 
    indexZero.value=0
   
   
    dropdown.appendChild(indexZero)
      
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
       
   })
   let newRides = []
   dropdown.onchange=(c)=>{
       array.forEach(ride=>{ 
       if(c.target.value !=ride.name){
        newRides.push(ride)
       }})
       generateFourthDropdown(newRides)
       dropdown.disabled=true
    }
  
   }
   function generateFourthDropdown(array){
    let dropdown = document.querySelector('#favorite4')
    dropdown.style={"display":"block;"}
    let indexZero=document.createElement('option')
    
    indexZero.text="Choose 4th Favorite Ride" 
    indexZero.value=0
   
    dropdown.appendChild(indexZero)
      
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
       
   })
   let newRides = []
   dropdown.onchange=(c)=>{
       array.forEach(ride=>{ 
       if(c.target.value !=ride.name){
        newRides.push(ride)
       }})
       generateFifthDropdown(newRides)
       dropdown.disabled=true
    }
 
   }
   function generateFifthDropdown(array){
    let dropdown = document.querySelector('#favorite5')
    dropdown.style={"display":"block;"}
    let indexZero=document.createElement('option')
    indexZero.value=0
    indexZero.text="Choose 5th Favorite Ride" 
    
    dropdown.appendChild(indexZero)
       
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
      
   })
   let newRides = []
   dropdown.onchange=(c)=>{
       array.forEach(ride=>{ 
       if(c.target.value !=ride.name){
        newRides.push(ride)
       }})
       generateSixthDropdown(newRides)
       dropdown.disabled=true
    }
  
   }
   function generateSixthDropdown(array){
    let dropdown = document.querySelector('#favorite6')
    dropdown.style={"display":"block;"}
    let indexZero=document.createElement('option')
    indexZero.value=0
    indexZero.text="Choose 6th Favorite Ride" 
    
    dropdown.appendChild(indexZero)
     
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
      
   })
   let newRides = []
   dropdown.onchange=(c)=>{
       array.forEach(ride=>{ 
       if(c.target.value !=ride.name){
        newRides.push(ride)
       }})
       generateSeventhDropdown(newRides)
       dropdown.disabled=true
    }
  
   }
   function generateSeventhDropdown(array){
   
     let indexZero=document.createElement('option')
     indexZero.value=0
     indexZero.text="Choose 7th Favorite Ride" 
     let dropdown = document.querySelector('#favorite7')
     dropdown.style={"display":"block;"}
     dropdown.appendChild(indexZero)
       
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
      
   })
   let newRides = []
   dropdown.onchange=(c)=>{
       array.forEach(ride=>{ 
       if(c.target.value !=ride.name){
        newRides.push(ride)
       }})
       generateEighthDropdown(newRides)
       dropdown.disabled=true
    }
  
   }
   function generateEighthDropdown(array){
 
     let indexZero=document.createElement('option')
     indexZero.value=0
     indexZero.text="Choose 8th Favorite Ride" 
     let dropdown = document.querySelector('#favorite8')
     dropdown.style={"display":"block;"}
     dropdown.appendChild(indexZero)
      
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
      
   })
   let newRides = []
   dropdown.onchange=(c)=>{
       array.forEach(ride=>{ 
       if(c.target.value !=ride.name){
        newRides.push(ride)
       }})
       generateNinthDropdown(newRides) 
       dropdown.disabled=true
    }
  
   }
   function generateNinthDropdown(array){
   
    let indexZero=document.createElement('option')
    indexZero.value=0
    indexZero.text="Choose 9th Favorite Ride" 
    let dropdown = document.querySelector('#favorite9')
    dropdown.style={"display":"block;"}
    dropdown.appendChild(indexZero)
      
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
     
   })
   let newRides = []
   dropdown.onchange=(c)=>{
       array.forEach(ride=>{ 
       if(c.target.value !=ride.name){
        newRides.push(ride)
       }})
       
       generateTenthDropdown(newRides)
       dropdown.disabled=true
    }
  
   }
   function generateTenthDropdown(array){
   
     let indexZero=document.createElement('option')
     indexZero.value=0
     indexZero.text="Choose 10th Favorite Ride" 
     let dropdown = document.querySelector('#favorite10')
     dropdown.style={"display":"block;"}
     dropdown.appendChild(indexZero)
      
   array.forEach(ride=>{
   
   let option = document.createElement('option')
       option.text=ride.name
       option.value=ride.name
       dropdown.appendChild(option)
      
   })
   
   }
  
function generateFavoriteList(favorite){
    
    let row= document.createElement('tr')
    row.classList.add(favorite.memberName)
    row.style.display="none"
    let cell1= document.createElement('td')
    cell1.innerHTML= `${favorite.rideValue}`
    let cell2= document.createElement('td')
    cell2.innerHTML= `${favorite.name}`
    let cell3= document.createElement('td')
    cell3.innerHTML= `${favorite.wait_time}`
    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
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
    row.title=ride.park
    row.style.display="none"
    let cell1= document.createElement('td')
    cell1.innerHTML= `${ride.name}`
    let cell2= document.createElement('td')
    cell2.innerHTML= `${ride.wait_time}`
    row.appendChild(cell1)
    row.appendChild(cell2)
    openRideTable.appendChild(row)

}
function renderNotTallRides(ride){
    let row= document.createElement('tr')
    row.classList.add(ride.height)
    row.style.display="none"
    let cell1= document.createElement('td')
    cell1.innerHTML= `${ride.name}`
    row.appendChild(cell1)
    notTallTable.appendChild(row)
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
    row.title =ride.park
    row.style.display="none"
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
