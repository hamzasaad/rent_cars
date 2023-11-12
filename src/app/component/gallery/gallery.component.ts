import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/sevices/voiture.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  voitures:any;
  p:number = 1;
  constructor(private voitureService:VoitureService,private router:Router) { }

  ngOnInit(): void {
    this.getAllVoitures();
  }
  getAllVoitures() {
    this.voitureService.getVoitures().subscribe(
      (res: any) => {
        this.voitures = res;
        console.log("voitures", this.voitures);
      }
    )
  }
}
