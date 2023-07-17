import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  data:any=[]
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['officename', 'circlename'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  apiUrl = 'http://192.168.100.113:3021/api/getallpin?_format=json';

  ngOnInit() {
    this.fetchData(this.data).subscribe(
      (res) => {
        this.data = res;
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        console.log("working"); // Print the received data
      },
      // (error: any) => {
      //   console.error(error);
      // }
    );
  }

  fetchData(data:any){
  
    return this.http.get(this.apiUrl, data ).pipe(
      map(response => {
        this.data = response;
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        return response;
      })
    );
  }
  

}
