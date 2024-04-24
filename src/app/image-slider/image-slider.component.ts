import { Component, OnInit } from '@angular/core';
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Image {
  url: string;
  text: string;
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})


  export class ImageSliderComponent implements OnInit {
    images: Image[] = [
      { url: 'assets/images/walteru.jpg', text: 'Realesing on 13Jan 2024 ' },
      { url: 'assets/images/dasara2.jpeg', text: 'Dasara Realesing 30 march 2024 '},
      { url: 'assets/images/avt.jpg', text: 'Avatar2 the way of water' },
      { url: 'assets/images/evil dead.jpg', text: 'Releasing on 21April 2024' },
      { url: 'assets/images/img43.jpeg', text: 'Dasara Realesing 30 march 2025' }
    ];
    currentIndex: number = 0;
  
    ngOnInit() {
      this.slideShow();
    }
  
    slideShow() {
      setInterval(() => {
        this.nextSlide();
      }, 2000); // Change image every 3 seconds (adjust as needed)
    }

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  
    prevSlide() {
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    }
  
    goToSlide(index: number) {
      this.currentIndex = index;
    }
  }


  
  