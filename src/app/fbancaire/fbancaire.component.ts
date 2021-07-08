import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fbancaire',
  templateUrl: './fbancaire.component.html',
  styleUrls: ['../app.component.css']
})
export class FBancaireComponent implements OnInit {

  constructor() { }
  transaction:boolean;
  payer(){
  this.transaction=true;
  
  }
  OnlyNumberAllow(event:any):boolean{
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48 || charCode>57)){
      console.log('charCode restricted is'+charCode);
      return false;
    }

    return true;
  }
  ngOnInit(): void {
  }

}
