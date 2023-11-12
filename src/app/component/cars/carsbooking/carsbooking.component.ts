import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from 'src/app/sevices/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carsbooking',
  templateUrl: './carsbooking.component.html',
  styleUrls: ['./carsbooking.component.css']
})
export class CarsbookingComponent implements OnInit {
   voiture:any;
   id = this.activateroot.snapshot.params['id'] 
   formDemande:FormGroup;
   title = 'My first AGM project';
   lat = 51.678418;
   lng = 7.809007;
  constructor(private formBulder: FormBuilder ,private voitureService: VoitureService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getoneVoiture();
  }

  getoneVoiture() {
    this.voitureService.getOneVoiture(this.id).subscribe(
      (res: any) => {
        this.voiture = res;
        console.log("voitures", this.voiture);
      }
    )
  }



}
