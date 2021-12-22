import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LangageComponent } from './langage/langage.component';
import { LangageENComponent } from './langage-en/langage-en.component';
import { FrameworkComponent } from './framework/framework.component';
import { FrameworkENComponent } from './framework-en/framework-en.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsENComponent } from './projects-en/projects-en.component';
import { PathwayComponent } from './pathway/pathway.component';
import { PathwayENComponent } from './pathway-en/pathway-en.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileENComponent } from './profile-en/profile-en.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsENComponent } from './skills-en/skills-en.component';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: '-en', component: MainComponent},
  { path: 'Langage', component: LangageComponent},
  { path: 'Langage-en', component: LangageENComponent},
  { path: 'Framework', component: FrameworkComponent},
  { path: 'Framework-en', component: FrameworkENComponent},
  { path: 'Projects', component: ProjectsComponent},
  { path: 'Projects-en', component: ProjectsENComponent},
  { path: 'Pathway', component: PathwayComponent},
  { path: 'Pathway-en', component: PathwayENComponent},
  { path: 'Profile', component: ProfileComponent},
  { path: 'Profile-en', component: ProfileENComponent},
  { path: 'Skills', component: SkillsComponent},
  { path: 'Skills-en', component: SkillsENComponent},
  { path: 'Sandbox', component: SandboxComponent},
  { path: 'Sandbox-en', component: SandboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
