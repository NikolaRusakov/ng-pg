import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { SidebarPanelComponent } from './components/sidebar-panel/sidebar-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    SidebarPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
