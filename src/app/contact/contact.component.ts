import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  constructor(public fbobj: FormBuilder) {}
  Form = this.fbobj.group({
       
  first_name: ['', [Validators.required]],
  last_name: ['', [Validators.required]],
  from_email: ['', [Validators.required, Validators.email]],
  Mobile: ['', [Validators.required,Validators.maxLength(10),Validators.maxLength(10)]],
  message: ['', Validators.required],
  from_name: 'Sandhan Gurukul',
  reply_to: 'Gaurav',
  });
    
      send() {
        if (this.Form.valid) {
          emailjs.init('Rbl6Kbk7BuKAq6OJR');
         
          emailjs.send("service_uzxzlf9","template_eujvc6c",{
            from_email: this.Form.value. from_email,
            Mobile: this.Form.value. Mobile,
            message:this.Form.value.message,
            first_name: this.Form.value.first_name,
            last_name:this.Form.value.last_name,
            })


            .then(
              (response) => {
                alert('Feedback has been sent to Developer..👍');
                this.Form.reset();
              },
              (error) => {
                console.error('Error sending email:', error);
                alert('Error sending feedback. Please try again.');
              }
            );
        } else {
          alert('Please fill in all the required fields correctly.');
        }
      }
    }



