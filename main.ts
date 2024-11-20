let penguin = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f 6 6 6 6 6 6 6 6 6 6 f . . 
    . . f 6 6 6 6 6 6 6 6 6 6 f . . 
    . f 6 6 1 f 6 6 6 6 1 f 6 6 f . 
    . f 6 6 f f 6 6 6 6 f f 6 6 f . 
    . f 6 6 6 4 4 4 4 4 4 6 6 6 f . 
    . f 6 6 6 6 4 4 4 4 6 6 6 6 f . 
    f 6 6 6 6 1 1 1 1 1 1 6 6 6 6 f 
    f 6 6 6 1 1 1 1 1 1 1 1 6 6 6 f 
    f 6 f 1 1 1 1 1 1 1 1 1 1 f 6 f 
    . f f 1 1 1 1 1 1 1 1 1 1 f f . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 4 4 4 f f f f 4 4 4 f . . 
    . . . f f f . . . . f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
penguin.sayText(":)")
