import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class SharedModule { }
