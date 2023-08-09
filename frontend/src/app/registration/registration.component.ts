import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  user: any;

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    username: new FormControl(''),
    avatar: new FormControl('')

  })

  constructor(private userService: UserService, private router: Router){

  }

  onSubmit(){
    this.userService.getRegistered(this.userForm.value).subscribe(
      user => {
        this.user=user
      }
    );
    this.router.navigate(['/login/user']);
  }

}
