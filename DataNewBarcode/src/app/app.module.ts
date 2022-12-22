import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import {NgxBarcodeScannerModule} from '@eisberg-labs/ngx-barcode-scanner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBarcodeScannerModule,
    // BarcodeScannerLivestreamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
