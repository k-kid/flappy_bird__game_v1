input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Ticks = 0
let Bird: game.LedSprite = null
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
let Empty_ObstacleY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != Empty_ObstacleY) {
        Obstacles.push(game.createSprite(4, index))
    }
}
let index = 0
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        Empty_ObstacleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != Empty_ObstacleY) {
                Obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let Obstacle of Obstacles) {
        if (Obstacle.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    basic.pause(1000)
    Ticks += 1
})
