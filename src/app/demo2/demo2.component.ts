import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../person.model';


@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  dataSource!: MatTableDataSource<Person>;
  displayedColumns: string[] = ['name', 'age'];

  searchFilter = '';

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit() {
    const people: Person[] = [
      { name: 'John Doe', age: 30 },
      { name: 'Jane Smith', age: 25 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      { name: 'Robert Johnson', age: 35 },
      // ... add more data as needed
    ];

    this.dataSource = new MatTableDataSource<Person>(people);
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = this.customFilterPredicate;
  }

  applyFilter() {
    this.dataSource.filter = this.searchFilter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  customFilterPredicate(data: Person, filter: string): boolean {
    const filterValue = filter.toLowerCase();
    return data.name.toLowerCase().includes(filterValue) || data.age.toString().includes(filterValue);
  }

}
