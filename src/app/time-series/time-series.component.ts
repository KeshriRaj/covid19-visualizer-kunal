import { Component, OnInit } from '@angular/core';
import { PostvalueService} from "../postvalue.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent implements OnInit {
  states;
  public barChartLabels=[];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data:[],label:"Confirmed"},
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
      console.log("wfgr",this.barChartData[0]);
   })
   }
   public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
  }

}
