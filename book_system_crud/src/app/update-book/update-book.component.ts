import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  public dataID :any;
   // public book:bookmodel = {} as bookmodel;
   public book:any = {} as any;

   constructor(private api: ApiService,private toastr: ToastrService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.dataID = data['id'];
    })
    this.api.fetchbook(this.dataID).subscribe(data=>{
       this.book = data;
    })
  }

  //update
  updatebook(){
    this.api.updatebook(this.book,this.dataID).subscribe(data=>{
      this.toastr.success('Data is updated successfully!!');
      this.router.navigate(['/viewBook']);
    })
  }

}
