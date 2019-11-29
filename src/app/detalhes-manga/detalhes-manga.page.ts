import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detalhes-manga',
  templateUrl: './detalhes-manga.page.html',
  styleUrls: ['./detalhes-manga.page.scss'],
})
export class DetalhesMangaPage implements OnInit {

  data: object;
  capitulos: any;
  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient) {

    this.capitulos = [
      { cap: 1 },
      { cap: 2 },
      { cap: 3 },
      { cap: 4 },
      { cap: 5 },
      { cap: 6 },
      { cap: 7 },
      { cap: 8 },
      { cap: 9 },
      { cap: 10 },
      { cap: 11 },
      /*{ cap: 12 },
      { cap: 13 },
      { cap: 14 },
      { cap: 15 },
      { cap: 16 },
      { cap: 17 },
      { cap: 18 },
      { cap: 19 },
      { cap: 20 },
      { cap: 21 },
      { cap: 22 },
      { cap: 23 },
      { cap: 24 },
      { cap: 25 },
      { cap: 26 },
      { cap: 27 },
      { cap: 28 },
      { cap: 29 },
      { cap: 30 },
      { cap: 31 },
      { cap: 32 },
      { cap: 33 }*/
    ]
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        /*this.http.get('https://www.neoxscan.com/search?' + this.data.attributes.canonicalTitle)
          .subscribe(data => {
            //console.log(data["suggestions"][0].data);
            console.log(data);
          });*/
      }
    });

  }

  ngOnInit() {

  }

  search(manga) {
    //http://unionmangas.net/assets/busca.php?q=
    /*var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });*/

    /*let postData = {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
    }*/
    /*
    let postData = "one";
    console.log("passou por aqui")
    this.http.post("https://unionmangas.top/assets/busca.php?q=", postData)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });*/
  }

  leitor(cap) { //data.attributes.canonicalTitle
    //https://www.neoxscan.com/search


    //console.log(data["suggestions"][0].data);
    let navigationExtras: NavigationExtras = {
      state: {
        user: cap,
      }
    };
    this.router.navigate(['leitor'], navigationExtras);

  }
}
