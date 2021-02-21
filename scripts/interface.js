document.addEventListener('DOMContentLoaded', ()=>{
    const house = document.querySelectorAll(".house")
    const resetHouse = document.querySelectorAll(".reset")

    house.forEach((house)=>{
        house.addEventListener('click', handleClick)
    })

    resetHouse.forEach((resetHouse) => {
        resetHouse.addEventListener('click', resetHouses)
    })
})

function handleClick(event){
    let house = event.target

    let position = house.id

    handleMove(position)
    updateHouse(position)
}

function updateHouse(position){
    const house = document.getElementById(position.toString())
    let symbol = board[position]
    house.innerHTML = `<div class='${symbol}'></div>`
}

function resetHouses(){
    resetHousesLets()
    updateResetHouses()
}
    


function updateResetHouses(){
    const house = document.querySelectorAll(".house")
    let position = house.id

    house.forEach((house)=>{
        let symbol = board[position]

        if (!symbol) {
            house.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

