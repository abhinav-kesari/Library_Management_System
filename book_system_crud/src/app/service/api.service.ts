import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { bookmodel } from "../bookmodel";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   }

  //  //buy book
  //  postbook(data:any){
  //   return this.http.post('http://localhost:3000/posts',data);
  //  }

  //  //view book
  //  getbook():Observable<bookmodel[]>{
  //   return this.http.get<bookmodel[]>('http://localhost:3000/posts');
  //  }

  //  //delete book
  //  deletebook(id:number){
  //   return this.http.delete<bookmodel>('http://localhost:3000/post/${id}');
  //  }

  //  //fetch book by id
  //  fetchbook(id:number){
  //   return this.http.get<bookmodel>('http://localhost:3000/post/${id}');
  //  }

  //   //update
  //   updatebook(data:bookmodel,id:number){
  //     return this.http.put<bookmodel>('http://localhost:3000/post/${id}',data);
  //    }

     //buy book
     postbook(data:any){
      return this.http.post('http://localhost:3000/posts',data);
     }
  
     //view book
     getbook():Observable<any>{
      return this.http.get<any>('http://localhost:3000/posts');
     }
  
     //delete book
     deletebook(id:number){
      return this.http.delete<any>('http://localhost:3000/posts/'+id);
     }
  
     //fetch book by id
     fetchbook(id:number){
      return this.http.get<any>('http://localhost:3000/post/${id}');
     }
  
      //update
      updatebook(data:any,id:number){
        return this.http.put('http://localhost:3000/post/${id}',data);
       }

}
