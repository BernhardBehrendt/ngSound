import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './components/main/main.component';
import { MasterControlsComponent } from './components/master-controls/master-controls.component';

@NgModule({
    declarations: [
        MainComponent,
        MasterControlsComponent
    ],
    imports: [
        BrowserModule,
        MainRoutingModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class MainModule {
}
