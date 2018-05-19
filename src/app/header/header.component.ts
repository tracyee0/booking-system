import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

interface user_reg_interface {
  name: {
    fname: string,
    lname: string
  },
  email: string,
  phone: string,
  password: string,
  confirm_password: string,
  path: string
};

interface user_login_interface {
  email: String,
  password: String
};


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private my_service: UserService) { }
email_addy;
pwd;

user: user_reg_interface = {
  name: {
    fname: "",
    lname: "",
  },
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
  path: "",
};

user_login: user_login_interface = {
  email: "",
  password: ""
};

error = "";

text_color;

strength;

reg_ex = new RegExp(/[A-z]|[0-9][._][@][a-z][.][a-z]/)

email_test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

ngOnInit() {
  let login_data = localStorage.getItem("login_data")
  this.user_login = JSON.parse(login_data);

}

register() {
  if(this.user.name.fname === "" || this.user.name.lname === ""){
    this.error = "First name and Last Name are compulsory";
  } else if(this.user.email === "" || !this.email_test.test(this.user.email)){
    this.error = "A valid email is required";
  } else if (this.user.phone === ""){
    this.error = "Phone number is required";
  } else if (this.user.password.length < 6){
    this.error = "Password is not strong enough";
  } else if (this.user.password != this.user.confirm_password) {
    this.error = "Passwords must match!";
  } else if (this.user.path === "") {
    this.error = "Please select a valid path!";
  } else {
   //alert("Registration Successful " + this.user.name.fname + " " + this.user.name.lname)
    this.router.navigateByUrl("profile")
  }
   console.log("Validated!")

  console.log(this.user);
}

check_password_strength() {

  if(this.user.password.length<6) {
    this.text_color = 1;
    this.strength = "Weak Password";
  } else if(this.user.password.length < 8){
    this.text_color = 2;
    this.strength = "Managable Password";
  } else if (this.user.password.length > 11 && this.reg_ex.test(this.user.password)){
    this.text_color = 3;
    this.strength = "Super Strong Password!";
  }
}

login() {
  let login_string = JSON.stringify(this.user_login)
  localStorage.setItem("login_data", login_string);
}


validateform(){
if (this.email_addy=="tracychinedu@gmail.com" && this.pwd=="tracy"){
  this.error

}
else{
  this.error="invalid email or password"
}
 }
 }
//  this.my_service.postData('http://localhost:8000/submit', this.user).subscribe(
//   result => {
//   console.log(result)
//  }, error => {
//  console.log(error)
//   }
//    )
