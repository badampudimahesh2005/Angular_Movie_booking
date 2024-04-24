import { CommonModule } from '@angular/common';
import { MovieCardsComponent } from '../movie-cards/movie-cards.component';
import { Component ,Input} from '@angular/core';




@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [MovieCardsComponent,CommonModule],
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.css'
})
export class TrailerComponent {
  @Input() movie: any; // To receive movie data from MovieCards component


  ngOnInit() {
    // Access movie data passed through route state in the Info component
    this.movie = history.state?.movie; // Get movie data from route state
  }

}
