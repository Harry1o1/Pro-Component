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
let items = document.querySelectorAll('.op');

// Scroll💯
    function indicator(e) {
        let rule = 3.6;
        marker.style.left = e.offsetLeft - rule + 'px';
        marker.style.width = e.offsetWidth + 'px';
        
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
    console.log('navbar2');
    };
    btn.onclick = () => {
        btn.classList.toggle('active');
        navbar_sm.classList.toggle('active');
    };
}



if ( small_ul.onclick !== 'undefined') {

    small_ul.onclick = () => {
        const pp = document.querySelector('.pro_navbar_mb_main-content').childElementCount;
        console.log(pp);
        sub.classList.toggle('toggle');
        page_menu.classList.toggle('toggle');
        navbar_sm.classList.toggle('toggle');
    }

}





// body.onclick = () => {
//     console.log('Onclick');
// }



console.log(body.clientHeight);