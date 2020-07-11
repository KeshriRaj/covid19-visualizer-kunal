import { Component, OnInit } from '@angular/core';
import { PostvalueService} from "../postvalue.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private postValue:PostvalueService,private router:Router) {

    
   }
  stateData=[];
  ngOnInit(): void {
    this.postValue.getStateData().subscribe(res=>{
      this.stateData=res.statewise;
      console.log(this.stateData);
     })
  }
  stateDetails(code:string)
  {
    this.router.navigate(['/district',code]);
  }

}
