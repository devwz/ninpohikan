import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninjutsu',
  templateUrl: './ninjutsu.component.html'
})
export class NinjutsuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
