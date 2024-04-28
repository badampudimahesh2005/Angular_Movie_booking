import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  selectedMovieObj: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.selectedMovieObj = JSON.parse(params['selectedMovieObj']);
    });
  }

  processPayment() {
    console.log('Processing payment...');
    // Add your payment processing logic here
    // Validate inputs, send payment details to a payment gateway, etc.
    // Example: Redirect to a success page after payment
    // this.router.navigate(['/payment-success']);
  }
 
  

}
