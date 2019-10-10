import { Injectable } from '@angular/core';
import { Component,Input, OnInit, HostBinding } from '@angular/core';

import { Article } from './article/article.model';
@Injectable({
  providedIn: 'root'
})
export class FlagserviceService {
articlen:Article;
  constructor() {

   }
   buzzdown(article:Article){
     article.votes=0;
   }
}
