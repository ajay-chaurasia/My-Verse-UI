import { Component, HostListener, OnInit } from '@angular/core';
import { GamePixel } from 'src/app/models';

@Component({
  selector: 'app-space-battle',
  templateUrl: './space-battle.component.html',
  styleUrls: ['./space-battle.component.scss']
})
export class SpaceBattleComponent implements OnInit {

  level: number = 0
  interval: any
  score: number = 0
  playground: Array<GamePixel[]> = []
  player: GamePixel = { xIndex: 30, yIndex: 15 }
  enemies: GamePixel[] = []
  paused: boolean = false

  ngOnInit(): void {
    for (let i = 0; i < 31; i++) {
      this.playground.push([]);
      for (let j = 0; j < 31; j++) {
        this.playground[i].push({
          xIndex: i,
          yIndex: j
        });
      }
    }
  }

  getPixelClass(pixel: GamePixel): string {
    if (pixel.xIndex === this.player.xIndex
      && pixel.yIndex === this.player.yIndex) {
      return 'player';
    }
    if (this.enemies.find(enemy => enemy.xIndex === pixel.xIndex
      && enemy.yIndex === pixel.yIndex)) {
      return 'enemy';
    }
    return '';
  }

  movePlayer(index: string, moveBy: number) {
    this.player[index as keyof GamePixel] = this.player[index as keyof GamePixel] + moveBy;
    if (this.player[index as keyof GamePixel] < 0) {
      this.player[index as keyof GamePixel] = 30;
    } else if (this.player[index as keyof GamePixel] > 30) {
      this.player[index as keyof GamePixel] = 0;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.paused) {
      switch (event.key) {
        case 'ArrowUp': this.movePlayer('xIndex', -1)
          break;
        case 'ArrowDown': this.movePlayer('xIndex', 1)
          break;
        case 'ArrowLeft': this.movePlayer('yIndex', -1)
          break;
        case 'ArrowRight': this.movePlayer('yIndex', 1)
          break;
      }
    }
  }

  addEnemies() {
    for (let i = 0; i < (this.level * 5); i++) {
      this.enemies.push({
        xIndex: Math.floor(Math.random() * (5 + 1)),
        yIndex: Math.floor(Math.random() * (30 + 1))
      });
    }
  }

  startGame() {
    this.paused = false
    if (!this.interval) {
      this.interval = setInterval(() => {
        if (!this.enemies.length) {
          this.level++;
          this.addEnemies();
        }
        this.enemies.forEach(enemy => {
          enemy.xIndex++;
          if (enemy.xIndex > 30) {
            enemy.xIndex = 0;
          }
        })
        const index = this.enemies.findIndex(enemy => enemy.xIndex === this.player.xIndex
          && enemy.yIndex === this.player.yIndex);
        if (index !== -1) {
          this.score++;
          this.enemies.splice(index, 1);
        }
      }, 200)
    }
  }

  pauseGame() {
    if (this.interval) {
      this.paused = true
      clearInterval(this.interval);
      this.interval = null
    }
  }

  stopGame() {
    this.paused = false
    this.enemies = [];
    this.level = 0;
    clearInterval(this.interval);
    this.interval = null
  }
}
