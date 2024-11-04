import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
  <Header>
    <Img src="/assets/logo.svg" alt="logo" aria-hidden="true" class=""/>
  </Header>
  <section class="content">
    <router-outlet></router-outlet>
  </section>`
  ,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, HousingLocationComponent, CommonModule, RouterModule],

})
export class AppComponent {
 
};
