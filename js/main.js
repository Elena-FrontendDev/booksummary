// new Glide('.glide').mount()

// new Glide('.glide', {
//     type: 'carousel',
//     startAt: 0,
//     perView: 3
//   }).mount()

const elem = document.querySelector('.main-carousel');
const bookDescription = document.querySelector('.book__description');
const bookDownload = document.querySelector('.book__download');
const bookSummary = document.querySelector('.book__summary');

const flkty = new Flickity(elem, {
    // freeScroll: true,
    wrapAround: true,
    cellAlign: 'left',
    contain: true
});



flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
    event.preventDefault();
    
  if ( !cellElement ) {
    return;
  }

  var prevClickedCell = elem.querySelector('.is-clicked');
  if ( prevClickedCell ) {
    prevClickedCell.classList.remove('is-clicked');
  }
  
  cellElement.classList.add('is-clicked');
  bookDescription.classList.add('active');
//   console.log('Cell ' + ( cellIndex + 1 )  + ' clicked');
//   const targetCell = event.target;
//   const targetImage = event.target.closest('.carousel-image');
//   console.log(targetImage);
});

bookDownload.addEventListener('click', () => {
    bookSummary.style.display = 'flex';
})