import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {catchError, tap} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailControl: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    Validators.email
  ]));
  passwordControl: FormControl = new FormControl('', Validators.compose([
    Validators.required
  ]));

  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl
    })

  }

  ngOnInit() {
  }

  wrongCredentialsErr() {

  }

  oops() {

  }

  login() {
    if (this.loginForm.valid) {
      this.dataService.login(this.loginForm.value)
        .pipe(
          tap(res => {
            localStorage.setItem('token', res.token);
            this.router.navigate(['institutions']);
          }),
          catchError((err) => {
            if (err instanceof HttpErrorResponse) {
              switch (err.status) {
                case 401:
                  this.wrongCredentialsErr();
                  break;
                default: this.oops(); break
              }
              console.log();
            }
            return of([]);
          })
        )
        .subscribe();
    }
  }


}
