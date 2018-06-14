import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ViewComponent } from './component/view/view.component';
import { AppRoutes } from '../app.routes.module';
import { EventComponent } from './component/event/event.component';
import { DetailComponent } from './component/detail/detail.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ViewComponent,
    EventComponent,
    DetailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
