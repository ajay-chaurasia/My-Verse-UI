import { Component, Inject, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Article } from 'src/app/models';
import { BlogService } from 'src/app/services';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  articles: Article[]
  panelOpenState: boolean = false
  constructor(@Inject(BlogService) private blogService: BlogService) {
    this.articles = [{
      heading: "",
      subHeading: "",
      content: "",
      keywords: []
    }]
  }

  ngOnInit(): void {
    this.blogService.getPosts().pipe(
      take(1)
    ).subscribe((data) => {
      this.articles = data.articles
    })
    this.blogService.savePost()
  }

}
