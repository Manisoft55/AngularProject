import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
  styleUrls: ['./activated-route.component.scss']
})
export class ActivatedRouteComponent implements OnInit {

  constructor(private activatedRou: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRou.snapshot.params['routeid'];
    alert(id);
    // 
  }

}
