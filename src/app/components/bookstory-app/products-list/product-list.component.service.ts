import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"



@Injectable()
export class BooksService {
    private url = 'https://localhost:3000/api/bookstore';
    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json'})
    }
    constructor(private http:HttpClient){}

    getBok(){
        return this.http.get(this.url)
    }
}
