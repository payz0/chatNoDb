import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {NgxImageCompressService} from 'ngx-image-compress';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { PetaComponent } from './peta/peta.component';

@NgModule({
  declarations: [
    AppComponent,
    PetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2ImgMaxModule 
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
