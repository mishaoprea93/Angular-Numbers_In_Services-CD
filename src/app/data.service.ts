import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  alphanumbers:number[]=[];
  betanumbers:number[]=[];
  constructor() { }

  retrieveAlphaNumbers():number[]{
    return this.alphanumbers;
  }
  retrieveBetaNumbers():number[]{
    return this.betanumbers;
  }
  addAlphaNumber(){
    this.alphanumbers.push(Math.floor(Math.random()*10));
  }

  addBetaNumber(){
    this.betanumbers.push(Math.floor(Math.random()*10));
  }

  AlphanumbersSum(){
    let Alphasum:number=0;
    for (let i=0;i<this.alphanumbers.length;i++){
      Alphasum+=this.alphanumbers[i];
    }
    return Alphasum;
  }

  BetanumbersSum(){
    let Betasum:number=0;
    for (let i=0;i<this.betanumbers.length;i++){
      Betasum+=this.betanumbers[i];
    }
    return Betasum;
  }

  difference(){
    let rez:number=this.AlphanumbersSum()-this.BetanumbersSum();
    return rez;
  }
}
