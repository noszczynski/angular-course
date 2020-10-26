import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="btn text-white float-right"
    >
      Button
    </button>
  `,
  styles: [
    `
      h4 {
        color: red
      }
    `
  ]
})

export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
