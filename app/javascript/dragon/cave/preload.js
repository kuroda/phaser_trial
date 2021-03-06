import TilesSprite from "../../images/tiles-sprite.png"
import PlayerSprite from "../../images/player-sprite2.png"
import StrongPlayerSprite from "../../images/player-sprite3.png"
import MonsterSprite from "../../images/monster-sprite.png"
import HeartSprite from "../../images/heart.png"

export default function preload() {
  this.load.tilemapTiledJSON("cave_map", "/dragon/cave_map.json?t=" + new Date())
  this.load.spritesheet("tiles", TilesSprite, {
    frameWidth: 64, frameHeight: 64
  })
  this.load.spritesheet("player", PlayerSprite, {
    frameWidth: 48, frameHeight: 64
  })
  this.load.spritesheet("strongPlayer", StrongPlayerSprite, {
    frameWidth: 48, frameHeight: 64
  })
  this.load.spritesheet("monster", MonsterSprite, {
    frameWidth: 64, frameHeight: 64
  })
  this.load.spritesheet("heart", HeartSprite, {
    frameWidth: 64, frameHeight: 64
  })
  this.load.audio("cave", "/dragon/cave.mp3")
}
