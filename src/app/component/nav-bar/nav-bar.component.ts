import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

@Input() name;
@Input() page;

@Input() surname;
@Input() age;
@Input() date;
@Input() Fname;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  navigator() {
    if(name ==='event') {
      this.router.navigate(['detail/event']);

    } else if (this.name ==='view') {
     this.router.navigate(['detail/view'], {queryParams: {Fname:this.Fname, surname:this.surname, age:this.age, date:this.date}});
    }
  }
}

