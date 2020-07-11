import { Component, OnInit } from '@angular/core';
import { PostvalueService} from "../postvalue.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  confirmed;
  deaths;
  cured;
  constructor(private postValue:PostvalueService,private routes:Router) { 
   

}
  

  ngOnInit(): void {
    this.postValue.getData().subscribe(res=>{
      this.confirmed=res.confirmed.value;
      this.deaths=res.deaths.value;
      this.cured=res.recovered.value;
     })

  
     
  }
  logout()
  {
     console.log("LOGGGGGGGGGGGGGGOUT")
     localStorage.clear();
     this.routes.navigate(["/login"]);
  }

}
