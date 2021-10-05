import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bujinkan',
  templateUrl: './bujinkan.component.html'
})
export class BujinkanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
