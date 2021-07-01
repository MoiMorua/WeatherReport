import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: '[app-rain]',
  template: `<svg:rect #drop [attr.x]="x" [attr.y]="y" height="25" width="5" fill="#0029B9">
        <!-- <animate attributeType="XML" attributeName="y" from="-100" to="800" repeatCount="indefinite" dur=".5s" /> -->
    </svg:rect>`,  
})
export class RainComponent implements OnInit {

  @ViewChild('drop')
  drop;

  @Input()
  x:number;
  @Input()
  y:number;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.drop);
    this.animate();
  }


  animate(){
    gsap.to(this.drop.nativeElement,{
      duration: 0.5,
      y: 800,
      delay: Math.random() * 3,
      // yoyo: true,
      repeat: -1,
      ease: 'easeIn'
    });
  }

}
