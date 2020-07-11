import { Component, OnInit } from '@angular/core';
import { PostvalueService} from "../postvalue.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {

  states;
  public barChartLabels=[];
  public barChartType = 'bar';
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
  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  
  ngOnInit(): void {
    
  }

}
