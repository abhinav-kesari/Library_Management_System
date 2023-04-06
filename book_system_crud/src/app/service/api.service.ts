import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { bookmodel } from "../bookmodel";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   }

   //buy book
   postbook(data:bookmodel){
    return this.http.post<bookmodel>('http://localhost:3000/posts',data);
   }

   //view book
   getbook(){
    return this.http.get<bookmodel>('http://localhost:3000/posts');
   }

   //delete book
   deletebook(id:number){
    return this.http.delete<bookmodel>('http://localhost:3000/post/${id}');
   }

   //fetch book by id
   fetchbook(id:number){
    return this.http.get<bookmodel>('http://localhost:3000/post/${id}');
   }

    //update
    updatebook(data:bookmodel,id:number){
      return this.http.put<bookmodel>('http://localhost:3000/post/${id}',data);
     }

}
