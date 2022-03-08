document.addEventListener("DOMContentLoaded", () => {




    //selectors and listeners
    const peopleSelectors = document.querySelector('#populatePeople')
    const openRidetitle = document.querySelector('#openRideTitle')
    const closedRidetitle = document.querySelector('#closedRideTitle')
    const favoriteRideTable = document.querySelector('#favoriteRides')
    let addOpenRides = true
    let addClosedRides = true
    const closedRideTable = document.querySelector('#closedRides');
    const openRideTable = document.querySelector('#openRides');
    const parkSelectors = document.querySelector('#parkSelectors')
    const favoriteRideTitle = document.querySelector('#favoriteRideTitle');
    const notTallTable = document.querySelector('#notTallEnough');
    let rideArray = []
    let favoriteArray = []
    let totalRides = []
    let int = { increment: 0 }
    let clickedUser = []
    const resetButton = document.querySelector("#reset")
    const form = document.getElementById('newUserForm')
    const parkTitle = document.getElementById('parkName')
    const notTallTitle = document.querySelector("#notTallEnoughTitle")
    const nameField = document.getElementById('name')
    //fetch

        //event listeners
        parkSelectors.addEventListener("click", (e) => {

            let ridePark = document.querySelectorAll("[title]")
            closedRideTable.classList.remove("hide")
            closedRidetitle.classList.remove("hide")
            openRideTable.classList.remove("hide")
            openRidetitle.classList.remove("hide")
            ridePark == Array.prototype.slice.call(ridePark)
            parkTitle.textContent = ""
            ridePark.forEach(row => {
                row.style.display = "none"
                if (row.title === "No special characters or spaces") {
                    row.style.display = "block"
                    row.style = "{text_align:center;}"
                }
    
    
                else if (e.target.id == "all Parks") {
                    parkTitle.textContent = "All Parks"
                    row.style.display = "block"
                }
                else if (e.target.id == row.title) {
                    row.style.display = "block"
                    parkTitle.textContent = row.title
    
                }
            })
    
    
        })
        
        form.addEventListener("submit", (e) => {
            e.preventDefault()
    
    
            let newUser = {
                name: e.target.name.value,
                height: e.target.height.value
            }
            if (parseInt(validator(newUser)) != 0) {
                return alert('Names Must Be Unique')
            }
    
    
            else if (parseInt(e.target.favorite1.value) === 0) {
                updateNewUser(newUser)
            }
            else if (parseInt(e.target.favorite2.value) === 0) {
                newUser.favorites = [{
                    name: e.target.favorite1.value,
                    rideValue: 1
                }]
                updateNewUser(newUser)
            }
            else if (parseInt(e.target.favorite3.value) === 0) {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    }
                ]
                updateNewUser(newUser)
            }
            else if (parseInt(e.target.favorite4.value) === 0) {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    },
                    {
                        name: e.target.favorite3.value,
                        rideValue: 3
                    }
                ]
                updateNewUser(newUser)
            }
            else if (parseInt(e.target.favorite5.value) === 0) {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    },
                    {
                        name: e.target.favorite3.value,
                        rideValue: 3
                    },
                    {
                        name: e.target.favorite4.value,
                        rideValue: 4
                    }
                ]
                updateNewUser(newUser)
            }
            else if (parseInt(e.target.favorite6.value) === 0) {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    },
                    {
                        name: e.target.favorite3.value,
                        rideValue: 3
                    },
                    {
                        name: e.target.favorite4.value,
                        rideValue: 4
                    },
                    {
                        name: e.target.favorite5.value,
                        rideValue: 5
                    }
                ]
                updateNewUser(newUser)
            }
            else if (parseInt(e.target.favorite7.value) === 0) {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    },
                    {
                        name: e.target.favorite3.value,
                        rideValue: 3
                    },
                    {
                        name: e.target.favorite4.value,
                        rideValue: 4
                    },
                    {
                        name: e.target.favorite5.value,
                        rideValue: 5
                    },
                    {
                        name: e.target.favorite6.value,
                        rideValue: 6
                    }
                ]
                updateNewUser(newUser)
            }
            else if (ParseInt(e.target.favorite8.value) === 0) {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    },
                    {
                        name: e.target.favorite3.value,
                        rideValue: 3
                    },
                    {
                        name: e.target.favorite4.value,
                        rideValue: 4
                    },
                    {
                        name: e.target.favorite5.value,
                        rideValue: 5
                    },
                    {
                        name: e.target.favorite6.value,
                        rideValue: 6
                    },
                    {
                        name: e.target.favorite7.value,
                        rideValue: 7
                    }
                ]
                updateNewUser(newUser)
            }
            else if (parseInt(e.target.favorite9.value) === 0) {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    },
                    {
                        name: e.target.favorite3.value,
                        rideValue: 3
                    },
                    {
                        name: e.target.favorite4.value,
                        rideValue: 4
                    },
                    {
                        name: e.target.favorite5.value,
                        rideValue: 5
                    },
                    {
                        name: e.target.favorite6.value,
                        rideValue: 6
                    },
                    {
                        name: e.target.favorite7.value,
                        rideValue: 7
                    },
                    {
                        name: e.target.favorite8.value,
                        rideValue: 8
                    }
                ]
                updateNewUser(newUser)
            }
            else if (parseInt(e.target.favorite10.value) === 0) {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    },
                    {
                        name: e.target.favorite3.value,
                        rideValue: 3
                    },
                    {
                        name: e.target.favorite4.value,
                        rideValue: 4
                    },
                    {
                        name: e.target.favorite5.value,
                        rideValue: 5
                    },
                    {
                        name: e.target.favorite6.value,
                        rideValue: 6
                    },
                    {
                        name: e.target.favorite7.value,
                        rideValue: 7
                    },
                    {
                        name: e.target.favorite8.value,
                        rideValue: 8
                    },
                    {
                        name: e.target.favorite9.value,
                        rideValue: 9
                    }
                ]
                updateNewUser(newUser)
            }
            else {
                newUser.favorites = [
                    {
                        name: e.target.favorite1.value,
                        rideValue: 1
                    },
                    {
                        name: e.target.favorite2.value,
                        rideValue: 2
                    },
                    {
                        name: e.target.favorite3.value,
                        rideValue: 3
                    },
                    {
                        name: e.target.favorite4.value,
                        rideValue: 4
                    },
                    {
                        name: e.target.favorite5.value,
                        rideValue: 5
                    },
                    {
                        name: e.target.favorite6.value,
                        rideValue: 6
                    },
                    {
                        name: e.target.favorite7.value,
                        rideValue: 7
                    },
                    {
                        name: e.target.favorite8.value,
                        rideValue: 8
                    },
                    {
                        name: e.target.favorite9.value,
                        rideValue: 9
                    },
                    {
                        name: e.target.favorite10.value,
                        rideValue: 10
                    }
                ]
                updateNewUser(newUser)
            }
            function updateNewUser(newUser) {
                console.log(newUser)
                return fetch('http://localhost:3000/jeffriesFamily', {
                    method: "POST",
    
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newUser)
                }).then(r => r.json())
                    .then(r => {
                        resetTables()
                        addButton(r)
    
                    })
            }
        })
        resetButton.addEventListener("click", (e) => {
            resetDropdowns()
            generateDropdown(rideData)
    
        })


    function resetTables() {
        closedRideTable.innerHTML = " "
        openRideTable.innerHTML = " "
        favoriteRideTable.innerHTML = " "
        notTallTable.innerHTML = " "
        favoriteRideTitle.innerHTML = ""
        parkTitle.innerHTML = ""
        notTallTitle.innerHTML = ""
        resetDropdowns()
        nameField.value = ""
        document.querySelector('input[name="height"]:checked').checked = false
    }


    function fetchFamily() {
        fetch("http://localhost:3000/jeffriesFamily")
            .then(r => r.json())
            .then(displayFamily)
    }
    function fetchHeightInfo() {
        fetch("http://localhost:3000/rideHeights")
            .then(r => r.json())
            .then(heightElement)
    }
    function fetchAnimalKingdom() {
        fetch("https://queue-times.com/en-US/parks/8/queue_times.json",)
            .then(r => r.json())
            .then(function (r) {
                cleanUpFetch(r, "Animal Kingdom")
            })
    }
    function fetchMagicKingdom() {
        fetch("https://queue-times.com/en-US/parks/6/queue_times.json",)
            .then(r => r.json())
            .then((r) => {
                cleanUpFetch(r, "Magic Kingdom")
            })
    }

    function fetchHollywoodStudios() {
        fetch("https://queue-times.com/en-US/parks/7/queue_times.json")
            .then(r => r.json())
            .then((r) => {
                cleanUpFetch(r, "Hollywood Studios")
            })
    }
    function fetchEpcot() {
        fetch("https://queue-times.com/en-US/parks/5/queue_times.json",)
            .then(r => r.json())
            .then((r) => {
                cleanUpFetch(r, "Epcot")
                document.querySelector("#loader").classList.add('hide')
                form.classList.remove('hide')

            })
            .catch((error) => {
                alert("Read the readme to resolve", error)
            })
    }



    //functions
    //Collects Height Data
    function heightElement(heightData) {
        globalThis.over32 = heightData[5].over32
        globalThis.over35 = heightData[4].over35
        globalThis.over38 = heightData[3].over38
        globalThis.over40 = heightData[2].over40
        globalThis.over44 = heightData[1].over44
        globalThis.over48 = heightData[0].over48
    }
    function addButton(member) {
        let memberButton = document.createElement('button')
        memberButton.name = member.name
        memberButton.classList = "button"
        memberButton.id = member.id
        memberButton.innerHTML = member.name
        memberButton.favorites = member.favorites
        memberButton.height = member.height
        peopleSelectors.appendChild(memberButton)
        let favoriteList = member.favorites
        favoriteList.forEach(name => {
            name.memberName = member.name
            favoriteData.push(name)
        })
        favoriteData.forEach(name => {
            for (let i = 0; i < rideData.length; i++) {
                if (name.name === rideData[i].name) {
                    Object.assign(name, rideData[i])



                }

            }

        })
        forEachRide(rideData)
        forEachFavorite(favoriteData)
        console.log(favoriteData)
        generateDropdown(rideData)
        memberButton.addEventListener("click", (e) => {
            let favTable = document.getElementById("favoriteRides")
            let notTallTitle = document.querySelector("#notTallEnoughTitle")
            notTallTitle.textContent = ""
            let tempNoTable = []
            tempNoTable = Array.prototype.slice.call(notTallTable.children)
            tempNoTable.forEach(row => {
                row.style.display = "none"
            })
            favTable = Array.prototype.slice.call(favTable.children)
            favTable.forEach(row => {
                row.style.display = "none"
            })
            clickedUser = {
                id: e.target.id,
                name: e.target.name
            }
            if (clickedUser.id == memberButton.id) {

                favoriteRideTitle.innerHTML = `${clickedUser.name}'s favorite rides!`
                let clicked = document.getElementsByClassName(clickedUser.name)
                clicked = Array.prototype.slice.call(clicked)
                clicked.forEach(row => {
                    row.style.display = "block"
                })


            }
            if (e.target.height != "over48") {

                notTallTitle.textContent = "Not Tall Enough"
            }
            let heightOver48 = notTallTable.getElementsByClassName("over48inches")
            let heightOver44 = notTallTable.getElementsByClassName("over44inches")
            let heightOver40 = notTallTable.getElementsByClassName("over40inches")
            let heightOver38 = notTallTable.getElementsByClassName("over38inches")
            let heightOver35 = notTallTable.getElementsByClassName("over35inches")
            let heightOver32 = notTallTable.getElementsByClassName("over32inches")
            if (e.target.height == "over44") {
                heightOver48 = Array.prototype.slice.call(heightOver48)
                heightOver48.forEach(row => {
                    row.style.display = "block"
                })
            }
            if (e.target.height === "over40") {
                heightOver48 = Array.prototype.slice.call(heightOver48)
                heightOver48.forEach(row => {
                    row.style.display = "block"
                })
                heightOver44 = Array.prototype.slice.call(heightOver44)
                heightOver44.forEach(row => {
                    row.style.display = "block"
                })
            }
            if (e.target.height === "over38") {
                heightOver48 = Array.prototype.slice.call(heightOver48)
                heightOver48.forEach(row => {
                    row.style.display = "block"
                })
                heightOver44 = Array.prototype.slice.call(heightOver44)
                heightOver44.forEach(row => {
                    row.style.display = "block"
                })
                heightOver40 = Array.prototype.slice.call(heightOver40)
                heightOver40.forEach(row => {
                    row.style.display = "block"
                })
            }
            if (e.target.height == "over35") {
                heightOver48 = Array.prototype.slice.call(heightOver48)
                heightOver48.forEach(row => {
                    row.style.display = "block"
                })
                heightOver44 = Array.prototype.slice.call(heightOver44)
                heightOver44.forEach(row => {
                    row.style.display = "block"
                })
                heightOver40 = Array.prototype.slice.call(heightOver40)
                heightOver40.forEach(row => {
                    row.style.display = "block"
                })
                heightOver38 = Array.prototype.slice.call(heightOver38)
                heightOver38.forEach(row => {
                    row.style.display = "block"
                })
            }
            if (e.target.height == "over32") {
                heightOver48 = Array.prototype.slice.call(heightOver48)
                heightOver48.forEach(row => {
                    row.style.display = "block"
                })
                heightOver44 = Array.prototype.slice.call(heightOver44)
                heightOver44.forEach(row => {
                    row.style.display = "block"
                })
                heightOver40 = Array.prototype.slice.call(heightOver40)
                heightOver40.forEach(row => {
                    row.style.display = "block"
                })
                heightOver38 = Array.prototype.slice.call(heightOver38)
                heightOver38.forEach(row => {
                    row.style.display = "block"
                })
                heightOver35 = Array.prototype.slice.call(heightOver35)
                heightOver35.forEach(row => {
                    row.style.display = "block"
                })
            }
            if (e.target.height == "under32") {
                heightOver48 = Array.prototype.slice.call(heightOver48)
                heightOver48.forEach(row => {
                    row.style.display = "block"
                })
                heightOver44 = Array.prototype.slice.call(heightOver44)
                heightOver44.forEach(row => {
                    row.style.display = "block"
                })
                heightOver40 = Array.prototype.slice.call(heightOver40)
                heightOver40.forEach(row => {
                    row.style.display = "block"
                })
                heightOver38 = Array.prototype.slice.call(heightOver38)
                heightOver38.forEach(row => {
                    row.style.display = "block"
                })
                heightOver35 = Array.prototype.slice.call(heightOver35)
                heightOver35.forEach(row => {
                    row.style.display = "block"
                })
                heightOver32 = Array.prototype.slice.call(heightOver32)
                heightOver32.forEach(row => {
                    row.style.display = "block"
                })
            }
        }



        )
    }
    //Displays Family buttons
    function displayFamily(members) {

        members.forEach(member => {
            let memberButton = document.createElement('button')
            memberButton.name = member.name
            memberButton.classList = "button"
            memberButton.id = member.id
            memberButton.innerHTML = member.name
            memberButton.favorites = member.favorites
            memberButton.height = member.height
            peopleSelectors.appendChild(memberButton)
            let favoriteList = member.favorites
            for (i = 0; i < favoriteList.length; i++) {
                let key = "memberName"
                favoriteList[i][key] = member.name
                favoriteArray.push(favoriteList[i])

            }
            memberButton.addEventListener("click", (e) => {
                let favTable = document.getElementById("favoriteRides")

                notTallTitle.textContent = ""
                let tempNoTable = []
                tempNoTable = Array.prototype.slice.call(notTallTable.children)
                tempNoTable.forEach(row => {
                    row.style.display = "none"
                })
                favTable = Array.prototype.slice.call(favTable.children)
                favTable.forEach(row => {
                    row.style.display = "none"
                })
                clickedUser = {
                    id: e.target.id,
                    name: e.target.name
                }
                if (clickedUser.id == memberButton.id) {

                    favoriteRideTitle.innerHTML = `${clickedUser.name}'s favorite rides!`
                    let clicked = document.getElementsByClassName(clickedUser.name)
                    clicked = Array.prototype.slice.call(clicked)
                    clicked.forEach(row => {
                        row.style.display = "block"
                    })


                }
                if (e.target.height != "over48") {

                    notTallTitle.textContent = "Not Tall Enough"
                }
                let heightOver48 = notTallTable.getElementsByClassName("over48inches")
                let heightOver44 = notTallTable.getElementsByClassName("over44inches")
                let heightOver40 = notTallTable.getElementsByClassName("over40inches")
                let heightOver38 = notTallTable.getElementsByClassName("over38inches")
                let heightOver35 = notTallTable.getElementsByClassName("over35inches")
                let heightOver32 = notTallTable.getElementsByClassName("over32inches")
                if (e.target.height == "over44") {
                    heightOver48 = Array.prototype.slice.call(heightOver48)
                    heightOver48.forEach(row => {
                        row.style.display = "block"
                    })
                }
                if (e.target.height === "over40") {
                    heightOver48 = Array.prototype.slice.call(heightOver48)
                    heightOver48.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver44 = Array.prototype.slice.call(heightOver44)
                    heightOver44.forEach(row => {
                        row.style.display = "block"
                    })
                }
                if (e.target.height === "over38") {
                    heightOver48 = Array.prototype.slice.call(heightOver48)
                    heightOver48.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver44 = Array.prototype.slice.call(heightOver44)
                    heightOver44.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver40 = Array.prototype.slice.call(heightOver40)
                    heightOver40.forEach(row => {
                        row.style.display = "block"
                    })
                }
                if (e.target.height == "over35") {
                    heightOver48 = Array.prototype.slice.call(heightOver48)
                    heightOver48.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver44 = Array.prototype.slice.call(heightOver44)
                    heightOver44.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver40 = Array.prototype.slice.call(heightOver40)
                    heightOver40.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver38 = Array.prototype.slice.call(heightOver38)
                    heightOver38.forEach(row => {
                        row.style.display = "block"
                    })
                }
                if (e.target.height == "over32") {
                    heightOver48 = Array.prototype.slice.call(heightOver48)
                    heightOver48.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver44 = Array.prototype.slice.call(heightOver44)
                    heightOver44.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver40 = Array.prototype.slice.call(heightOver40)
                    heightOver40.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver38 = Array.prototype.slice.call(heightOver38)
                    heightOver38.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver35 = Array.prototype.slice.call(heightOver35)
                    heightOver35.forEach(row => {
                        row.style.display = "block"
                    })
                }
                if (e.target.height == "under32") {
                    heightOver48 = Array.prototype.slice.call(heightOver48)
                    heightOver48.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver44 = Array.prototype.slice.call(heightOver44)
                    heightOver44.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver40 = Array.prototype.slice.call(heightOver40)
                    heightOver40.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver38 = Array.prototype.slice.call(heightOver38)
                    heightOver38.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver35 = Array.prototype.slice.call(heightOver35)
                    heightOver35.forEach(row => {
                        row.style.display = "block"
                    })
                    heightOver32 = Array.prototype.slice.call(heightOver32)
                    heightOver32.forEach(row => {
                        row.style.display = "block"
                    })
                }
            }



            )
        })
        rideCollection(favoriteArray)
    }

    //formats the Fetch and spplies height and park elements
    function cleanUpFetch(lands, land) {
        let landProp = lands.lands
        for (i = 0; i < landProp.length; i++) {
            landProp[i].rides.forEach(ride => {
                ride.park = land,
                    ride.height = "under32"
                over48.forEach(bigride => {
                    if (bigride == ride.name) {
                        ride.height = "over48inches"

                    }
                })
                over44.forEach(bigride => {
                    if (bigride == ride.name) {
                        ride.height = "over44inches"

                    }
                })
                over40.forEach(bigride => {
                    if (bigride == ride.name) {
                        ride.height = "over40inches"

                    }
                })
                over38.forEach(bigride => {
                    if (bigride == ride.name) {
                        ride.height = "over38inches"

                    }
                })
                over35.forEach(bigride => {
                    if (bigride == ride.name) {
                        ride.height = "over35inches"

                    }
                })
                over32.forEach(bigride => {
                    if (bigride == ride.name) {
                        ride.height = "over32inches"

                    }
                })
                rideArray.push(ride)

            })

        }
        rideCollection(rideArray)
    }

    function validator(newUser) {
        let j = 0
        members = Array.prototype.slice.call(peopleSelectors.children)
        for (let i = 0; i < members.length; i++) {

            if (members[i].name == newUser.name) {

                j++

            }
            else j
        }
        return j
    }

    //collects the cleaned up fetches and pushes them into an array
    function rideCollection(array) {
        totalRides.push(array)
        collectionlogger(totalRides)
    }

    // takes the array from the ride collection and runs 
    // on the 4th run once all of the fetches complete it shares data between the fetches
    //this allows ride times to appear on the favorites list
    function collectionlogger(arr) {
        int.increment = int.increment || 0

        if (int.increment == 4) {
            favoriteData = arr[0]
            rideData = arr[1]
            arr[0].forEach(name => {
                for (let i = 0; i < arr[1].length; i++) {
                    if (name.name === arr[1][i].name) {
                        Object.assign(name, arr[1][i])



                    }

                }

            })
            forEachRide(arr[1])
            forEachFavorite(arr[0])
            generateDropdown(rideData)


        }
        return ++int.increment

    }
    function resetDropdowns() {
        let dropdowns = document.querySelectorAll('select')
        console.log(dropdowns)
        dropdowns == Array.prototype.slice.call(dropdowns)
        dropdowns.forEach(menu => {
            menu.innerHTML = " "
            menu.disabled = false
            menu.classList.add("hide")
        })

    }
    //takes array from the collection logger and breaks them down to 
    //each favorite ride or each ride
    function forEachFavorite(array) {
        array.forEach(ride => {
            generateFavoriteList(ride)
        }
        )
    }
    function forEachRide(array) {
        array.forEach(function (ride) {
            checkOpen(ride);
            renderNotTallRides(ride);


        })

    }

    //these functions generate the dropdowns on the submit form
    function generateDropdown(array) {

        let dropdown = document.querySelector('#favorite1')
        dropdown.classList.remove("hide")
        let indexZero = document.createElement('option')
        indexZero.text = "Choose Favorite Ride"
        indexZero.value = 0
        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })

            generateNextDropdown(newRides)
            dropdown.disabled = true
        }

    }

    function generateNextDropdown(array) {
        let dropdown = document.querySelector('#favorite2')
        dropdown.classList.remove("hide")
        let indexZero = document.createElement('option')

        indexZero.text = "Choose 2nd Favorite Ride"
        indexZero.value = 0


        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })
            generateThirdDropdown(newRides)
            dropdown.disabled = true
        }

    }
    function generateThirdDropdown(array) {
        let dropdown = document.querySelector('#favorite3')
        dropdown.classList.remove("hide")
        let indexZero = document.createElement('option')

        indexZero.text = "Choose 3rd Favorite Ride"
        indexZero.value = 0


        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })
            generateFourthDropdown(newRides)
            dropdown.disabled = true
        }

    }
    function generateFourthDropdown(array) {
        let dropdown = document.querySelector('#favorite4')
        dropdown.classList.remove("hide")
        let indexZero = document.createElement('option')

        indexZero.text = "Choose 4th Favorite Ride"
        indexZero.value = 0

        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })
            generateFifthDropdown(newRides)
            dropdown.disabled = true
        }

    }
    function generateFifthDropdown(array) {
        let dropdown = document.querySelector('#favorite5')
        dropdown.classList.remove("hide")
        let indexZero = document.createElement('option')
        indexZero.value = 0
        indexZero.text = "Choose 5th Favorite Ride"

        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })
            generateSixthDropdown(newRides)
            dropdown.disabled = true
        }

    }
    function generateSixthDropdown(array) {
        let dropdown = document.querySelector('#favorite6')
        dropdown.classList.remove("hide")
        let indexZero = document.createElement('option')
        indexZero.value = 0
        indexZero.text = "Choose 6th Favorite Ride"

        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })
            generateSeventhDropdown(newRides)
            dropdown.disabled = true
        }

    }
    function generateSeventhDropdown(array) {

        let indexZero = document.createElement('option')
        indexZero.value = 0
        indexZero.text = "Choose 7th Favorite Ride"
        let dropdown = document.querySelector('#favorite7')
        dropdown.classList.remove("hide")
        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })
            generateEighthDropdown(newRides)
            dropdown.disabled = true
        }

    }
    function generateEighthDropdown(array) {

        let indexZero = document.createElement('option')
        indexZero.value = 0
        indexZero.text = "Choose 8th Favorite Ride"
        let dropdown = document.querySelector('#favorite8')
        dropdown.classList.remove("hide")
        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })
            generateNinthDropdown(newRides)
            dropdown.disabled = true
        }

    }
    function generateNinthDropdown(array) {

        let indexZero = document.createElement('option')
        indexZero.value = 0
        indexZero.text = "Choose 9th Favorite Ride"
        let dropdown = document.querySelector('#favorite9')
        dropdown.classList.remove("hide")
        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })
        let newRides = []
        dropdown.onchange = (c) => {
            array.forEach(ride => {
                if (c.target.value != ride.name) {
                    newRides.push(ride)
                }
            })

            generateTenthDropdown(newRides)
            dropdown.disabled = true
        }

    }
    function generateTenthDropdown(array) {

        let indexZero = document.createElement('option')
        indexZero.value = 0
        indexZero.text = "Choose 10th Favorite Ride"
        let dropdown = document.querySelector('#favorite10')
        dropdown.classList.remove("hide")
        dropdown.appendChild(indexZero)

        array.forEach(ride => {

            let option = document.createElement('option')
            option.text = ride.name
            option.value = ride.name
            dropdown.appendChild(option)

        })

    }
    //this function puts the favorite list on the DOM with the wait time 
    function generateFavoriteList(favorite) {
        console.log(favorite)
        let row = document.createElement('tr')
        row.classList.add(favorite.memberName)

        row.style.display = "none"
        let cell1 = document.createElement('td')
        cell1.innerHTML = `${favorite.rideValue}`
        cell1.classList.add('tableBorder')
        let cell2 = document.createElement('td')
        cell2.innerHTML = `${favorite.name}`
        cell2.classList.add('names')
        let cell3 = document.createElement('td')
        cell3.innerHTML = `${favorite.wait_time}`
        cell3.classList.add('times')
        row.appendChild(cell1)
        row.appendChild(cell2)
        row.appendChild(cell3)
        favoriteRideTable.appendChild(row)
        console.log(favorite.is_open)

        if (parseInt(`${favorite.wait_time}`) > 75) {
            cell2.classList.add('highTime')
            cell1.classList.add('highTime')
            cell3.classList.add('highTime')
        }
        else if (parseInt(`${favorite.wait_time}`) > 45) {
            cell2.classList.add('mediumTime')
            cell1.classList.add('mediumTime')
            cell3.classList.add('mediumTime')
        }
        else if (favorite.is_open != true) {
            cell2.classList.add('closedRide')
            cell1.classList.add('closedRide')
            cell3.classList.add('closedRide')
        }
    }
    //fed from for each ride, checks if the ride is open
    function checkOpen(ride) {



        //confirmed this works, keep here
        //console.log(ride.is_open)
        if (ride.is_open === true) {
            renderOpenRideTable(ride)
        }
        else renderClosedRideTable(ride)

    }


    //fed from check open renders open rides on the DOM
    function renderOpenRideTable(ride) {

        if (typeof ride != "undefined" && addOpenRides) {
            openRideTable.classList.add("hide")
            openRidetitle.classList.add("hide")
            openRidetitle.textContent = "These Rides are Open"
            let row = document.createElement('tr')
            row.style.display = 'block'
            let heading1 = document.createElement('td')
            heading1.innerHTML = "<strong>Ride Name</strong>"
            heading1.classList.add('openHeader')
            let heading2 = document.createElement('td')
            heading2.innerHTML = "<strong>Wait time</strong>"
            heading2.classList.add('timeHeader')
            row.appendChild(heading1)
            row.appendChild(heading2)
            openRideTable.appendChild(row)
            addOpenRides = false;

            renderOpenRides(ride)
        }
        else renderOpenRides(ride)

    }
    function renderOpenRides(ride) {

        let row = document.createElement('tr')
        row.title = ride.park
        row.style.display = "none"
        let cell1 = document.createElement('td')
        cell1.innerHTML = `${ride.name}`
        cell1.classList.add('names')
        let cell2 = document.createElement('td')
        cell2.classList.add('times')
        cell2.innerHTML = `${ride.wait_time}`
        if (parseInt(`${ride.wait_time}`) > 75) {
            cell2.classList.add('highTime')
            cell1.classList.add('highTime')
        }
        else if (parseInt(`${ride.wait_time}`) > 45) {
            cell2.classList.add('mediumTime')
            cell1.classList.add('mediumTime')
        }
        row.appendChild(cell1)
        row.appendChild(cell2)
        openRideTable.appendChild(row)

    }
    //this actually renders all rides on the dom, but not visible, depending on the user's height
    //some rides then become visible
    function renderNotTallRides(ride) {
        let row = document.createElement('tr')
        row.classList.add(ride.height)
        row.style.display = "none"
        let cell1 = document.createElement('td')
        cell1.classList.add('names')
        cell1.innerHTML = `${ride.name}`
        row.appendChild(cell1)
        notTallTable.appendChild(row)
    }


    //this renders rides that are closed, fed from check open
    function renderClosedRideTable(ride) {
        closedRideTable.classList.add("hide")
        closedRidetitle.classList.add("hide")
        if (typeof ride != "undefined" && addClosedRides) {
            closedRidetitle.textContent = "These Rides are Closed"
            let row = document.createElement('tr')
            let heading1 = document.createElement('th')
            heading1.innerHTML = "Ride Name"
            row.appendChild(heading1)
            closedRideTable.appendChild(row)
            addClosedRides = false;

            renderClosedRides(ride)
        }
        else renderClosedRides(ride)

    }
    function renderClosedRides(ride) {

        let row = document.createElement('tr')
        row.title = ride.park
        row.style.display = "none"
        let cell1 = document.createElement('td')
        cell1.innerHTML = `${ride.name}`
        cell1.classList.add('names')
        row.appendChild(cell1)
        cell1.classList.add('closedRide')
        closedRideTable.appendChild(row)

    }


    fetchHeightInfo()
    fetchFamily()
    fetchAnimalKingdom()
    fetchMagicKingdom()
    fetchHollywoodStudios()
    fetchEpcot()




})


