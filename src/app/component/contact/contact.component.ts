import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/sevices/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;
  formContact: FormGroup;
  submitted = false;
  constructor(private serviceContact: ContactService, private formBulder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formContact = this.formBulder.group({
      nom: ['', Validators.required],
      message: ['', Validators.required],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.required]
    })
  }
  get f() { return this.formContact.controls; }

  AddMessage() {
    this.submitted = true;
    if (this.formContact.invalid) {
      return;
    } else {
      this.serviceContact.Reclamation(this.formContact.value).subscribe(
        (res: any) => {
          console.log("contact ", res)
          Swal.fire(
            'Add Message',
            'success'
          )
        }
      )
    }
  }

}
