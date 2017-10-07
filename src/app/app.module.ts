import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HeaderComponent } from './intro-page/header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { VideoCoverComponent } from './intro-page/video-cover/video-cover.component';
import { CarouselComponent } from './intro-page/carousel/carousel.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoCoverComponent,
    CarouselComponent,
    IntroPageComponent
  ],
  imports: [
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
