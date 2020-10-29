import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
//  public link = "/registration";
  constructor(public router: Router) { }

  ngOnInit(): void {

    // this.link = this.router.getCurrentNavigation;
    // console.log(this.router.getCurrentNavigation());
    // this.link = (this.router.url).toString();
  }

  // Link(link){
  //   this.link = link;
  //   console.log(this.link);
  //   this.router.navigate([link]);
  // }

}
