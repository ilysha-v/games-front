import {
  Component,
  OnInit
} from '@angular/core';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { BackendService } from '../../backend.service'

@Component({
  selector: 'register',
  providers: [
    BackendService
  ],

  template: `
  <h1>Registration form</h1>
  <div class="row">
    <div [innerHTML]="formHtml" class="col s6"></div>
  </div>
  `,
})

export class RegistrationComponent implements OnInit {
  formHtml;

  constructor(
    private backendService: BackendService,
    private sanitizer: DomSanitizer
  ) {
  }

  public ngOnInit() {
    this.loadRegistrationForm();
  }

  public loadRegistrationForm(){
     this.backendService.getRegistrationForm().subscribe(data => {
       this.formHtml = this.sanitizer.bypassSecurityTrustHtml(data);
     });
  }
}
