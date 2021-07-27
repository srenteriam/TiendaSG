import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeticionprodutoService {

  constructor(private http:HttpClient) { }


  Post(url:string, data:{}):Promise<any>{

    let promise = new Promise((resolve,reject) => {
      this.http.post(url, data)
      .toPromise()
      .then(
        res => {
          console.log(res);
          resolve(res);
        }
      );
    });
    return promise;
  }

  Get(url:string):Promise<any>{

    let promise = new Promise((resolve,reject) => {
      this.http.get(url)
      .toPromise()
      .then(
        res => {
          console.log(res);
          resolve(res);
        }
      );
    });
       return promise;
  }

  save_data(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://127.0.0.1:3000/venta',data,{headers:headers});
  }
}
