import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-baptism',
  templateUrl: './baptism.component.html'
})
export class BaptismComponent implements OnInit {
  public breadSelected: boolean = true;
  public waterSelected: boolean = false;

  constructor(page: Page) {
    page.actionBarHidden = false;
  }

  ngOnInit() { }

  tapBread() {
    this.breadSelected = true;
    this.waterSelected = false;
  }

  tapWater() {
    this.breadSelected = false;
    this.waterSelected = true;
  }

}
