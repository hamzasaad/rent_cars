import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from 'src/app/sevices/serve.service';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {
service:any;
p: number = 1;
  constructor(private serviceServe:ServeService,private router:Router) { }

  ngOnInit(): void {
    this.getAllService()
  }

  getAllService() {
    this.serviceServe.getService().subscribe(
      (res: any) => {
        this.service = res;
        console.log("service", this.service);
      }
    )
  }

}
