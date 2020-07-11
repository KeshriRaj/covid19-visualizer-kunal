import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from "@angular/forms";
import { PostvalueService} from "../postvalue.service"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm:FormGroup;
  userDetails;

  constructor(private fb:FormBuilder,private postValue:PostvalueService) {
    this.userForm=this.fb.group({
      'firstName': this.fb.control('', [Validators.required]),
      'lastName': this.fb.control('', [Validators.required]),
      'email': this.fb.control('', [Validators.required]),
      'password': this.fb.control('', [Validators.required]),
    })
   }
   register;
   submitForm()
   {
     this.userDetails=this.userForm.value;
     console.log(this.userDetails);
     this.postValue.register(this.userDetails).subscribe(res=>{
       console.log(res);
       
     });
   }
  ngOnInit(): void {
  }

}
