import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helper/mustmatch';
import { RegisterService } from 'src/app/sevices/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formClient: FormGroup;
  formAdmin: FormGroup;
  submitted = false;
  constructor(private formBulder: FormBuilder, private registerServices: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.formClient = this.formBulder.group({
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      adress: ['', Validators.required],
      cin_client: ['', [Validators.required, Validators.minLength(8)]],
      image: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.formClient.controls; }

  onSubmit() {
    this.submitted=true;
    if (this.formClient.invalid) {
      return;
    }
    else{
    let formData = new FormData();
    formData.append("username", this.formClient.value.username);
    formData.append("password", this.formClient.value.password);
    formData.append("firstName", this.formClient.value.firstName);
    formData.append("lastName", this.formClient.value.lastName);
    formData.append("email", this.formClient.value.email);
    formData.append("adress", this.formClient.value.adress);
    formData.append("cin_client", this.formClient.value.cin_client);
    formData.append("file", this.fileToUpload[0]);
    this.registerServices.registerClient(formData).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire(
          'hello',
          'success register welcome Gauto'
        )
        this.router.navigateByUrl('/mail')
      }
     
    )
    }
    

  }

  onReset() {
    this.submitted = false;
    this.formClient.reset();
  }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  registerClient() {


    let formData = new FormData();
    formData.append("username", this.formClient.value.username);
    formData.append("password", this.formClient.value.password);
    formData.append("firstName", this.formClient.value.firstName);
    formData.append("lastName", this.formClient.value.lastName);
    formData.append("email", this.formClient.value.email);
    formData.append("adress", this.formClient.value.adress);
    formData.append("cin_client", this.formClient.value.cin_client);
    formData.append("file", this.fileToUpload[0]);
    this.registerServices.registerClient(formData).subscribe(
      (res: any) => {
        console.log("user ", res)
        Swal.fire(
          'hello',
          'success'
        )

      }
    )
  }



}


