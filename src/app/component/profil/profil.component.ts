import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/sevices/profil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  fileToUpload: Array<File> = [];
  formCLient: FormGroup;
  formProfil: FormGroup;
  client: any;
  constructor(private profileService: ProfilService, private formBulder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getOneClient();
    this.formCLient = this.formBulder.group({
      image: ['', Validators.required]
    })
    this.formProfil = this.formBulder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adress: ['', Validators.required],
      cin_client: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
    this.updateImage();
  }
  updateImage() {
    let formData = new FormData();
    formData.append("file", this.fileToUpload[0]);
    this.profileService.updateImage(formData, this.userconnect.id).subscribe(
      (res: any) => {
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        window.location.reload()
        Swal.fire(
          'Update new image',
          'success'
        )

      }
    )

  }
  getOneClient() {
    this.profileService.getOnelient(this.userconnect.id).subscribe(
      (res: any) => {
        this.client = res;
        console.log("client", this.client);
        this.Formvalalues(this.client)
      }
    )
  }

  updateProfil() {
   
    this.profileService.updateClient( this.formProfil.value,this.userconnect.id).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire(
          'Update Profil Succes'
        )
      }

    )
  }


  Formvalalues(client: any) {
    this.formProfil.patchValue({
      firstName: client.firstName,
      lastName: client.lastName,
      username: client.username,
      email: client.email,
      adress: client.adress,
      cin_client: client.cin_client,
    })
  }
}

