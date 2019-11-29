import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.page.html',
  styleUrls: ['./leitor.page.scss'],
})
export class LeitorPage implements OnInit {
  url: string = 'https://neoxscan.com/uploads/manga/tomb-raider-king/chapters/';
  img: any;
  i: number;
  cap: number;
  //films: Observable<any>;
  constructor(public httpClient: HttpClient,public route: ActivatedRoute,public router: Router) {
    //let i = 1;
    this.i = 1;

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cap = this.router.getCurrentNavigation().extras.state.user.cap;
        if(this.cap < 10 ) this.url = this.url + 0;
        this.prox();
      }
    });

  }

  ngOnInit() {
  }

  prox() {
    if (this.i < 10) this.img = this.url + this.cap + '/0' + this.i + ".jpg";
    else this.img = this.url + this.cap + '/' + this.i + ".jpg";
    this.i++;
    console.log(this.img);
  }

}
