import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  outputDisplay:any;
  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(result){
    console.log(result);
    alert("You have entered the user name : " + result.password);
  }

}
