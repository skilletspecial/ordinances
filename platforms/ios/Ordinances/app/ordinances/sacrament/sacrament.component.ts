import { Component, OnInit } from '@angular/core';
import { Color } from "ui/page/page";
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-sacrament',
  templateUrl: './sacrament.component.html'
})
export class SacramentComponent implements OnInit {
  public actionBarBackground: Color = new Color('#313B44');
  public actionBarColor: Color = new Color('#F4EBE1');
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
