import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {

  employeeList = [
    {
      'name':'Srikanth',
      'age':'25',
      'isGraduate':true,
      'graduateDetails':{
        'collegename':'abc College',
        'course':'cse'
      }
    },
    {
      'name':'Deepak',
      'age':'19',
      'isGraduate':false,
      'graduateDetails':{}
    }
  ]

  TestingButtonClick():void{
    alert('Testing button Clicked');
  }



}
