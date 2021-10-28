import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

 values=[];
 numDiv = 1;


  constructor() { }

  ngOnInit() {
  }

  removevalue(i){
    this.values.splice(i,1);
  }

  addvalue(){
    this.values.push({value: ""});
  }

  getTotal() {
    let total = 0;
    for (var i = 0; i < this.values.length; i++) {
        if (this.values[i].value) {
            total += this.values[i].value;
        }
    }
    return total;
  } 

  getDiv(){
    let div = this.numDiv;
    let total = this.getTotal()
    let res = total/div;
    return res;
  }

}
