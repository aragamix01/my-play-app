import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HeaderComponent } from './intro-page/header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap';
import { VideoCoverComponent } from './intro-page/video-cover/video-cover.component';
import { CarouselComponent } from './intro-page/video-cover/carousel/carousel.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GalleryComponent } from './intro-page/gallery/gallery.component';
import { JetsupaComponent } from './intro-page/jetsupa/jetsupa.component';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './intro-page/news/news.component';

const appRoutes: Routes = [
  { path: '', component: VideoCoverComponent},
  { path: 'home', component: VideoCoverComponent },
  { path: 'about', component: JetsupaComponent },
  { path: 'news', component: NewsComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoCoverComponent,
    CarouselComponent,
    IntroPageComponent,
    GalleryComponent,
    JetsupaComponent,
    NewsComponent
  ],
  imports: [
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
