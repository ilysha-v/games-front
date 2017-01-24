import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { XLargeDirective } from './x-large';
import { BackendService } from '../../backend.service'
import { GameShortInfo } from '../../model/gameShortInfo'

@Component({
  selector: 'games',
  providers: [
    BackendService
  ],

  template: `
  <h1>Games list</h1>
  <hr />
  <div *ngIf="allGames">
    <div *ngFor="let game of allGames">
      <img src="{{game.Thumbnail}}">
      {{game.Name}}
    </div>
  </div>
  `,
})
export class GamesComponent implements OnInit {

  allGames: GameShortInfo[];

  constructor(private backendService: BackendService
  ) {}

  public ngOnInit() {
    this.loadGames();
  }

  public loadGames(){
    this.backendService.getAllGames().subscribe(data => {
      this.allGames = data;
      console.log("loaded");
    });
  }
}
