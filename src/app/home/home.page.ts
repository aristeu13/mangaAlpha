import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  img: any;
  capas: Observable<any>;
  sinpose: Array<string>;
  picture: Array<string>;
  manga: string;
  constructor(private router: Router, public httpClient: HttpClient) {
    this.sinpose = [];
    this.picture = [];
    /*this.capas=[
      {capa:"../assets/capa1.jpg",titulo:"One Piece",sinpose:"One Piece (ワンピース, Wan Pīsu) é uma série de mangá escrita e ilustrada por Eiichiro Oda. ... Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o One Piece, a fim de se tornar o próximo Rei dos Piratas. asdad asd asdad asd asd asd asd asd  asdasdasdas"},
      {capa:"../assets/capa2.jpg",titulo:"One Piece",sinpose:"One Piece (ワンピース, Wan Pīsu) é uma série de mangá escrita e ilustrada por Eiichiro Oda. ... Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o One Piece, a fim de se tornar o próximo Rei dos Piratas."},
      {capa:"../assets/capa3.jpg",titulo:"One Piece",sinpose:"One Piece (ワンピース, Wan Pīsu) é uma série de mangá escrita e ilustrada por Eiichiro Oda. ... Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o One Piece, a fim de se tornar o próximo Rei dos Piratas."},
      {capa:"../assets/capa4.jpg",titulo:"One Piece",sinpose:"One Piece (ワンピース, Wan Pīsu) é uma série de mangá escrita e ilustrada por Eiichiro Oda. ... Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o One Piece, a fim de se tornar o próximo Rei dos Piratas."},
    ];*/
    

    this.img = "https://unionmangas.top/leitor/mangas/Hinomaru%20Zumou/01/03.png";

    //verificar tamanho da descricao e limitar
    /*for(let i=0;i<this.capas.length;i++){
      let max=150;
      if(this.capas[i].sinpose.length>max)  this.sinpose[i]=this.capas[i].sinpose.substring(0,max)+" ...";
      else  this.sinpose[i] = this.capas[i].sinpose;

    }*/
    console.log(this.sinpose);
  }


  detalhesManga(manga) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: manga
      }
    };
    this.router.navigate(['detalhes-manga'], navigationExtras);
  }

  pesquisar(manga) {//https://kitsu.io/api/edge/manga?filter[text]=tomb
    console.log(manga);
    this.httpClient.get('https://kitsu.io/api/edge/manga?filter[text]=' + manga)
      .subscribe(data => {
        console.log(data["data"]);
        this.capas = data["data"];

        /*this.httpClient.get(data["data"].links.self)
        .subscribe(data =>{
          console.log(data);
        })*/

        //limitando numero maximo de caracteres
        for (let i in this.capas) {
          let max = 150;
          if (this.capas[i].attributes.synopsis.length > max) this.sinpose[i] = this.capas[i].attributes.synopsis.substring(0, max) + " ...";
          else this.sinpose[i] = this.capas[i].attributes.synopsis;
          //console.log(data["data"][i].links.self);
          //pegando a capa
          /*this.httpClient.get(data["data"][i].links.self)
            .subscribe(data => {
              //console.log(data["data"].attributes.posterImage.original);
              this.capas[i].capa = data["data"].attributes.posterImage.original;
            })*/
        }
        //synopsis
      })
  }

}
