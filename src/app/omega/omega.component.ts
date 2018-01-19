import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service'

import{seq2}

@Component({
  selector: 'app-omega',
  templateUrl: './omega.component.html',
  styleUrls: ['./omega.component.css']
})
export class OmegaComponent implements OnInit {
  number:number;
  
  constructor(private _dataService:DataService) { }

  ngOnInit() {
  }
  difference(){
    this.number=this._dataService.difference();
  }
}
