import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/sevices/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
member:any;
  constructor(private memberService: MembersService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMembers()
  }
  getAllMembers() {
    this.memberService.getMembers().subscribe(
      (res: any) => {
        this.member = res;
        console.log("member", this.member);
      }
    )
  }
}
