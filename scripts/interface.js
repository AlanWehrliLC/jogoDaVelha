document.addEventListener('DOMContentLoaded', ()=>{
    const house = document.querySelectorAll(".house")

    house.forEach((house)=>{
        house.addEventListener('click', handleClick)
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

function updateHouses(){
    const house = document.querySelectorAll(".house")

    house.forEach((house)=>{
        let position = house.id
        let symbol = board[position]

        if (symbol != '') {
            house.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}