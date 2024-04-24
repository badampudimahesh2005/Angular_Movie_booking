import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-cards.component.html',
  styleUrl: './movie-cards.component.css'
})
export class MovieCardsComponent {
  movies = [
    { id:1, title: 'Dasara', imageUrl: 'assets/images/dasara.jpg', aboutPage: 'movie1-about' ,cast: [
      { name: 'Nani', image: 'assets/images/cast/nani.jpg' },
      { name: 'Keerthi sheti', image: 'assets/images/cast/keerty.jpg' },
      { name: 'Samuthri', image: 'assets/images/cast/samuthri.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },

      { name: 'Srikanth', image: 'assets/images/cast/srikanth.jpg' },
      { name: 'Sudhakar', image: 'assets/images/cast/sudhakar.jpg' },



    ],trailerUrl: 'https://www.youtube.com/watch?v=CO6Xig02q7k',
    description:'Dasara is an upcoming Indian Telugu-language action drama film written and directed by newcomer Srikanth Odela. Set in the backdrop of Singareni coal mines near Ramagundam Godavarikhani of Telangana, the film stars Nani and Keerthy Suresh.Dasara is scheduled for a theatrical release on 30 March 2023.' 

  },

    { id:2, title: 'Salar', imageUrl: 'assets/images/slalar.jpg', aboutPage: 'movie2-about',cast: [
      { name: 'Prabash', image: 'assets/images/cast/prabash.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },

      { name: 'Prithviraj', image: 'assets/images/cast/download.webp' },
      { name: 'Jagapathi Bubu', image: 'assets/images/cast/jagapathi.jpg' },
      { name: 'Prashanth Neel', image: 'assets/images/cast/neel.jpeg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Salaar is a multilingual movie starring Prabhas in a prominent role. It is an action thriller directed by Prashanth Neel' 
 },
    { id:3, title: 'Avatar', imageUrl: 'assets/images/main2.jpg', aboutPage: 'movie1-about',cast: [
      { name: 'Sam Worthington', image: 'assets/images/cast/cast31.jpg' },
      { name: 'Soe Saldana', image: 'assets/images/cast/cast32.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },

      { name: 'James cameron', image: 'assets/images/cast/cast33.jpg' },
      { name: 'Amanda silver', image: 'assets/images/cast/cast34.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:' Set more than a decade after the events of the first film, "Avatar The Way of Water" begins to tell the story of the Sully family (Jake, Neytiri and their kids),    the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure.' 
 },
    { id:4, title: 'Black Panther', imageUrl: 'assets/images/main3.webp', aboutPage: 'movie2-about' ,cast: [
      { name: 'Letitia Wright', image: 'assets/images/cast/cast41.jpg' },
      { name: 'Winston duke', image: 'assets/images/cast/cast42.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },

      { name: 'Ryan Coogler', image: 'assets/images/cast/cast43.jpg' },
      { name: 'Kevin Feige', image: 'assets/images/cast/cast44.jpg' },


    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
},

    { id:5, title: 'Arjun Reddy', imageUrl: 'assets/images/main4.jpg', aboutPage: 'movie1-about' ,cast: [
      { name: 'Vijay Deverakonda', image: 'assets/images/cast/cast51.jpg' },
      { name: 'Sandeep reddy', image: 'assets/images/cast/cast52.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },

      { name: 'Rahul', image: 'assets/images/cast/cast53.jpg' },
      { name: 'Shalini Pandey', image: 'assets/images/cast/cast54.jpg' },


    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
},
    { id:6, title: 'Love Today', imageUrl: 'assets/images/main5.jpg', aboutPage: 'movie2-about',cast: [
      { name: 'Pradeep', image: 'assets/images/cast/cast61.jpg' },
      { name: 'Ivana', image: 'assets/images/cast/cast62.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },

      { name: 'Raveena Ravi', image: 'assets/images/cast/cast63.jpg' },
      { name: 'Prathana', image: 'assets/images/cast/cast64.jpg' },


    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
 },
    { id:7, title: 'Kantara', imageUrl: 'assets/images/main6.jpg', aboutPage: 'movie1-about',cast: [
      { name: 'Rishab Shetty', image: 'assets/images/cast/cast71.jpg' },
      { name: 'Sapthami Gowda', image: 'assets/images/cast/cast72.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },
      { name: 'Achyuth kumar', image: 'assets/images/cast/cast74.jpg' },
      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
 },
    { id:8, title: 'Puspha 2', imageUrl: 'assets/images/main7.jpg', aboutPage: 'movie2-about' ,cast: [
      { name: 'Allu Arjun', image: 'assets/images/cast/cast81.jpg' },
      { name: 'Rashmika mandana', image: 'assets/images/cast/cast82.jpg' },
      { name: 'Fahadh Faasil', image: 'assets/images/cast/cast83.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },

      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },


    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' 
},

    { id:9, title: 'KGF 2', imageUrl: 'assets/images/main8.jpg', aboutPage: 'movie1-about' ,cast: [
      { name: 'Rishab Shetty', image: 'assets/images/cast/cast71.jpg' },
      { name: 'Sapthami Gowda', image: 'assets/images/cast/cast72.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },
      { name: 'Achyuth kumar', image: 'assets/images/cast/cast74.jpg' },
      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' },
    { id:10, title: 'RED', imageUrl: 'assets/images/main9.jpg', aboutPage: 'movie2-about',cast: [
      { name: 'Rishab Shetty', image: 'assets/images/cast/cast71.jpg' },
      { name: 'Sapthami Gowda', image: 'assets/images/cast/cast72.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },
      { name: 'Achyuth kumar', image: 'assets/images/cast/cast74.jpg' },
      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.'  },
    { id:11, title: 'Game Changer', imageUrl: 'assets/images/main10.jpg', aboutPage: 'movie1-about' ,cast: [
      { name: 'Rishab Shetty', image: 'assets/images/cast/cast71.jpg' },
      { name: 'Sapthami Gowda', image: 'assets/images/cast/cast72.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },
      { name: 'Achyuth kumar', image: 'assets/images/cast/cast74.jpg' },
      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' },
    { id:12, title: 'RRR', imageUrl: 'assets/images/main11.jpg', aboutPage: 'movie2-about' },

    { id:13, title: 'Raja The Great', imageUrl: 'assets/images/main12.jpg', aboutPage: 'movie1-about',cast: [
      { name: 'Rishab Shetty', image: 'assets/images/cast/cast71.jpg' },
      { name: 'Sapthami Gowda', image: 'assets/images/cast/cast72.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },
      { name: 'Achyuth kumar', image: 'assets/images/cast/cast74.jpg' },
      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.'  },
    { id:14, title: 'Agent', imageUrl: 'assets/images/main13.jpg', aboutPage: 'movie2-about' ,cast: [
      { name: 'Rishab Shetty', image: 'assets/images/cast/cast71.jpg' },
      { name: 'Sapthami Gowda', image: 'assets/images/cast/cast72.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },
      { name: 'Achyuth kumar', image: 'assets/images/cast/cast74.jpg' },
      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.' },
    { id:15, title: 'MS Dhoni', imageUrl: 'assets/images/main14.jpg', aboutPage: 'movie1-about',cast: [
      { name: 'Rishab Shetty', image: 'assets/images/cast/cast71.jpg' },
      { name: 'Sapthami Gowda', image: 'assets/images/cast/cast72.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },
      { name: 'Achyuth kumar', image: 'assets/images/cast/cast74.jpg' },
      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.'  },
    { id:16, title: 'Bhoola', imageUrl: 'assets/images/main15.jpg', aboutPage: 'movie2-about',cast: [
      { name: 'Rishab Shetty', image: 'assets/images/cast/cast71.jpg' },
      { name: 'Sapthami Gowda', image: 'assets/images/cast/cast72.jpg' },
      { name: 'Kishore', image: 'assets/images/cast/cast73.jpg' },
      { name: 'Achyuth kumar', image: 'assets/images/cast/cast74.jpg' },
      { name: 'Vijay Sethupathi', image: 'assets/images/cast/cast84.jpg' },



    ],trailerUrl: 'assets/images/video.mp4',
    description:'Adipurush is an upcomming Indian mythological film based on the epic Ramayan.The film is written and directed by Om Raut and produced by T-Series and Retrophiles Shot simultaneously in Hindi and Telugu languages, the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh.'  },
    
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

