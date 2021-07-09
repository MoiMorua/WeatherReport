import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: '[app-snow]',
  template: `
  <svg:circle #snow [attr.cx]="x" cy="50%" r="5" fill="#FFF">
      <animate attributeName="cx" attributeType="XML" repeatCount="indefinite" dur="1s" from="-120" to="120">
      </animate>	
  </svg:circle>`
})
export class SnowComponent implements OnInit {

  @Input()
  x;

  @ViewChild('snow')
  snow;
    
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    // this.animate();
  }
  
  animate(){
    let timeline = gsap.timeline();
    gsap.to(this.snow.nativeElement,
      {
        y:800,
        duration: 5,
        yoyo: true 
      }
    );
    timeline.to(this.snow.nativeElement,{
      duration: 2,
      x: -75,                 
      // repeat: -1,
      ease: 'easeIn'
    });
    timeline.to(this.snow.nativeElement,{
      duration:  3,
      x: 75,            
      // repeat: -1,
      ease: 'linear'
    });    
    timeline.to(this.snow.nativeElement,{
      duration:  3,
      x: 0,            
      // repeat: -1,
      ease: 'easeOut'
    });    
    timeline.repeat();
    
  }

}
