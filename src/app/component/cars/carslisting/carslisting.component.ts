import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/sevices/category.service';
import { MarqueService } from 'src/app/sevices/marque.service';
import { VoitureService } from 'src/app/sevices/voiture.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-carslisting',
  templateUrl: './carslisting.component.html',
  styleUrls: ['./carslisting.component.css']
})
export class CarslistingComponent implements OnInit {
  dete1: any;
  category: any;
  marque: any;
  voitures: any;
  client: any;
  searchFilter: any = '';
  //rpublic voiture:Voitur[];

  p: number = 1;

  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  connect: boolean = false
  routers: any;
  constructor(private voitureService: VoitureService, private marqueService: MarqueService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getAllVoitures();
    this.getAllMarque();
    this.getAllCategory();
    this.check()

  }
  getAllVoitures() {
    this.voitureService.getVoitures().subscribe(
      (res: any) => {
        this.voitures = res;
        console.log("voitures", this.voitures);
      }
    )
  }
  getAllClient() {
    this.voitureService.getOneClient(this.userconnect.id2).subscribe(
      (res: any) => {
        this.client = res;
        console.log("client", this.client);
      }
    )
  }
  getAllMarque() {
    this.marqueService.getMarques().subscribe(
      (res: any) => {
        this.marque = res;
        console.log("marque", this.marque);
      }
    )
  }
  getAllCategory() {
    this.categoryService.getategorys().subscribe(
      (res: any) => {
        this.category = res;
        console.log("category", this.category);
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


  check() {
    if (this.state == 0) {
      this.connect = true
    } else {
      this.connect = false
    }
    console.log('connect', this.connect)
  }
  // public searchVoiture(key: String): void {
  //const results: Voitur[]=[]; 
  //for(const voitur of this.voitures){
  //if (voitur.name.toLowerCase().indexOf(key.toLowerCase()) !== -1){
  //results.push(voitur);
  //}
  //}
  //this.voitures = results;
  //if(results.length ==0 || !key){
  //this.getAllVoitures
  //}
  //}
  onBlurEvent(event: any) {
    console.log(event.target.value);
    this.dete1 = event.target.value;
    console.log("date_debut", this.dete1)
  
  }
  Recherche(date:any) {

    this.voitureService.getcars(date).subscribe(
      (res: any) => {
        console.log(res);
        this.voitures = res;
      

      }

    )

  }
}
