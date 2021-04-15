const movie = document.getElementById('movie')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const section = document.querySelector('.section')
let ticketPrice = +movie.value;

function updateMovie(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeat = [...selectedSeats].map(tar => {[...seats].indexOf(tar)})
    const length = selectedSeat.length

    count.innerText = length
    total.innerText = length * ticketPrice

}

movie.addEventListener('change', e => {
    ticketPrice = +e.target.value
    updateMovie()
})
section.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupid')){
        e.target.classList.toggle('selected')
    }
    updateMovie()
})

updateMovie()