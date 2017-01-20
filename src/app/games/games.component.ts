import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { XLargeDirective } from './x-large';

@Component({
  selector: 'games',
  providers: [
  ],

  template: `<h1>Games list</h1>`,

  // Our list of styles in our component. We may add more to compose many styles together
  // styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  // templateUrl: './home.component.html'
})
export class GamesComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }
}
