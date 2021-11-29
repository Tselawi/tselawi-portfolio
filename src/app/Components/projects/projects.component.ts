import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/app/Personal';
import { PERSONALS } from 'src/app/mock-personal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  personals: Personal[] = PERSONALS;
  constructor() {}

  ngOnInit(): void {}
}
