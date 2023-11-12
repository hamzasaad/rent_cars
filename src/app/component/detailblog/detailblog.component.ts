import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/sevices/blog.service';
import { ComentaireService } from 'src/app/sevices/comentaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
  comments:any
  blog: any;
  id = this.activateroot.snapshot.params['id'];
  formcomment :FormGroup
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor( private formBuilder: FormBuilder,private comentaireService:ComentaireService,private blogService: BlogService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCommentaires();
    this.getOneBlog();
    this.formcomment = this.formBuilder.group({
      sujet: ['', Validators.required]
    })
  }

  getOneBlog() {
    this.blogService.getOneBlog(this.id).subscribe(
      (res: any) => {
        this.blog = res;
        console.log("blog detail", this.blog);
      }
    )
  }

  addCommentaire() {
    this.comentaireService.addComment(this.formcomment.value, this.userconnect.id, this.id).subscribe(
      (res: any) => {
        console.log("comment sent : ", res)
        Swal.fire({
          icon: 'success',
          text: 'Comment :D'
        })
        this.getCommentaires()
      }
    )
  }
  getCommentaires() {
    this.comentaireService.Comments().subscribe(
      (res: any) => {
        this.comments = res.filter((elem:any)=>elem.blog.id==this.id)
        console.log("comment sent : ", this.comments)
      }
    )
  }

}
