import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss']
})
export class RxJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const obs = interval(5000)
	           .pipe(
	               take(10),
	               tap(i => i )
	           );
	

	obs.subscribe(value => console.log("User 1 received " + value));
	

	obs.subscribe(value => console.log("User 2 received " + value));

  obs.subscribe(value => console.log("User 3 received " + value));

  obs.subscribe(value => console.log("User 4 received " + value));  

  }

}
