// Mobile menu
const elMenu = document.getElementById('menu');
const elOpenMenu = document.getElementById('open-menu');
const elOverl = document.getElementById('overl');
elMenu.addEventListener('click', function() {
    elOpenMenu.classList.remove('-translate-x-full')
    document.body.classList.add('overflow-hidden')
})

elOverl.addEventListener('click', function() {
    elOpenMenu.classList.add('-translate-x-full')
    document.body.classList.remove('overflow-hidden')
})

// Dropdown mobile
const elItems = document.querySelectorAll('#item');
elItems.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(item);
        e.preventDefault()
        console.log(item);
        item.nextElementSibling.classList.toggle('hidden')
        item.nextElementSibling.classList.toggle('flex')
        item.children[1].classList.toggle('rotate-90')
    })
})

// dropdown
let tab  = document.querySelectorAll('.tab')
let menu  = document.querySelectorAll('.menu')
tab.forEach((item , index)=>{
  item.addEventListener("mouseover" , function(){
    menu[index].classList.toggle('hidden')
  })
  
  item.addEventListener("mouseout" , function(){
    menu[index].classList.toggle('hidden')
  })
})

// search
let closeSearch  = document.querySelector('#close-search')
let searchBox = document.querySelector('#search-box')
let openSearch = document.querySelector('#open-search')
closeSearch.addEventListener('click' , function(){
  searchBox.classList.add('hidden')
})

openSearch.addEventListener('click' , function(){
  searchBox.classList.remove('hidden')
})
