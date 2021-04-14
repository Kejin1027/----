const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
    //选中的座位
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    //座位的index_不重复的
    const selectedSeat = [...selectedSeats].map(seat => {[...seats].indexOf(seat)})
    //一共选了多少个座位
    const counts = selectedSeat.length
    //更新数量和价格
    count.innerText = counts
    total.innerText = counts * ticketPrice
   //更新index 还有price
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();
