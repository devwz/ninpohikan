import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regras',
  template: `
    <p>
      regras works!
    </p>
  `,
  styles: [
  ]
})
export class RegrasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
