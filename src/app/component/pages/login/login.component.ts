import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/sevices/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  formLogin: FormGroup;
  submitted = false;
  constructor(private formBulder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.getFormLogin();
  }
  get f() { return this.formLogin.controls; }
  getFormLogin() {
    this.formLogin = this.formBulder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin() {
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
    else {
      this.loginService.login(this.formLogin.value).subscribe(
        (res: any) => {
          console.log(res)
          if (res.user.enabled === true) {
            Swal.fire({
              icon: 'success',
              title: 'Welcome ',
            })
            this.router.navigateByUrl('/about')
            localStorage.setItem('userconnect', JSON.stringify(res.user))
            localStorage.setItem('token', res.token)
            localStorage.setItem("state", "0")
          }
        }, (err: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Login Error',
            text: 'username or password invalid'
          })
        }
      )
    }
  }
}
