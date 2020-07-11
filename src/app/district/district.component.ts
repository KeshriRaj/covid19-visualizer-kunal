import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router';
import { PostvalueService} from "../postvalue.service"
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
code;
districtData;
districtData2;
districts;
districtsName;
  constructor(private router:ActivatedRoute,private router2:Router,private postValue:PostvalueService) {
    this.code=this.router.snapshot.params.code;
    this.postValue.getDistrictData().subscribe(res=>{
      this.districtData=Object.keys(res);
      this.districtData2=Object.values(res);
      // console.log("1",this.districtData);
      console.log(this.districtData2);
      // console.log("length",this.districtData2.length);
      for(let i=0;i<this.districtData2.length;i++)
      {
        if(this.districtData2[i].statecode==this.code)
        {
          this.districts=Object.values(this.districtData2[i].districtData);
          this.districtsName=Object.keys(this.districtData2[i].districtData);
          console.log(this.districts[0].confirmed);
        }
      }
     })
   }

  ngOnInit(): void {
  }

}
