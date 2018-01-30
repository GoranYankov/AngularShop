import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponents} from './index'
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[...CartComponents],
    imports:[CommonModule, FormsModule, FlashMessagesModule, RouterModule ],
    exports:[]
})

export class CartComponentModule {

}