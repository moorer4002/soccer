namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const FrogTeam = SpriteKind.create()
    export const HatTeam = SpriteKind.create()
    export const Secret = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.HatTeam, SpriteKind.Player, function (sprite, otherSprite) {
    player_interact_with_ball(sprite)
})
sprites.onOverlap(SpriteKind.FrogTeam, SpriteKind.Player, function (sprite, otherSprite) {
    player_interact_with_ball(sprite)
})
function player_interact_with_ball (player2: Sprite) {
    // - Dribble
    // 
    // - Kick
    if (Math.percentChance(50)) {
        // TODO:
        // 
        // KICK AT DIFFERENT SPEEDS DEPENDING ON THE PLAYER'S STATS.
        spriteutils.setVelocityAtAngle(soccer_ball, spriteutils.angleFrom(player2, sprites.readDataSprite(player2, "goalSprite")), 200)
    } else {
        spriteutils.setVelocityAtAngle(player2, spriteutils.angleFrom(player2, sprites.readDataSprite(player2, "goalSprite")), 50)
        spriteutils.setVelocityAtAngle(soccer_ball, spriteutils.angleFrom(player2, sprites.readDataSprite(player2, "goalSprite")), 50)
    }
}
let soccer_ball: Sprite = null
let YES_DEFINITELY_A_SOCCER_PLAYER_: Sprite = null
let soccerPlayer: Sprite = null
let names = [
"Geronimo Pitchfork",
"Possum Monday",
"Shorty Tallhat",
"Samanthina Satine",
"Rolly Quolly",
"Polka Envelope",
"Mike Roe Swift",
"Minnesota J Frog",
"Gary \"kicks good\" Participle",
"Armband Wilson",
"Cynthia Eleanor June III",
"REX",
"SSSS. FrogMan",
"Olympus Frogs",
"Juneau Jones Jr. Jr.",
"Parenthesis Ichabod",
"Hyphen Dot",
"Max Targets",
"Jimmy \"Reaction Time\" Soccerperson",
"Parker Drive",
"Q. Canticle"
]
tiles.setSmallTilemap(tilemap`level2`)
let secret_goal = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Secret)
tiles.placeOnRandomTile(secret_goal, assets.tile`myTile24`)
secret_goal.setFlag(SpriteFlag.Invisible, true)
let second_secret_goal = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Secret)
second_secret_goal.setFlag(SpriteFlag.Invisible, true)
tiles.placeOnRandomTile(second_secret_goal, assets.tile`myTile25`)
for (let value of tiles.getTilesByType(assets.tile`myTile24`)) {
    tiles.setTileAt(value, assets.tile`myTile12`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile25`)) {
    tiles.setTileAt(value2, assets.tile`myTile12`)
}
for (let value3 of tiles.getTilesByType(assets.tile`myTile20`)) {
    soccerPlayer = sprites.create(img`
        . . a 1 . a 1 . 
        . . a f . a f . 
        . . a a a a a . 
        . . a a a a a . 
        . . a a a a a . 
        . . . a a a . . 
        . . 9 8 8 8 . . 
        a 8 8 9 9 9 9 8 
        a . 8 9 1 1 9 a 
        a . 8 9 1 9 a a 
        . . 8 9 9 1 9 . 
        . . c c c c c . 
        . . c . . . c . 
        . . c . . . c . 
        . . 2 . . . 2 . 
        . . 2 1 . . 2 1 
        `, SpriteKind.FrogTeam)
    soccerPlayer.image.replace(2, randint(1, 10))
    tiles.setTileAt(value3, assets.tile`myTile`)
    tiles.placeOnTile(soccerPlayer, value3)
    sprites.setDataNumber(soccerPlayer, "homeX", soccerPlayer.x)
    sprites.setDataNumber(soccerPlayer, "homeY", soccerPlayer.y)
    sprites.setDataString(soccerPlayer, "team", "left")
    sprites.setDataNumber(soccerPlayer, "goalX", tiles.locationXY(tiles.getTilesByType(assets.tile`myTile23`)[0], tiles.XY.x))
    sprites.setDataNumber(soccerPlayer, "goalY", tiles.locationXY(tiles.getTilesByType(assets.tile`myTile23`)[0], tiles.XY.y))
    sprites.setDataSprite(soccerPlayer, "goalSprite", second_secret_goal)
    sprites.setDataNumber(soccerPlayer, "power", randint(1, 5))
    sprites.setDataNumber(soccerPlayer, "speed", randint(1, 5))
}
for (let value4 of tiles.getTilesByType(assets.tile`myTile21`)) {
    soccerPlayer = sprites.create(img`
        . . a a a a a . 
        . . a a a a a . 
        . . a a a a a . 
        . . a a a a a . 
        . . a a a a a . 
        . a a a a a a a 
        . . 6 6 6 6 6 . 
        . . 6 f 6 f 6 . 
        . . 6 6 6 6 6 . 
        . . 6 f 6 f 6 . 
        . . 6 6 f 6 6 . 
        . 6 2 2 2 2 2 6 
        6 . 2 2 f 2 2 6 
        . . 6 2 2 2 6 . 
        . . 6 6 6 6 6 . 
        . . 6 . . . 6 . 
        `, SpriteKind.HatTeam)
    soccerPlayer.image.replace(10, randint(3, 10))
    tiles.setTileAt(value4, assets.tile`myTile`)
    tiles.placeOnTile(soccerPlayer, value4)
    sprites.setDataSprite(soccerPlayer, "goalSprite", secret_goal)
    sprites.setDataNumber(soccerPlayer, "homeX", soccerPlayer.x)
    sprites.setDataNumber(soccerPlayer, "homeY", soccerPlayer.y)
    sprites.setDataNumber(soccerPlayer, "power", randint(1, 5))
    sprites.setDataNumber(soccerPlayer, "speed", randint(1, 5))
    sprites.setDataString(soccerPlayer, "team", "left")
    sprites.setDataNumber(soccerPlayer, "goalX", tiles.locationXY(tiles.getTilesByType(assets.tile`myTile22`)[0], tiles.XY.x))
    sprites.setDataNumber(soccerPlayer, "goalY", tiles.locationXY(tiles.getTilesByType(assets.tile`myTile22`)[0], tiles.XY.y))
}
if (Math.percentChance(50)) {
    YES_DEFINITELY_A_SOCCER_PLAYER_ = sprites.create(img`
        . . f f f f f . 
        . . f f f f f . 
        . . f f f f f . 
        . . f f f f f . 
        f f f f f f f f 
        . 8 8 8 8 8 8 . 
        8 8 8 6 f 6 f . 
        8 8 6 6 6 6 6 . 
        8 . 6 6 6 6 6 . 
        . . . 6 6 6 . . 
        . . 6 5 6 6 5 . 
        . 6 6 5 5 5 5 6 
        . 6 6 5 5 2 5 6 
        6 6 5 5 5 2 5 6 
        6 . 5 5 5 5 5 . 
        6 . 8 8 8 8 8 . 
        . . 8 8 8 8 8 . 
        . . 8 . . . 8 . 
        . . 6 . . . 6 . 
        . . 6 . . . 6 . 
        `, SpriteKind.Player)
    YES_DEFINITELY_A_SOCCER_PLAYER_.setPosition(randint(48, 136), randint(20, 100))
} else {
    YES_DEFINITELY_A_SOCCER_PLAYER_ = sprites.create(img`
        . . 1 1 1 1 1 . 
        . 8 8 8 8 8 8 . 
        8 8 8 6 f 6 f . 
        8 8 6 6 6 6 6 . 
        8 . 6 6 6 6 6 . 
        . . . 6 6 6 . . 
        . . 6 5 6 6 5 . 
        . 6 6 5 5 5 5 6 
        . 6 6 5 5 2 5 6 
        6 6 5 5 5 2 5 6 
        6 . 5 5 5 5 5 . 
        6 . 8 8 8 8 8 . 
        . . 8 8 8 8 8 . 
        . . 8 . . . 8 . 
        . . 2 . . . 2 . 
        . . 2 2 . . 2 2 
        `, SpriteKind.Player)
    YES_DEFINITELY_A_SOCCER_PLAYER_.setPosition(randint(136, 180), randint(20, 100))
}
controller.moveSprite(YES_DEFINITELY_A_SOCCER_PLAYER_)
scene.cameraFollowSprite(YES_DEFINITELY_A_SOCCER_PLAYER_)
soccer_ball = sprites.create(img`
    . f f 1 . 
    f 1 1 1 f 
    f 1 f f 1 
    1 1 1 1 1 
    . 1 f f . 
    `, SpriteKind.Ball)
soccer_ball.setFlag(SpriteFlag.BounceOnWall, true)
game.onUpdateInterval(500, function () {
    for (let value5 of sprites.allOfKind(SpriteKind.FrogTeam)) {
        if (spriteutils.getSpritesWithin(SpriteKind.Ball, 20, value5).length != 0) {
            value5.follow(soccer_ball, 20)
        } else {
            value5.follow(null)
            timer.after(1000, function () {
                story.spriteMoveToLocation(value5, sprites.readDataNumber(value5, "homeX"), sprites.readDataNumber(value5, "homeY"), 20)
            })
        }
    }
    for (let value6 of sprites.allOfKind(SpriteKind.HatTeam)) {
        if (spriteutils.getSpritesWithin(SpriteKind.Ball, 20, value6).length != 0) {
            value6.follow(soccer_ball, 20)
        } else {
            value6.follow(null)
            timer.after(1000, function () {
                story.spriteMoveToLocation(value6, sprites.readDataNumber(value6, "homeX"), sprites.readDataNumber(value6, "homeY"), 20)
            })
        }
    }
})
