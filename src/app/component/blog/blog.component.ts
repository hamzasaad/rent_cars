import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/sevices/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: any;
  p: number = 1;
  constructor(private formBulder: FormBuilder, private blogService: BlogService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllBlog();
  }

  getAllBlog() {
    this.blogService.getateblog().subscribe(
      (res: any) => {
        this.blog = res;
        console.log("blog", this.blog);
      }
    )
  }

}
