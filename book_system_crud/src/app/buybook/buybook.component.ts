import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
//import { bookmodel } from '../bookmodel';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.scss']
})
export class BuybookComponent implements OnInit {
  
 // public book:bookmodel = {} as bookmodel;
  public book:any = {} as any;

  constructor(private api: ApiService,private toastr: ToastrService,private router:Router) { }

  

  ngOnInit(): void {
  }

  apply(){
    this.api.postbook(this.book).subscribe(data=>{
      console.log(data)
      this.toastr.success("Book bought successfully!!");
      this.router.navigate(["viewBook"]);
    })
  }
}
