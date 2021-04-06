import { UpperCasePipe } from "@angular/common";

export class Produto {
    
    nome:string;
    email:string;
    valor:number;
    desconto: number;
    fabricacao:Date;

    constructor(nome:string, email:string, valor:number, desconto:number, fabricacao:any){
        this.nome = nome;
        this.email = email;
        this.desconto = desconto;
        this.fabricacao = fabricacao;
        this.valor = valor;
        

    }


}
