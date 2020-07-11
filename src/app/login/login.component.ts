import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from "@angular/forms";
import { PostvalueService} from "../postvalue.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup;
  userDetails;

  constructor(private fb:FormBuilder,private postValue:PostvalueService,private routes:Router) {
    this.userForm=this.fb.group({
      'email': this.fb.control('', [Validators.required]),
      'password': this.fb.control('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  loginData;
  submitForm()
  {
    this.userDetails=this.userForm.value;
    // console.log(this.userDetails);
    this.postValue.getToken(this.userDetails).subscribe(res=>{
      this.loginData=res;
      console.log(res);
      // console.log("tokennnnnnnn",this.loginData.token)
      if(this.loginData.token!=null)
      {
      localStorage.setItem("Login",JSON.stringify(this.loginData));
      this.routes.navigate(['/dashboard']);
      }
      else
      {
        alert("Invalid Username or Password");
      }
    })
    
    // this.postValue.xyz(this.userDetails).subscribe(res=>{
    // console.log(res);
      
  }

}
