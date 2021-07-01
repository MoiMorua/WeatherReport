import { Component, Input, OnInit, ViewChildren, ElementRef, ViewChild, QueryList } from '@angular/core';

@Component({
  selector: '[app-cloud]',
  templateUrl: './cloud.component.svg',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {

  @Input()
  skyType: string;    
  @Input()
  cloudClass: string;

  @ViewChild("c1")
  cloudsGroup1:ElementRef ;
  @ViewChild("c2")
  cloudsGroup2:ElementRef;
  @ViewChild("c3")
  cloudsGroup3:ElementRef;
  @ViewChild("c4")
  cloudsGroup4:ElementRef;
  @ViewChild("c5")
  cloudsGroup5:ElementRef;  

  constructor() { }

  ngOnInit(): void {
    console.log(this.skyType);
  }
  
  ngAfterViewInit(): void {
    console.log(this.cloudsGroup1);
    console.log(this.cloudsGroup2);
    console.log(this.cloudsGroup3);
    console.log(this.cloudsGroup4);
    console.log(this.cloudsGroup5);    
  }

  canDisplay(skyCondition:string):boolean{
    return skyCondition===this.skyType;
  }


}
