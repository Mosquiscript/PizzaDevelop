class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
   this.map = null;
 }

     startGameLoop()
     {

         const step = () =>
         {
              this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
            
             //Draw lower Layer
             this.map.drawLowerImage(this.ctx);

             //Draw Objects
             Object.values(this.map.gameObjects).forEach(object =>{
                 object.y += 1;
                 object.sprite.draw(this.ctx);

             })

             //Draw Upper Layer
             this.map.drawUpperImage(this.ctx);
            
             requestAnimationFrame(() => {
                 console.log("stepping!");
                 step();
             })
         }
         step();
     }

     init()
     {
            this.map = new OverworldMap(window.OverworldMaps.Kitchen);
            this.startGameLoop();
          


     }

}