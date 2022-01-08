import { Robin } from './src/toogle/robin.js';
const body = document.querySelector('body');
const btn = document.querySelector('.pro_navbar_mb_btn');
const small_ul = document.querySelector('.mb_list5');
const navbar_sm = document.querySelector('.pro_navbar_main_container');
const navbar_main_content = document.querySelector('.pro_navbar_mb_main-content');
const sub = document.querySelector('.pro_navbar_sub-menu_mb');
const page_menu = document.querySelector('.pro_navbar_page-menu_mb');
let menu = document.querySelector('span');
let navbar2 = document.querySelector('body');
let marker = document.querySelector('#marker');
let items = document.querySelectorAll('.scroll_li_a');
let navbar = document.querySelector('.sidebar-sm');



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
// Get the offset position of the navbar
let sticky = navbar.offsetTop;
// let sticky = navbar.getBoundingClientRect();


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}








// Scroll💯
    function indicator(e) {
        let rule1 = 7;
        let rule2 = 5;
        
        marker.style.left = e.offsetLeft - rule1 + 'px';
        marker.style.width = e.offsetWidth + rule2 + 'px';
        
        
        console.log(marker.style.left);
        
    };
    items.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target);
        })
        link.addEventListener('dbclick', (e) => {
            indicator(e.target);
        })
        
    });
    
    
    


Robin('Op Argument');
if (btn !== 'undefined') {
    btn.onclick = () => {
        navbar2.classList.toggle('active')
    };
    btn.onclick = () => {
        btn.classList.toggle('active');
        navbar_sm.classList.toggle('active');
    };
}











console.log(body.clientHeight);