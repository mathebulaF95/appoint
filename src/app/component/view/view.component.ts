import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Fname:'';
  surname:'';
  age:'';
  date:'';

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.Fname = params['Fname'];
      this.surname = params['surname'];
      this.age = params['age'];
      this.date = params['date'];
    });
    console.log(this.Fname);
    console.log(this.surname);
    console.log(this.age);
    console.log(this.date);
  }
      

}
