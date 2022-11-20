import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  burgerClasses= ['line-1', 'line-2', 'line-3'];
  constructor() { }

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
  }

