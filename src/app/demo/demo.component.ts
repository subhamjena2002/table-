import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../person.model';

import { PeopleService } from '../service/people.service';
import { MatPaginator } from '@angular/material/paginator';

/* export interface Person {
  name: string;
  age: number;
} */

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  dataSource!: MatTableDataSource<Person> ;
  displayedColumns: string[] = ['name', 'age'];

  nameFilter = '';
  ageFilter: number | null = null;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
   constructor(private peopleService: PeopleService) {} 

  ngOnInit() {
    /* const people: Person[] = [
    
      // ... add more data as needed
    ]; */
    const people: Person[] = this.peopleService.getPeople();

    this.dataSource = new MatTableDataSource<Person>(people);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = this.customFilterPredicate;
  }

  applyFilter() {
    this.dataSource.filter = JSON.stringify({
      name: this.nameFilter.trim().toLowerCase(),
      age: this.ageFilter
    });

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  customFilterPredicate(data: Person, filter: string): boolean {
    const filters = JSON.parse(filter);

    const nameMatch = data.name.toLowerCase().includes(filters.name);
    const ageMatch = filters.age ? data.age === filters.age : true;

    return nameMatch && ageMatch;
  } 
  }


