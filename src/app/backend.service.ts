import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { GameShortInfo }  from './model/gameShortInfo';
import { UserInfo } from './model/userInfo'
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BackendService {

  private allGamesUrl = 'api/games';  // URL to web API

  constructor (private http: Http) {}

  getAllGames (): Observable<GameShortInfo[]> {
    return this.http.get(this.allGamesUrl)
                    .map(this.extractJsonData)
                    .catch(this.handleError);
  }

  getRegistrationForm (): Observable<string>{
    let url = 'api/auth/register';
    return this.http.get(url)
                    .map(this.extractTextData)
                    .catch(this.handleError);
  }

  getAuthForm (): Observable<string>{
    let url = 'api/auth/login';
    return this.http.get(url)
                    .map(this.extractTextData)
                    .catch(this.handleError);
  }

  getUserInfo(): Observable<UserInfo>{
    let url = 'api/userinfo';
    return this.http.get(url)
                    .map(this.extractJsonData)
                    .catch(this.handleError);
  }

  private extractJsonData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private extractTextData(res: Response) {
    let body = res.text();
    return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
