import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { TrailerComponent } from './trailer/trailer.component';
import { SignupComponent } from './login/signup/signup.component';
import { MovieSeatBookingComponent } from './movie-seat-booking/movie-seat-booking.component';


export const routes: Routes = [
    {path: 'contact', component:ContactComponent},
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path: 'login',component:LoginComponent},
    {path:'about',component:AboutComponent},

    {path: 'info/:aboutPage',component:InfoComponent},

    {path: 'trailer', component:TrailerComponent},
    {path: 'signup', component:SignupComponent},

    {path:'ticket',component:MovieSeatBookingComponent}
   
    

];
