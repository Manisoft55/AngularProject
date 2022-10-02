import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  studentName;

  constructor() { 
    this.studentName = "Test";
  }

  setStudentName(name){
    this.studentName = name;
  }

  getStudentName(){
    return this.studentName;
  }
}
