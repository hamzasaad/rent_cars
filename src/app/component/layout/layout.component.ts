import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/sevices/blog.service';
import { CategoryService } from 'src/app/sevices/category.service';
import { ComentaireService } from 'src/app/sevices/comentaire.service';
import { MarqueService } from 'src/app/sevices/marque.service';
import { MembersService } from 'src/app/sevices/members.service';
import { ServeService } from 'src/app/sevices/serve.service';
import { VoitureService } from 'src/app/sevices/voiture.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  connect: boolean = false
  blog: any;
  comments:any;
  voitures: any;
  service: any;
  marque: any;
  id = this.activateroot.snapshot.params['id'];
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private serviceServe: ServeService,private comentaireService: ComentaireService ,private voitureService: VoitureService,private blogService: BlogService ,private marqueService: MarqueService, private categoryService: CategoryService, private memberService: MembersService,  private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllService();
    this.getAllMarque();
    this.getAllBlog();
    this.getCommentaires();
  }
  getAllMarque() {
    this.marqueService.getMarques().subscribe(
      (res: any) => {
        this.marque = res;
        console.log("marque", this.marque);
      }
    )
  }
  OnChangeCategory(category: any) {
    console.log("detected value category ", category.id)
    this.voitureService.getVoitures().subscribe(
      (res: any) => {
        console.log(res)
        this.voitures = res.filter((voiture: any) => voiture.category.id == category.id)
        console.log("list of voitures", this.voitures)
      })
  }
  OnChangemarque(marque: any) {
    console.log("detected value marque ", marque.id)
    this.voitureService.getVoitures().subscribe(
      (res: any) => {
        console.log(res)
        this.voitures = res.filter((voiture: any) => voiture.marque.id == marque.id)
        console.log("list of voitures", this.voitures)
      })
  }
  getAllService() {
    this.serviceServe.getService().subscribe(
      (res: any) => {
        this.service = res;
        console.log("service", this.service);
      }
    )
  }
  getAllVoitures() {
    this.voitureService.getVoitures().subscribe(
      (res: any) => {
        this.voitures = res;
        console.log("voitures", this.voitures);
      }
    )
  }
  check() {
    if (this.state == 0) {
      this.connect = true
    } else {
      this.connect = false
    }
    console.log('connect', this.connect)
  }

  getAllBlog() {
    this.blogService.getateblog().subscribe(
      (res: any) => {
        this.blog = res;
        console.log("blog", this.blog);
      }
    )
  }

  getCommentaires() {
    this.comentaireService.Comments().subscribe(
      (res: any) => {
        this.comments = res.filter((elem:any)=>elem.blog.id==this.blog.id)
        console.log("comment sent : ", this.comments)
      }
    )
  }
}
