import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PolesnoComponents } from './index';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[...PolesnoComponents],
    imports:[CommonModule, RouterModule, FormsModule],
})

export class PolesnoComponentModule {

}