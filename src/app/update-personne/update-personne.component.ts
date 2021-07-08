import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-personne',
  templateUrl:'./update-personne.component.html'
  ,
  styleUrls: ['../app.component.css']
})
export class UpdatePersonneComponent implements OnInit {
 
  constructor() { }
  modify(){
    document.getElementById('nom').removeAttribute('disabled');
    document.getElementById('prenom').removeAttribute('disabled');
    document.getElementById('email').removeAttribute('disabled');
    document.getElementById('tel').removeAttribute('disabled');
    
  }
  ngOnInit(): void {
  }

}
