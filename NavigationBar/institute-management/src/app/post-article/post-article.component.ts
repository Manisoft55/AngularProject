import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.scss']
})
export class PostArticleComponent implements OnInit {
  myFormArticle:FormGroup;
  postId:any;
  errorMessage:any;
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit() {
    this.myFormArticle = this.fb.group({
      article: ['', [Validators.required, Validators.maxLength(50)]]
    })

    console.log(this.myFormArticle);
  }

  onSubmit(articleInfo:FormGroup){
    console.log(articleInfo.value.article);
    // this.http.post<Atricle>('https://reqres.in/api/posts', JSON.stringify({ title: articleInfo.value.article })).
    // subscribe(
    //   data => {
    //     // let res = new Atricle();
    //     // res = data;
    //     // this.postId = res.id;
    //     console.log(data);
    //     alert('article posted ' + this.postId);
    // });

    const headersPostApi = { sourceLanguage: 'Angular', Version: '8.4.1' };

    this.http.post<Atricle>('https://reqres.in/api/posts', 
    JSON.stringify({ title: articleInfo.value.article }), 
    { headers: headersPostApi }).
    subscribe({
        next: data => {
          this.postId = data.id;
          console.log(data);
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    });
  }
}

interface Atricle{
  id: number;
  createdAt: string;
}