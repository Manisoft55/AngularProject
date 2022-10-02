import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-view-children-example',
  templateUrl: './view-children-example.component.html',
  styleUrls: ['./view-children-example.component.scss']
})
export class ViewChildrenExampleComponent implements AfterViewInit {

  firstName = 'Rajesh';
  middleName = 'Kumar';
  lastName = 'S';
 
  showFirstName=false;
  showMiddleName=true;
  showlastName=true;
 
  @ViewChildren(NgModel) modelRefList: QueryList<NgModel>;

  constructor() { }

  ngAfterViewInit() {
 
    this,this.modelRefList.changes
      .subscribe(data => {
        console.log(data)
      }
    )
  }
  show() {
    this.modelRefList.forEach(element => {
      console.log(element)
      //console.log(element.value)
    });

  }
}
