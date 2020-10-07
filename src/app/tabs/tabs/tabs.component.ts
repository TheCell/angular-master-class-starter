import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public tabs: Array<TabComponent> = new Array();

  constructor() { }

  ngOnInit(): void {
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      this.select(tab);
    }

    this.tabs.push(tab);
  }

  select(tab: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }
}
