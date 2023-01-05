// Get the element canvas and storing to const canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

// Draw the board 
c.fillRect(0,0,canvas.width, canvas.height);

const gravity = 0.2

class Sprite 
{
    constructor({ position, velocity })
    {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    // Create a default player and fill the rect to red color
    draw()
    {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)

    }

    //Create a update
    update()
    {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y >= canvas.height)
        {
            this.velocity.y = 0
        } else
        {
            this.velocity.y += gravity
        }
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

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

// Create a infinite loop 
function animate()
{
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width, canvas.height)
    player.update()
    enemy.update()

    if(key.a.pressed) 
    {
        player.velocity.x = -1
    } else if (key.d.pressed) 
    {
        player.velocity.x = 1
    }
}

animate()

// To press any key on keyboard
window.addEventListener('keydown', (event) => {
    switch(event.key)
    {
        // Press 'd' on keyboard move object to right
        case 'd':
            keys.d.pressed = true
            break
        case 'a':
            keys.a.pressed = true
        break
    }
    console.log(event.key)
})

// Release the Key
window.addEventListener('keyup', (event) => {
    switch(event.key)
    {
        // Press 'd' on keyboard move object to right
        case 'd':
            keys.d.velocity = false
            break
        case 'a':
            keys.a.velocity = false
        break
    }
    console.log(event.key)
})