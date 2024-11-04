import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {

  public title = 'liste hotels ';

  public hotels : any[] = [
    {
      hotelId : 1,
       hotelName: 'Buea sweet life',
       description : 'Belle vue au bord de la mere ',
       price : 230.5,
       imageUrl : '/img/hotel-room1.jpg'
    },

    {
      hotelId : 2,
       hotelName: 'Marakech',
       description : 'Profitez de la vue au bord de la mere ',
       price : 145.5,
       imageUrl : '/img/hotel-room2.jpg'
    },

    {
      hotelId : 1,
       hotelName: 'Buea sweet life',
       description : 'Belle vue au bord de la mere ',
       price : 230.5,
       imageUrl : '/img/hotel-room3.jpg'
    },

    {
      hotelId : 1,
       hotelName: 'Buea sweet life',
       description : 'Belle vue au bord de la mere ',
       price : 230.5,
       imageUrl : '/img/hotel-room3.jpg'
    }
  ];

  public showBadge: boolean = true;

  public toggleIsNweBadge(): void {
     this.showBadge = !this.showBadge;
  }



}
