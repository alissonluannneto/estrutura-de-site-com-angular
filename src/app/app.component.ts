import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aulaangular';
  nome = '';
  vetor = ['pc','desktop','celular','cadeira game'];
  add(){
    let n = this.nome;
    this.vetor.push(n);
    this.nome='';
  }

  remove(x:any){
    this.vetor.splice(x,1)
  }
  
}
