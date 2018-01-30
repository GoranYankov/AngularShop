import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoServices {
    constructor(private title: Title, private meta: Meta) {}

    public changeTitle(title) {
        this.title.setTitle(title);
    }

    public addMetaDescription(description) {        
        if (this.meta.getTag("name='description'") === null) {
            this.meta.addTag({name:'description', content:description});
       } else {
           this.meta.updateTag({name:'description', content:description})
       }     
    }

    public addMetaKeys(keys) {        
        if (this.meta.getTag("name='keywords'") === null) {
            this.meta.addTag({name:'keywords', content:keys});
       } else {
           this.meta.updateTag({name:'keywords', content:keys})
       }     
    }

    public addFbMeta(title, description, img, url) {
        if (this.meta.getTag("property='og:description'") === null) {
            this.meta.addTag({property:'og:description', content:description});
         } else {
           this.meta.updateTag({property:'og:description', content:description})
         }     
         if (this.meta.getTag("property='og:title'") === null) {
            this.meta.addTag({property:'og:title', content:title});
         } else {
           this.meta.updateTag({property:'og:title', content:title})
         } 
         if (this.meta.getTag("property='og:img'") === null) {
            this.meta.addTag({property:'og:img', content:img});
         } else {
           this.meta.updateTag({property:'og:img', content:img})
         } 
         if (this.meta.getTag("property='og:url'") === null) {
            this.meta.addTag({property:'og:url', content:url});
         } else {
           this.meta.updateTag({property:'og:url', content:url})
         } 


    }
}