import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bodmas-rule',
  templateUrl: './bodmas-rule.component.html',
  styleUrls: ['./bodmas-rule.component.scss']
})
export class BodmasRuleComponent implements OnInit {
  myForm: FormGroup;
  outputData: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      bodmasInput: ['', Validators.required]
    });
  }

  onSubmit(inputForm: FormGroup) {
    let input = String(inputForm.value.bodmasInput).toLowerCase();

    while (input.includes("sum(")) {
      let startIndex = input.indexOf('sum(');
      let sumPart = input.substring(startIndex);
      let lastIndex = sumPart.indexOf(')');
      let calFinalPart = input.substring(startIndex, startIndex + lastIndex + 1);
      let values = this.splitNumberBetweenBrackets(calFinalPart, "(", ")");
      let finalResult = this.Sum(values);
      input = input.substring(0, startIndex) + String(finalResult) + input.substring(startIndex + lastIndex + 1)
    }

    while (input.includes("avg(")) {
      let startIndex = input.indexOf('avg(');
      let sumPart = input.substring(startIndex);
      let lastIndex = sumPart.indexOf(')');
      let calFinalPart = input.substring(startIndex, startIndex + lastIndex + 1);
      let values = this.splitNumberBetweenBrackets(calFinalPart, "(", ")");
      let finalResult = this.Avg(values);
      input = input.substring(0, startIndex) + String(finalResult) + input.substring(startIndex + lastIndex + 1)
    }

    while (input.includes("percentage(")) {
      let startIndex = input.indexOf('percentage(');
      let sumPart = input.substring(startIndex);
      let lastIndex = sumPart.indexOf(')');
      let calFinalPart = input.substring(startIndex, startIndex + lastIndex + 1);
      let values = this.splitNumberBetweenBrackets(calFinalPart, "(", ")");
      let finalResult = this.Percentage(values);
      input = input.substring(0, startIndex) + String(finalResult) + input.substring(startIndex + lastIndex + 1)
    }

    while (input.includes("(")) {
      debugger;
      let startIndex = input.indexOf('(');
      let sumPart = input.substring(startIndex);
      let lastIndex = sumPart.indexOf(')');
      let calFinalPart = input.substring(startIndex, startIndex + lastIndex + 1);
      let values = this.splitNumberBetweenBrackets(calFinalPart, "(", ")");
      let finalResult = eval(values);
      input = input.substring(0, startIndex) + String(finalResult) + input.substring(startIndex + lastIndex + 1)
    }
    this.outputData = eval(input);
  }

  splitNumberBetweenBrackets(inputdata: any, startChar: any, endChar: any) {
    let startIndex = inputdata.indexOf(startChar);
    let endIndex = inputdata.indexOf(endChar) + 1
    return inputdata.substring(startIndex + 1, endIndex - 1);
  }

  Sum(inputdata: any) {
    let sumInput = String(inputdata).split(',');
    let result = 0;
    sumInput.map(x => {
      result = result + parseInt(x)
    })
    return result;
  }

  Avg(inputdata: any) {
    return this.Sum(inputdata) / String(inputdata).split(',').length;
  }

  Percentage(inputdata: any) {
    let sumInput = String(inputdata).split(',');
    return (parseInt(sumInput[0]) / parseInt(sumInput[1])) * 100;
  }

}
