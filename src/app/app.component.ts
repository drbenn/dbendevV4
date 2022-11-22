import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  burgerClasses= ['line-1', 'line-2', 'line-3'];
  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
  }

  setBurgerClass(event:any) {
    const nodeList = Array(event.target.childNodes)[0];

    nodeList.forEach((nodeItem:any) => {
      const clss:string = nodeItem.className;
      const lastChar: string | number = clss[clss.length-1];
      let burgerIndex:number = Number(clss[5]) - 1;

      if (lastChar !== 'x') {
        this.burgerClasses[burgerIndex] = this.burgerClasses[burgerIndex] + "-x";
        }
        else {
          this.burgerClasses[burgerIndex] = this.burgerClasses[burgerIndex].substring(0,6);
        }
      })
    }

    goDown1() {
      console.log('DOWN 1');

      this.scroller.scrollToAnchor("target-blog");
    }
    goDown2() {
      //this.scroller.scrollToAnchor("targetGreen");
      let docCheck = document.getElementById("target-past-projects");
      if (docCheck) {
          docCheck!.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
      }
    }

    goDown3() {
      this.router.navigate([], { fragment: "target-footer" });
    }
  }
