import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(form: NgForm) {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "aaron.usin@hotmail.com",
      Password : "24AEC574D2373671BDA42BC943CF6E80FE6C",
      To : 'aaron.usin@hotmail.com',
      From : "aaron.usin@hotmail.com",
      Subject : "Pealkiri",
      // Body : "Tärnid" + form.value.stars + 
      // ".Saatja: " + form.value.name + 
      // ".Email: " + form.value.email +
      // ".Sisu:  " + form.value.message
      Body : `Tärnid: ${form.value.stars}
      Saatja: ${form.value.name}
      Email: ${form.value.email}
      Sisu: ${form.value.message}`
  }).then(
    (message: any) => alert(message)
  );
  }
}
