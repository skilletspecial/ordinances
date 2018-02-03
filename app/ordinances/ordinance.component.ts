import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ns-ordinance',
    moduleId: module.id,
    templateUrl: './ordinance.component.html',
})
export class OrdinanceComponent implements OnInit {
    @Input() title: string = '';

    constructor() { }

    ngOnInit() { }
}