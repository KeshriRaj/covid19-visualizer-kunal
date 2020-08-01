import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet } from 'ng2-charts';
import { PostvalueService} from "../postvalue.service"
import { Router } from '@angular/router';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  states;
  arr=[];
  public doughnutChartType = 'doughnut';
  public doughnutChartLegend = true;
  public doughnutChartLabels = ['Active', 'Confirmed', 'Recovered', 'Deaths'];
  public doughnutChartData = this.arr;
  public x=0;
  public y=0;
  public z=0;
  public a=0;
  doughnutChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: [
        'rgb(230, 230, 0)',
        'rgb(255, 153, 153)',
        'rgb(128, 223, 255)',
        'rgb(239, 245, 245)'
      ],
    },
  ];
  constructor(private postValue:PostvalueService,private router:Router) { }
  ngOnInit(): void {
    this.postValue.getBarData().subscribe(res=>{
      this.states=Object.values(res.data.statewise);
      console.log(this.states,typeof(this.states));
      console.log(this.states[0].active);
      for(let i=0;i<this.states.length;i++)
      {
        this.x+=(this.states[i].active);
          this.y+=(this.states[i].confirmed);
          this.z+=(this.states[i].recovered);
          this.a+=(this.states[i].deaths);
        }
      this.arr.push(this.x);
      this.arr.push(this.y);
      this.arr.push(this.z);
      this.arr.push(this.a);
        

   })
  }

}
