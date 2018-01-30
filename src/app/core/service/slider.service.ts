import {Injectable} from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs/Observable';
import {httpConfig} from './../../config/http.config'
import {HttpHeaders} from '@angular/common/http'

const url = httpConfig;

@Injectable()
export class SliderServices {
    constructor(private http: HttpClientService) {}

    getSlider():Observable<Object>{
        let httpUrl:string = url.http + url.getSlider;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:4200'
            })
        return this.http.get(httpUrl, {headers:headers});
    }

    setSlider(body):Observable<Object>{
         let token = window.localStorage.getItem('token');
        let httpUrl:string = url.http + url.setSlider;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${token}`
            })
        return this.http.post(httpUrl, body, {headers:headers});
    }

    remove(body):Observable<Object>{
        let token = window.localStorage.getItem('token');
       let httpUrl:string = url.http + url.remove;
       let headers = new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': `${token}`
           })
       return this.http.post(httpUrl, body, {headers:headers});
   }

  update(body):Observable<Object>{
    let token = window.localStorage.getItem('token');
   let httpUrl:string = url.http + url.update;
   let headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': `${token}`
       })
   return this.http.post(httpUrl, body, {headers:headers});
}
}