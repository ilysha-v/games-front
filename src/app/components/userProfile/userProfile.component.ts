import {
  Component,
  OnInit
} from '@angular/core';

import { UserInfo } from '../../model/userInfo'
import { BackendService } from '../../backend.service'

@Component({
  selector: 'register',
  providers: [
    BackendService
  ],

  template: `
  <h1>User profile</h1>
  <div *ngIf="user">
      <form method="POST" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text"
            class="form-control"
            id="name"
            name="Name"
            required [(ngModel)]="user.Name">
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="text"
            class="form-control"
            id="email"
            name="Email"
            required [(ngModel)]="user.Email">
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
      </form>
  </div>

  `,
})

export class UserProfileComponent implements OnInit {
  user : UserInfo;

  constructor(
    private backendService: BackendService
  ) {
  }

  public ngOnInit() {
    this.backendService.getUserInfo().subscribe(user =>{
      this.user = user;
    })
  }

  public onSubmit(){
      console.log("To submit:");
      console.log(this.user);
      this.backendService.updateUserInfo(this.user).subscribe(resp => {
        console.log(resp);
      });
  }

}
