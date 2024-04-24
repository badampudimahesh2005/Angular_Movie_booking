import { Component } from '@angular/core';

import { MovieCardsComponent } from '../movie-cards/movie-cards.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MovieCardsComponent,
    ImageSliderComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
