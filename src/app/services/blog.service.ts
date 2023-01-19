import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "../models";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }
  getPosts(): Observable<{ message: string, articles: Article[]}> {
    return this.httpClient.get<{ message: string, articles: Article[]}>('http://localhost:3000/api/articles')
  }

  savePost() {
    this.httpClient.post<{ message: string}>('http://localhost:3000/api/articles', { heading: 'hello' })
      .subscribe(data => {
        console.log(data)
      })
  }
}
