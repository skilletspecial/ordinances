import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-consecrate-oil',
  templateUrl: './consecrate-oil.component.html'
})
export class ConsecrateOilComponent implements OnInit {
  public breadSelected: boolean = true;
  public waterSelected: boolean = false;

  constructor(page: Page) {
    page.actionBarHidden = false;
  }

  ngOnInit() { }

}
