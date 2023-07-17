import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{
  loginError!: string;
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromAPI();
  }
  getDataFromAPI() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response: any) => {
      console.log(response); // Handle the response data
      this.data = response;
    },
    (error) => {
      // Handle login error
      this.loginError = 'Login failed. Please try again.';
      console.error('failed', error);
    });
  }
  
  

}
