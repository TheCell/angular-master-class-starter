import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';

import { ContactsAppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { FormsModule } from '@angular/forms';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view-component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { EventBusService } from './event-bus.service';


@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabComponent, TabsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContactsService,
    EventBusService
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
