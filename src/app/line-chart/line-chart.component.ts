import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PostvalueService} from "../postvalue.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  states;
  public lineChartLabels=[];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
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
        console.log("TYPEEEEEEEEEEE",typeof(this.states[i].active));

        this.lineChartLabels.push(this.states[i].state);
        this.lineChartData[3].data.push(this.states[i].active);
        this.lineChartData[0].data.push(this.states[i].confirmed);
        this.lineChartData[2].data.push(this.states[i].recovered);
        this.lineChartData[1].data.push(this.states[i].deaths);
      }
      console.log("wfgr",this.lineChartData[0]);
   })
   }
  // lineChartData: ChartDataSets[] = [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  // ];

  // lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  // lineChartLegend = true;
  lineChartPlugins = [];
  // lineChartType = 'line';

  ngOnInit(): void {
  }

}
