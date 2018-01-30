import {Injectable} from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs/Observable';
import {httpConfig} from './../../config/http.config'
import {HttpHeaders} from '@angular/common/http'

const url = httpConfig;

@Injectable()
export class MsgServices {
    constructor(private http: HttpClientService) {}
  sendMsg(body):Observable<Object>{
   let httpUrl:string = url.http + url.sendMsg;
   let headers = new HttpHeaders({
       'Content-Type': 'application/json',
       })
   return this.http.post(httpUrl, body, {headers:headers});
    }

    getMsgCount():Observable<Object>{
        let token = window.localStorage.getItem('token');
        let httpUrl:string = url.http + url.getMsgCount;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${token}`
            })
        return this.http.get(httpUrl, {headers:headers});
     }

     getAllMsg():Observable<Object>{
        let token = window.localStorage.getItem('token');
        let httpUrl:string = url.http + url.getAllMsg;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${token}`
            })
        return this.http.get(httpUrl, {headers:headers});
     }

     deleteMsg(body):Observable<Object>{
        let token = window.localStorage.getItem('token');
        let httpUrl:string = url.http + url.deleteMsg;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${token}`
            })
        return this.http.post(httpUrl, body, {headers:headers});
     }

     readMsg(body):Observable<Object>{
        let token = window.localStorage.getItem('token');
        let httpUrl:string = url.http + url.readMsg;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${token}`
            })
        return this.http.post(httpUrl, body, {headers:headers});
     }

     unReadMsg(body):Observable<Object>{
        let token = window.localStorage.getItem('token');
        let httpUrl:string = url.http + url.unReadMsg;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${token}`
            })
        return this.http.post(httpUrl, body, {headers:headers});
     }
}

