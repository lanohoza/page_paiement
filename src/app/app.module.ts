import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { UpdateEnterpriseComponent } from './update-enterprise/update-enterprise.component';
import { ModePayeComponent } from './mode-paye/mode-paye.component';
import { FDahabiaComponent } from './fdahabia/fdahabia.component';
import { FvirementComponent } from './fvirement/fvirement.component';
import { FBancaireComponent } from './fbancaire/fbancaire.component';
import { MsgReussiComponent } from './msg-reussi/msg-reussi.component';
import { MsgErreurComponent } from './msg-erreur/msg-erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatePersonneComponent,
    UpdateEnterpriseComponent,
    ModePayeComponent,
    FDahabiaComponent,
    FvirementComponent,
    FBancaireComponent,
    MsgReussiComponent,
    MsgErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatIconModule,
   MatFormFieldModule,
   MatCardModule,
   MatInputModule,
   MatButtonModule,
   CommonModule,
   FormsModule,
   RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
