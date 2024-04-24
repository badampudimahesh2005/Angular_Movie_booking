import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  submitForm(form: any) {
    if (form.valid) {
      // Here you can add code to send the form data to a backend service
      console.log(form.value);
      // Reset the form after submission
      form.resetForm();
    }

}
}
