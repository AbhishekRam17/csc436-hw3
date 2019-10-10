import { Component,Input, OnInit, HostBinding } from '@angular/core';
import {Article} from './article.model';
import { RouterLink } from '@angular/router';
import {FlagserviceService} from '../flagservice.service'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article:Article;
  
 constructor(private flagserviceService:FlagserviceService) {

 }

 voteUp() : boolean {
 this.article.voteUp();
 return false;

 }

 voteDown() : boolean {
 this.article.voteDown();
 return false;
 }

 
 



  ngOnInit() {
  }

  flagArticle(article:Article):boolean{
    console.log('flagging article'+ article.title)
    this.flagserviceService.buzzdown(this.article)
    return false;
 
  }

}
