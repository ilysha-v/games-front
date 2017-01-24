import {
  Component,
  OnInit
} from '@angular/core';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { AppState } from '../app.service';
import { XLargeDirective } from './x-large';
import { BackendService } from '../../backend.service'
import { GameShortInfo } from '../../model/gameShortInfo'

@Component({
  selector: 'login',
  providers: [
    BackendService
  ],

  template: `
  <h1>Auth form</h1>
  <hr />
  <div [innerHTML]="formHtml"></div>
  `,
})

export class LoginComponent implements OnInit {

  formHtml;

  constructor(
    private backendService: BackendService,
    private sanitizer: DomSanitizer
  ) {}

  public ngOnInit() {
    this.backendService.getAuthForm().subscribe(data => {
      this.formHtml = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }
}
