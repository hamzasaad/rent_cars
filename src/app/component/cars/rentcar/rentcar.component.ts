
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from 'src/app/sevices/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrls: ['./rentcar.component.css']
})
export class RentcarComponent implements OnInit {

  date_debut: any;
  dated: any;
  datef: any;
  date_fin: any;
  nbj = 0;
  myDate = new Date(Date.now());
  voiture: any;
  id = this.activateroot.snapshot.params['id']
  formDemande: FormGroup;
  formpayement: FormGroup;
  formClient: FormGroup;
  client: any;
  payement: any;
  LocalDate: Date = new Date();
  date = new Date();
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  connect: boolean = false
  routers: any;
  submitted = false;
  

  constructor(private formBulder: FormBuilder, private voitureService: VoitureService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("date", this.date_debut);
    this.getoneVoiture();
    this.todaydate();
    this.result();
    this.formDemande = this.formBulder.group({
      date_depart: ['', Validators.required],
      date_retour: ['', Validators.required],
      heur_depart: ['', Validators.required],
      heur_retour: ['', Validators.required]
     
    })

  }
  get f() { return this.formDemande.controls; }
  datechanged($event: any) {
    console.log($event.target.value);
  }
  pathPrix(voiture: any) {
    this.formDemande.patchValue({
      prix_totale: voiture.prix
    })
  }
  getoneVoiture() {
    this.voitureService.getOneVoiture(this.id).subscribe(
      (res: any) => {
        this.voiture = res;
        console.log("voitures", this.voiture);
        this.pathPrix(this.voiture)
      }
    )
  }


  addDemande() {
    this.submitted = true;
    if (this.formDemande.invalid || this.result() == false) {
      console.log("result de test",this.result())
      return;
      
    } else {
      this.voitureService.demande(this.formDemande.value, this.userconnect.id, this.id).subscribe(
        (res: any) => {
          console.log(res);

          Swal.fire(
            'demande envoyer',
            'success'
          )

        }

      )
    }
  }


  onBlurEvent(event: any) {
    console.log(event.target.value);
    this.date_debut = event.target.value;
    console.log("date_debut", this.date_debut)
  }
  onEvent(event: any) {
    console.log(event.target.value);
    this.date_fin = event.target.value;
    console.log("date_fin", this.date_fin)
  }
  formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.date.getMonth() + 1,
        this.date.getDate(),
      ].join('-')
    );
  }
  result(){
    let test:any
    const res:any = this.formatDate(new Date());
    console.log('Date today', res);
    if (this.date_debut > res ) {
      test = false;
      console.log('test false', test);}
    else if ( this.date_fin < this.date_debut) {
        test = false;
        console.log('test false 1', test);}
    else {
      test = true;
      console.log('test true ', test);
    }
    return test;
  }

  todaydate(){
    const test1:any = this.formatDate(new Date());
    console.log('test1', test1);
    return test1;
  }
}
