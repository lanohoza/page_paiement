import { Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
title = 'app';
 typeAchteur='personne';
 transaction:boolean;
 payer(){
 this.transaction=false;
 if(this.transaction){
   document.getElementById('paye').style.background="#838aad";
 }
 }
}
