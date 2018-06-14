import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Fname:'';
  surname:'';
  age:'';
  date:'';


  constructor(private router: Router ) { 

  }

  ngOnInit() {
    }



booking(){
  console.log(this.Fname + ' ' + this.surname + ' ' + this.age + ' ' + this.date);
  this.router.navigate (['detail'], {queryParams: {Fname: this.Fname, surname: this.surname, age: this.age, date: this.date}});

}

}
