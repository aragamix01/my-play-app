import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HeaderComponent } from './intro-page/header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './intro-page/home-page/home-page.component';
import { AnounceComponent } from './intro-page/home-page/anounce/anounce.component';
import { AboutPageComponent } from './intro-page/about-page/about-page.component';
import { NewsPageComponent } from './intro-page/news-page/news-page.component';
import { GalleryPageComponent } from './intro-page/gallery-page/gallery-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'gallery', component: GalleryPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroPageComponent,
    HomePageComponent,
    AnounceComponent,
    AboutPageComponent,
    NewsPageComponent,
    GalleryPageComponent
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
