import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class HomeService {

  private welcomeMessageUrl: string = "/api/home/welcome";
  constructor(private http: Http) { }

  getMessage(): Observable<string> {
    return this.http.get(this.welcomeMessageUrl)
                    .map((response: Response) => <string> response.text())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
  }

  private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error ');
    }
}
 