import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-more-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-cards.component.html',
  styleUrl: './more-cards.component.css'
})
export class MoreCardsComponent {

  movies = [
    { id:1, title: 'Movie 1', imageUrl: 'assets/images/main1.jpg', aboutPage: 'movie1-about' ,cast: [
      { name: 'Actor 1', image: 'assets/images/image1.jpg' },
      { name: 'Actor 2', image: 'assets/images/image1.jpg' },
      { name: 'Actor 3', image: 'assets/images/image1.jpg' },
      { name: 'Actor 4', image: 'assets/images/image1.jpg' },


    ],trailerUrl: 'https://www.youtube.com/watch?v=CO6Xig02q7k',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 

  },

    { id:2, title: 'Movie 2', imageUrl: 'assets/images/main2.jpg', aboutPage: 'movie2-about',cast: [
      { name: 'Actor 1', image: 'assets/images/image1.jpg' },
      { name: 'Actor 2', image: 'assets/images/image1.jpg' },
      { name: 'Actor 3', image: 'assets/images/image1.jpg' },
      { name: 'Actor 4', image: 'assets/images/image1.jpg' },


    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
 },
    { id:3, title: 'Movie 1', imageUrl: 'assets/images/main6.jpg', aboutPage: 'movie1-about',cast: [
      { name: 'Actor 1', image: 'assets/images/image1.jpg' },
      { name: 'Actor 2', image: 'assets/images/image1.jpg' },
      { name: 'Actor 3', image: 'assets/images/image1.jpg' },
      { name: 'Actor 4', image: 'assets/images/image1.jpg' },


    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
 },
    { id:4, title: 'Movie 2', imageUrl: 'assets/images/main4.jpg', aboutPage: 'movie2-about' ,cast: [
      { name: 'Actor 1', image: 'assets/images/image1.jpg' },
      { name: 'Actor 2', image: 'assets/images/image1.jpg' },
      { name: 'Actor 3', image: 'assets/images/image1.jpg' },
      { name: 'Actor 4', image: 'assets/images/image1.jpg' },


    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
},

    { id:5, title: 'Movie 1', imageUrl: 'assets/images/main5.jpg', aboutPage: 'movie1-about' ,cast: [
      { name: 'Actor 1', image: 'assets/images/image1.jpg' },
      { name: 'Actor 2', image: 'assets/images/image1.jpg' },
      { name: 'Actor 3', image: 'assets/images/image1.jpg' },
      { name: 'Actor 4', image: 'assets/images/image1.jpg' },


    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
}
   
    // Add more movie data as needed
  ];

  isHovered = false;

  constructor(private router: Router) {}

  onHover(hovered: boolean) {
    this.isHovered = hovered;
  }

  openAboutPage(movie: any) {
    this.router.navigate(['/info', movie.aboutPage], { state: { movie} });
    console.log('Open about page for:', movie.title);
  }

}
