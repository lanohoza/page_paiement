import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-enterprise',
  templateUrl:'./update-enterprise.component.html'
  ,
  styleUrls: ['../app.component.css']
})
export class UpdateEnterpriseComponent implements OnInit {
 
 
  constructor() { }
modify(){
  document.getElementById('nomEntere').removeAttribute('disabled');
  document.getElementById('fiscal').removeAttribute('disabled');
  document.getElementById('article').removeAttribute('disabled');
  document.getElementById('adr').removeAttribute('disabled');
  document.getElementById('tel').removeAttribute('disabled');
  
}
  ngOnInit(): void {
  }

}
