// *** Angular ***
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 

// *** Bootstrap (ng-bootstrap) ***
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';

// *** Application ***
// Modules
import { AppRoutingModule }         from './app-routing.module';
// Services
import { StringsService }           from './services/strings/strings.service';
import { PagesService }             from './services/pages/pages.service';
import { ContactService }           from './services/contact/contact.service';
// Directives
import { PageHostDirective }        from './directives/page-host/page-host.directive';
// Components
import { AppComponent }             from './components/app-component/app.component';
import { HeaderComponent }          from './components/header/header.component';
import { PageComponent }            from './components/page/page.component';
import { FooterComponent }          from './components/footer/footer.component';
import { SectionHeaderComponent }   from './components/section-header/section-header.component';
import { SkillComponent }           from './components/skill/skill.component';
import { ExperienceComponent }      from './components/experience/experience.component';
import { HoverIconComponent }       from './components/hover-icon/hover-icon.component';
import { ContactFormComponent }     from './components/contact-form/contact-form.component';

// Application Pages
import { HomePageComponent }        from './pages/home-page/home-page.component';
import { AboutPageComponent }       from './pages/about-page/about-page.component';
import { ProjectsPageComponent }    from './pages/projects-page/projects-page.component';
import { ServicesPageComponent }    from './pages/services-page/services-page.component';
import { ContactPageComponent }     from './pages/contact-page/contact-page.component';

@NgModule({
  // Modules
  imports: 
  [
    // Angular
    BrowserModule,
    FormsModule, // NgModel lives here
    HttpClientModule,

    // Bootstrap (ng wrapper)
    NgbModule.forRoot(),

    // Application
    AppRoutingModule,
  ],
  // Services
  providers: 
  [
    StringsService,
    PagesService,
    ContactService
  ],
  // Components
  declarations: 
  [
    // Directives
    PageHostDirective,
    // Components
    AppComponent, 
    HeaderComponent,
    PageComponent,
    FooterComponent,
    SectionHeaderComponent,
    SkillComponent,
    ExperienceComponent,
    HoverIconComponent,
    ContactFormComponent,
    // Pages
    HomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    // fin
  ],
  // Dynamically loaded components
  entryComponents: 
  [ 
    HomePageComponent,
    AboutPageComponent,
    HomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ServicesPageComponent,
    ContactPageComponent
  ],
  // Run (Kickoff application)
  bootstrap: 
  [
    AppComponent
  ]
})
export class AppModule 
{ 
  public constructor()
  {
    console.log("App.module - ctor");
  }
}