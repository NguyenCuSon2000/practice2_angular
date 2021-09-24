import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit {
  @Input() products:any
  constructor() { }

  ngOnInit(): void {
  }

}
