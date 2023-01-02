// Get the element canvas and storing to const canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

// Draw the board 
c.fillRect(0,0,canvas.width, canvas.height);

class Sprite 
{
    constructor({ position, velocity })
    {
        this.position = position
        this.velocity = velocity
    }

    // Create a default player and fill the rect to red color
    draw()
    {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, 150)

    }

    //Create a update
    update()
    {
        
    }

}

// Create main player use Sprite
const player = new Sprite
({
   position: {
    x: 0,
    y: 0
   },
   velocity: {
    x:0,
    y:0
   }
});

player.draw()

// Create Enemy
const enemy = new Sprite
({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x:0,
        y:0
    }
})

enemy.draw()

// Create a infinite loop 
function animate()
{
    window.requestAnimationFrame(animate)
}

animate()

