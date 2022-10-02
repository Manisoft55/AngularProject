import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import 'zone.js/dist/zone-testing';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  text:string = "test-component works!";
  constructor(private serObj:TestServiceService) { }

  ngOnInit() {
      this.serObj.studentName;
      console.log("Student name is :" , this.serObj.studentName);  
  }

  returnAlert(){
    alert("Test");
  }
  

}
