function searchShow(){
    let searchInput = document.getElementById('search');
    console.log(searchInput.style);
    searchInput.style.display = searchInput.style.display == 'block' ? 'none' : 'block';
}

$('.products-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
  });
  $('.partner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: true,
  });