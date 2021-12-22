import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { MainComponent } from './main/main.component';
import { LangageComponent } from './langage/langage.component';
import { FrameworkComponent } from './framework/framework.component';
import { ProjectsComponent } from './projects/projects.component';
import { PathwayComponent } from './pathway/pathway.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { NavBoxComponent } from './nav-box/nav-box.component';
import { LangageENComponent } from './langage-en/langage-en.component';
import { PathwayENComponent } from './pathway-en/pathway-en.component';
import { ProfileENComponent } from './profile-en/profile-en.component';
import { ProjectsENComponent } from './projects-en/projects-en.component';
import { SkillsENComponent } from './skills-en/skills-en.component';
import { FrameworkENComponent } from './framework-en/framework-en.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    NavSideComponent,
    MainComponent,
    LangageComponent,
    FrameworkComponent,
    ProjectsComponent,
    PathwayComponent,
    ProfileComponent,
    SkillsComponent,
    SandboxComponent,
    NavBoxComponent,
    LangageENComponent,
    PathwayENComponent,
    ProfileENComponent,
    ProjectsENComponent,
    SkillsENComponent,
    FrameworkENComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
