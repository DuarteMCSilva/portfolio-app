import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { CurriculumComponent } from './components/pages/curriculum/curriculum.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SocialIconsComponent } from './components/layout/footer/social-icons/social-icons.component';
import { NavArrowsComponent } from './components/shared/nav-arrows/nav-arrows.component';
import { PopBallComponent } from './components/pages/pop-ball/pop-ball.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'cv', component: CurriculumComponent },
  { path: 'css/pop-ball', component: PopBallComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PortfolioComponent,
    CurriculumComponent,
    ContactsComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent,
    NavArrowsComponent,
    PopBallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
