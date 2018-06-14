import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  Fname:'';
  surname:'';
  age:'';
  date:'';


 
  pages= [
    {name:'event', page:'event'},
    {name:'view', page:'view'}
  
  ]

 

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{
      this.Fname = params['Fname'];
      this.surname = params['surname'];
      this.age = params['age'];
      this.date = params['date'];

      console.log(this.Fname);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.date);
    
      }
     
      )
  }
}