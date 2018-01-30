import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

@NgModule({
    declarations:[ContactComponent],
    imports:[CommonModule, FormsModule, FlashMessagesModule, RouterModule ],
    exports:[]
})

export class ContactComponentModule {
    

}