import { Component, OnInit } from '@angular/core';
import { PostvalueService} from "../postvalue.service"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {

  states;
  public barChartLabels=[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data:[],label:"Confirmed", type: "line"},
    {data:[],label:"Deaths"},
    {data:[],label:"Recovered"},
    {data:[],label:"Active"}
  ];

  constructor(private postValue:PostvalueService,private router:Router) {
    this.postValue.getBarData().subscribe(res=>{
        this.states=Object.values(res.data.statewise);
        console.log("qfeawdthygj");
        console.log(this.states,typeof(this.states));
        console.log(this.states[0].active);
        for(let i=0;i<this.states.length;i++)
        {
          this.barChartLabels.push(this.states[i].state);
          this.barChartData[3].data.push(this.states[i].active);
          this.barChartData[0].data.push(this.states[i].confirmed);
          this.barChartData[2].data.push(this.states[i].recovered);
          this.barChartData[1].data.push(this.states[i].deaths);
        }
     })
     console.log("wfgr",this.barChartData[0][0]);


   }

  //  public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  ngOnInit(): void {
  }

}
