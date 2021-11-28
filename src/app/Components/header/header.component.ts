import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  list: string[] = [
    'Traiq Selawi...',
    'Front-End Developer...',
    'System Administrator...',
  ];

  isDisplayMore = true;

  constructor() {}

  ngOnInit() {}

  showIcon() {
    this.isDisplayMore = !this.isDisplayMore;
  }
}
