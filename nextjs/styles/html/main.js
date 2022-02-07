const body = document.querySelector('body');
const canvas1 = document.querySelector('#canvas1');
let ctx1 = canvas1.getContext('2d');
const canvas2 = document.querySelector('#canvas2');
let ctx2 = canvas2.getContext('2d');







// Pc       //////////////////////////////////////////////////////////////////////////////////////////////
if (canvas1 !== null) {
    
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
    // console.log(window.innerHeight);
    // canvas1.height ;
    
    class Root1 {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.speedX = Math.random() * 4 - 2;
            this.speedY = Math.random() * 4 - 2;
            this.maxSize = Math.random() * 3 + 6;
            this.size = Math.random() * 1 + 2;
            this.vs = Math.random() * 0.7 + 0.23;
    
            this.angleX = Math.random() * 6.2;
            this.vaX = Math.random() * 0.6 - 0.3;
            this.angleY = Math.random() * 6.2;
            this.vaY = Math.random() * 0.6 - 0.3;
    
            this.lightness = 60;
            this.color = 0;
    
    
        }
        update() {
    
            this.x += this.speedX + Math.sin(this.angleX);
            this.y += this.speedY + Math.sin(this.angleY);
            this.size += this.vs;
            this.angleX += this.vaX;
            this.angleY += this.vaY;
            this.color +=2;
    
            if (this.lightness < 100) this.lightness +=0.1;
            if (this.lightness < 240) this.color += 40;
    
            if (this.size < this.maxSize) {
    
                ctx1.beginPath();
                ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx1.fillStyle = 'hsl(120, 100%, ' + this.lightness + '%)';
    
                ctx1.fill();
                ctx1.stroke();
                requestAnimationFrame(this.update.bind(this));
    
            }
    
    
        }
    }
    body.addEventListener('touchmove', function(e) {
    
        for (let i = 0; i < 45; i++) {
            const root1 = new Root1(e.touches[0].clientX, e.touches[0].clientY);
            root1.update();
            // console.log(e.touches[0].clientY);
    
        }
    
    
        e.preventDefault();
    
    });
};








// Mb       //////////////////////////////////////////////////////////////////////////////////////////////
if (canvas2 !== null){
    // console.log('canvas2');
    
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    
    class Root2 {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.speedX = Math.random() * 4 - 2;
            this.speedY = Math.random() * 4 - 2;
            this.maxSize = Math.random() * 1.9 + 2.9;
            this.size = Math.random() * 1 + 2;
            this.vs = Math.random() * 0.15 + 0.23;
            
            this.lightness = 60;
            this.color = 120;
            
            
        }
        update() {
            
            this.x += this.speedX;
            this.y += this.speedY;
            this.size += this.vs;
            this.color +=2;
            
            if (this.lightness < 100) this.lightness +=0.1;
            if (this.lightness < 240) this.color += 40;
            
            if (this.size < this.maxSize) {
                
                ctx2.beginPath();
                ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx2.fillStyle = 'hsl(' + this.color + ', 100%, ' + this.lightness + '%)';
                
                ctx2.fill();
                ctx2.stroke();
                requestAnimationFrame(this.update.bind(this));
                
            }
            
            
        }
    }
    body.addEventListener('touchmove', function(e) {
        
        for (let i = 0; i < 40; i++) {
            const root2 = new Root2(e.touches[0].clientX, e.touches[0].clientY);
            root2.update();
            // console.log(e.touches[0].clientY);
            
        }
        
        
        e.preventDefault();
        
    });




}
