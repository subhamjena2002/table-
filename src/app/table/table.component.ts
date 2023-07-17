import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface person{
  name: string;
  age: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  dataSource!: MatTableDataSource<person> ;
  displayedColumns: string[] = ['name', 'age'];

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor() {}

  ngOnInit() {
    const people: person[] = [
      { name: 'Divya', age: 30 },
      { name: 'John', age: 25 },
      { name: 'Raju', age: 35 },
      { name: 'abhinash', age: 64 },
      { name: 'sibani', age: 34 },
      { name: 'subham', age: 24 },
      { name: 'priya', age: 45 },
      
    ];

    this.dataSource = new MatTableDataSource<person>(people);
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (data: person, sortHeaderId: string) => {
      switch (sortHeaderId) {
        case 'name':
          return data.name.toLowerCase();
        case 'age':
          return data.age;
        default:
          return '';
      }
    };

    this.dataSource.sort.sort({ id: 'name', start: 'asc',disableClear: true  });
  }

}
