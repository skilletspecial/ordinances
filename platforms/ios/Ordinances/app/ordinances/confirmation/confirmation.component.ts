import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
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
