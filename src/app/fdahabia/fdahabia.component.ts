import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fdahabia',
  templateUrl: './fdahabia.component.html',
  styleUrls: ['../app.component.css']
})
export class FDahabiaComponent implements OnInit {
  transaction:boolean;
  payer(){
  this.transaction=false;
  
  }
  OnlyNumberAllow(event:any):boolean{
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48 || charCode>57)){
      console.log('charCode restricted is'+charCode);
      return false;
    }

    return true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
