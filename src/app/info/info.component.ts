import { CommonModule } from '@angular/common';
import { Component ,Input} from '@angular/core';
import { MoreCardsComponent } from './more-cards/more-cards.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule,MoreCardsComponent,RouterModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() movie: any; // To receive movie data from MovieCards component


  ngOnInit() {
    // Access movie data passed through route state in the Info component
    this.movie = history.state?.movie; // Get movie data from route state
  }

  
  
}
