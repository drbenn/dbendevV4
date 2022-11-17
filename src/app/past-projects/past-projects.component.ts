import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-projects',
  templateUrl: './past-projects.component.html',
  styleUrls: ['./past-projects.component.scss']
})
export class PastProjectsComponent implements OnInit {

  pastProjects = ['MTLT', 'Worthie', 'Retro Blackjack', 'Landing Page']
  constructor() { }

  ngOnInit(): void {
  }

}
