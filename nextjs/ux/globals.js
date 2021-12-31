const body = document.querySelector('body');



body.onscroll = () => {
    console.log(`innerHeight is ${window.innerHeight}`);
    console.log(`innerwight is ${window.innerWidth}`);
    // console.log(`Sum is  ${window.innerHeight - window.innerWidth}`);
    console.log(window.scrollY);
}

body.onclick = () => {
    console.log('Onclick');
}

// body.onoffline = () => {
//     console.log('Ofline');
// }

// body.ondrag = () => {
//     console.log('drag');
// }




console.log(body.clientHeight);
