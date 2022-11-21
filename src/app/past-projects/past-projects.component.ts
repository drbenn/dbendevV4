import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-projects',
  templateUrl: './past-projects.component.html',
  styleUrls: ['./past-projects.component.scss']
})
export class PastProjectsComponent implements OnInit {

  pastProjects = ['MTLT', 'Worthie', 'Retro Blackjack', 'Landing Page']
  jsonData:any;
  constructor(private httpClient: HttpClient,) { }

  ngOnInit(): void {
    this.getProjectData();
    console.log(this.jsonData);

  }

  private getProjectData() {
    const jsonFile = '../../assets/data/projectData.json';
    this.httpClient.get(jsonFile).subscribe((data)=> {
      if (data) {
        this.jsonData = data
      }
    })


  }
}
