import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fvirement',
  templateUrl: './fvirement.component.html',
  styleUrls: ['../app.component.css']
})
export class FvirementComponent implements OnInit {
    //option='Laivraison à domicile';
 //option='Point de livraison';
  option='Point de livraison chez le vendeur';
  



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
