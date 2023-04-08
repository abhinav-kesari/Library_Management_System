//import { bookmodel } from '../bookmodel';
import { ApiService } from '../service/api.service';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from "ngx-toastr";
import { MatPaginator } from '@angular/material/paginator';

//const ELEMENT_DATA: bookmodel[] = [];
const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss'],
})
export class ViewbookComponent implements OnInit, AfterViewInit {

  constructor(
    private api: ApiService,
    private _liveAnnouncer: LiveAnnouncer,
    private toastr: ToastrService
  ) {}
  @ViewChild('sort') sort = new MatSort();

  displayedColumns: string[] = ['sid', 'sname', 'fromdate', 'todate', 'genre','action'];
  // dataSource = ELEMENT_DATA;
  //dataSource! : MatTableDataSource<any>;
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  ngAfterViewInit() {
    //this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.displaybook();
  }

  // View
  displaybook(){
    this.api.getbook().subscribe((data) => {
      //  this.dataSource=new MatTableDataSource (ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(data);
   //   this.dataSource = data;
      this.dataSource.sort = this.sort;
    });
  }
 //Sorting Direction
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  //Delete
  delete(id: number){
     this.api.deletebook(id).subscribe(data=>{
        this.toastr.success(id+ ` is deleted successfully!!`);
        this.displaybook();
     })
  }
}
