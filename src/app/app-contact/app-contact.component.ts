import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmailService } from './email.service';
import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-app-contact',
    templateUrl: './app-contact.component.html',
    styleUrls: ['./app-contact.component.css'],
})
export class AppContactComponent {
    urlApi = environment.apiUrl;

    contactForm = this.fb.group({
        name: [null, Validators.required],
        lastname: [null, Validators.required],
        mobile: [''],
        email: [null, Validators.required],
        message: [null, Validators.required]
    });

    constructor(private fb: FormBuilder,private emailservice: EmailService) { }

    addSendMail(): void {
        const postUrl = this.urlApi + 'contact';
        this.emailservice.PostContact(this.contactForm.value, postUrl);
    }

}
