import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input',
    template: ` <input type="text" id="create_name" /> `,
    styles: [],
})
export class InputComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
