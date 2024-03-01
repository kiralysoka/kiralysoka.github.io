window.onload = function() {
  // Try to read from local storage, otherwise set to default
  let currentTheme = localStorage.getItem("mytheme") || "default";

  setTheme("default", currentTheme);

  const themeSelector = document.getElementById("theme-selector");
  themeSelector.value = currentTheme;

  themeSelector.addEventListener("change", function(e) {
    const newTheme = e.currentTarget.value;
    setTheme(currentTheme, newTheme);
  });

  function setTheme(oldTheme, newTheme) {
    const body = document.getElementsByTagName("body")[0];

    body.classList.remove(oldTheme);
    body.classList.add(newTheme);

    currentTheme = newTheme;

    // Store the new theme in local storage
    localStorage.setItem("mytheme", newTheme);
  }
};




/*Binary rain*/

const canvas = document.getElementById("background_rain");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*
let gradient = ctx. createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0.2, "red");
gradient.addColorStop(0.4, "blue");
gradient.addColorStop(0.6, "green");
*/

class Symbol {
    constructor(x, y, fontSize, canvasHeight){
        this.characters = "01";
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
  }
draw(context){
    this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)
    if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.989){
        this.y = 0;
    } else{
        this.y += 1;
    }
}
}

class Effect {
  constructor(canvasWidth, canvasHeight){
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.fontSize = 25;
      this.columns = this.canvasWidth/this.fontSize;
      this.symbols = [];
      this.#initialize();
      /*console.log(this.symbols);*/
  }
  #initialize(){
      for(let i = 0; i < this.columns; i++){
          this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
  }
  resize(width, height){
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.columns = this.canvasWidth/this.fontSize;
      this.symbols = [];
      this.#initialize();
  }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 30;
const nextFrame = 1000/fps;
let timer = 0;


function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if(timer > nextFrame){
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.textAlign = "center";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgb(44, 156, 0)"; //gradient; 
      ctx.font = effect.fontSize + "px monospace";
      effect.symbols.forEach(symbol => symbol.draw(ctx));
      timer = 0;
  }else{
      timer += deltaTime;
  }

  requestAnimationFrame(animate);
}
animate(0);

window.addEventListener("resize", function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);

});






//Dark mode Starfield

var fps1 = 60,
    interval = 1000 / fps1,
    lastTime1 = (new Date()).getTime(),
    currentTime = 0,
    delta = 0;

var starsCount = 400,
    starsMinSpeed = 0.01,
    starsMaxSpeed = 0.05,    
    starsSpeed = starsMinSpeed,    
    stars = [];


(function() {
  "use strict";

  const canvas = document.getElementById('starfield');
  const context = canvas.getContext('2d');
  
  function init() { 
      window.onresize();
      window.requestAnimationFrame(render);
  }

  window.onresize = function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;  
    
      context.fillStyle = "white";
      context.strokeStyle = "white";    
      context.translate(canvas.width / 2, canvas.height /2);      
  };
  
  
  class Star {
      constructor() {
          this.reset();
      }
    
      reset() {
          this.x = this.random(-canvas.width / 2, canvas.width / 2);
          this.y = this.random(-canvas.height / 2, canvas.height / 2);
          this.z = 0;
          this.origX = this.x;       
          this.origY = this.y;         
      }
    
      random(min, max) {
          return min + Math.random() * (max - min);
      }       

      update() {
          this.origX = this.x;
          this.origY = this.y;
          this.z += starsSpeed;
          this.x += this.x * this.z * starsSpeed;
          this.y += this.y * this.z * starsSpeed;
      }
    
      draw() {
          context.lineWidth = this.z;
          context.beginPath();
          context.moveTo(this.x, this.y);
          context.lineTo(this.origX, this.origY);
          context.stroke();
      }
  }  
  


  function update() {
      for(var i = 0; i < stars.length; i++) {
          let star = stars[i];
          star.update();
        
          if(
            star.x - star.z > canvas.width / 2 || 
            star.x + star.z < -canvas.width / 2 || 
            star.y - star.z > canvas.height / 2 ||
            star.y + star.z < -canvas.height / 2
          ) {
              star.reset();
          }
      }
    
      if(stars.length < starsCount)
          stars.push(new Star());
  }

  function draw() {    
      for(var i = 0; i < stars.length; i++) {
          stars[i].draw();
      }
  }
  
  function clear() {
      context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  }

  function render() {
      currentTime = (new Date()).getTime();
      delta = currentTime - lastTime1;

      if(delta > interval) {
        
          update();
        
          clear();
          draw();

          lastTime1 = currentTime - (delta % interval);
      }

      window.requestAnimationFrame(() => {
          render();
      });    
  }
  
  init();
  
})();




/*
(function gui() {
    let gui = new dat.GUI();

    let f1 = gui.addFolder('Stars');
    starCountGUI = f1.add(this, 'starsCount', 1, starsCount * 2).name('Count'); 
    starCountGUI.onChange(() => { stars = []; });
    f1.add(this, 'starsSpeed', starsMinSpeed, starsMaxSpeed).name('Speed');
    f1.open();
})();
*/
