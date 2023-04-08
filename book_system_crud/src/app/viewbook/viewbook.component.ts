//import { bookmodel } from '../bookmodel';
import { ApiService } from '../service/api.service';
import { MatSort,MatSortHeader, Sort } from "@angular/material/sort";
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

//const ELEMENT_DATA: bookmodel[] = [];
const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss']
})
export class ViewbookComponent implements OnInit , AfterViewInit{

  displayedColumns: string[] = ['sid', 'sname','fromdate','todate','genre'];
 // dataSource = ELEMENT_DATA;


  constructor(private api : ApiService,private _liveAnnouncer:LiveAnnouncer) { }
@ViewChild('sort') sort = new MatSort();

  


 // @ViewChild('paginator') paginator:MatPaginator | undefined;
  // @ViewChild(MatSort)
  // sort!: MatSort;

//dataSource! : MatTableDataSource<any>;
dataSource = new MatTableDataSource (ELEMENT_DATA);
ngAfterViewInit() {
//this.dataSource.paginator=this.paginator;
this.dataSource.sort=this.sort;
}
  
  ngOnInit(): void {
    this.api.getbook().subscribe(data=>{
    //  this.dataSource=new MatTableDataSource (ELEMENT_DATA);
      this.dataSource = data;   
      //this.dataSource.sort = this.sort;

    })

    this.api.deletebook(id :Number).subscribe(data=>{
      
    })

  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
}
}
