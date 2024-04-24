import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
                RouterOutlet,
                RouterModule,
                CommonModule,
                HeaderComponent,
                FooterComponent,
                ContactComponent,
                HomeComponent,
                LoginComponent,
      
                
              ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-booking-system';
}
