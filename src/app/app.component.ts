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
  providers: [
    BackendService
  ],
  template: `
        <nav class="light-blue lighten-1" role="navigation">
          <div class="nav-wrapper">
            <ul class="left">
              <li><a [routerLink]=" ['./home'] " routerLinkActive="active">Home</a></li>
              <li><a [routerLink]=" ['./games'] " routerLinkActive="active">Games list</a></li>
            </ul>

            <ul class="right" *ngIf="!userInfo?.Email">
              <li>
                <a [routerLink]=" ['./register'] " routerLinkActive="active">
                  Sign up
                </a>
              </li>
              <li>
                <a [routerLink]=" ['./login'] " routerLinkActive="active">
                  Sign in
                </a>
              </li>
            </ul>

            <ul class="right" *ngIf="userInfo?.Email">
              <li>
                <a [routerLink]=" ['./profile'] " routerLinkActive="active">
                  Hey, {{userInfo.Email}}
                </a>
              </li>
              <li><a href="/api/auth/logout">Log out</a></li>
            </ul>
          </div>
        </nav>

    <div class="container">
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
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
