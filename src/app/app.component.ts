import { Component } from '@angular/core';
import { RouterEvent, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HotelListComponent } from "./hotel-list/hotel-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { TodosComponent } from "./pages/todos/todos.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HotelListComponent, NavBarComponent, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnAngular';
}
