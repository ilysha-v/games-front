/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import './rxjs-operators';
import {BackendService} from './backend.service'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  providers: [
    BackendService
  ],
  template: `
    <div width='100%'>
    <div width='auto' align='left'>
        <nav>
      <a [routerLink]=" ['./'] " routerLinkActive="active">
        Index
      </a>
      <a [routerLink]=" ['./home'] " routerLinkActive="active">
        Home
      </a>
      <a [routerLink]=" ['./games'] " routerLinkActive="active">
        Games list
      </a>

      <a *ngIf="!userInfo?.Email" [routerLink]=" ['./register'] " routerLinkActive="active">
        Registration
      </a>
      <a *ngIf="!userInfo?.Email" [routerLink]=" ['./login'] " routerLinkActive="active">
        Log in
      </a>
    </nav>
    </div>

    <div align='right'>
      <div *ngIf="userInfo?.Email">
      <b>Hey, {{userInfo.Email}}</b>
      </div>
      <a *ngIf="userInfo?.Email" href="/api/auth/logout">
        Log out
      </a>
    </div>


    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  public name = 'Games service';
  userInfo;

  constructor(private backendService: BackendService
  ) {}

  public ngOnInit() {
      this.loadUserInfo();
  }

  public loadUserInfo(){
      this.backendService.getUserInfo().subscribe(user => {
          this.userInfo = user;
      });
  }

}
