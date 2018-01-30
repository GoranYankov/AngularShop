import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  ArticleFormModel } from '../../../core/models/input-models/article-form.models';
import { ArticleServices } from '../../../core/service/article.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Router } from '@angular/router';
import { SeoServices } from '../../../core/service/seo.service';

@Component({
  selector: 'admin-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  articleForm:  ArticleFormModel;
  saveBtn:boolean = true;
  editBtn:boolean = false;
  edit: Boolean = false;
  addArticle: Boolean = false;
  articles;
  constructor(
    private seo: SeoServices,
    private http: ArticleServices, 
    private msg: FlashMessagesService, 
    private router: Router) { }

  ngOnInit() {
    this.seo.changeTitle('Добавяне на статия')
    window.scrollTo(0, 0)
    this.loadePage();
  }

  loadePage() {
    this.http.getNumOfArticle({"skip":0,"numOfArticle":1000}).subscribe(articles =>{
        if(articles['success']) {
          this.articles = articles['articles'];
          console.log(this.articles)
        }
    })
  };

  onEdit() {
      this.addArticle = !this.addArticle;
      this.articleForm = new  ArticleFormModel('', '', '', '', '', '');
  }

  @Output() changeView: EventEmitter<any> = new EventEmitter();

  back() {
      this.changeView.emit('home');
  }

  submit() {
    this.articleForm['paragraph'] = this.articleForm.body.split('\n').map(x=>x.trim()).filter(x=>x !== '');
  
    this.http.addArticle(this.articleForm).subscribe(data=>{
      if(!data['success']) {
        this.msg.show('Статията не е добавен! Всички полета са задължителни', { cssClass: 'alert-danger', timeout: 3000 } )
      } else {
        this.changeView.emit('home');
        this.msg.show('Успешно доабвен Статиия', { cssClass: 'alert-success', timeout: 3000 } )
      }
    })
  }

  remove(e) {
    this.http.deleteArticle({'id':e.target.id}).subscribe(data=>{
    if(data['success']) {
       this.loadePage();
    }
  })
  }

  onEditArticle(e) {
    window.scrollTo(0, 150)
    this.addArticle = true;
    this.saveBtn = false;
    this.editBtn = true;
    for (let article of this.articles) {
      if(article._id === e.target.id)  {
        article.body = article.paragraph.join('\n\n')
        this.articleForm = new ArticleFormModel(article.title,article.img, article.url, article.body, article.keywordsString, article.description);
        this.articleForm['id'] = e.target.id;
      }

    }
  }

  updateArticle() {
    this.articleForm['paragraph'] = this.articleForm.body.split('\n').map(x=>x.trim()).filter(x=>x!=='');
    this.http.updateArticle({id:this.articleForm['id'], 'article': this.articleForm}).subscribe(info=>{
      if(info['success']) {
       this.addArticle = false;
       this.saveBtn = true;
       this.editBtn = false;
       this.loadePage();
      }
    })
  }

}