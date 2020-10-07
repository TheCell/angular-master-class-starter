import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() public title = '';

  @Input() public selected = false;

  constructor(private tabsComponent: TabsComponent) {
  }

  ngOnInit(): void {
    this.tabsComponent.addTab(this);
  }

}
