import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';

import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { VisitorCardServiceService } from './Services/visitor-card-service.service';



@NgModule({
  declarations: [
    AppComponent,
    VisitorFormComponent,
 
  ],
  imports: [
  
    BrowserModule,
    FormsModule ,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    WebcamModule

  ],
  providers: [
    provideAnimationsAsync(),
    VisitorCardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
