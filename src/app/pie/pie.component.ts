import { Component, OnInit } from '@angular/core';
import { PostvalueService} from "../postvalue.service"
import { Router } from '@angular/router';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
   public pieChartLabels = ['Active', 'Confirmed', 'Deaths', 'Recovered'];
   arr=[];
  public pieChartData = []=this.arr;
  public pieChartType = 'pie';
  pieChartColors: Color[] = [
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
  states;
  public x=0;
  public y=0;
  public z=0;
  public a=0;
  constructor(private postValue:PostvalueService,private router:Router) {
    this.postValue.getBarData().subscribe(res=>{
      
      console.log("DEFAULTTTTTTTTTTTTTTTTTT",this.pieChartData);

        this.states=Object.values(res.data.statewise);
        console.log("STATESSSSSSSSSSSSSSSSSSSSSSSSSSSSS",this.states)
        for(let i=0;i<this.states.length;i++)
        {
          console.log("TYPEEEEEEEEEEE",(this.states[i].active));
          this.x+=(this.states[i].active);
          this.y+=(this.states[i].confirmed);
          this.z+=(this.states[i].recovered);
          this.a+=(this.states[i].deaths);
        }
        console.log("TYPEEEEEEEEEEE",typeof(this.x));

      this.arr.push(this.x);
     this.arr.push(this.y);
      this.arr.push(this.a);
      this.arr.push(this.z);
        
      console.log("Valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",typeof(this.x))

        console.log("xxxxxxxxxxxxxxxxxxxxxx",this.pieChartData);
     })
   }

  ngOnInit(): void {
  }

}
