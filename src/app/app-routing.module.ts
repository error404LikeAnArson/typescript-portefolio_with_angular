import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { LangageComponent } from './langage/langage.component';
import { FrameworkComponent } from './framework/framework.component';
import { ProjectsComponent } from './projects/projects.component';
import { PathwayComponent } from './pathway/pathway.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'Langage', component: LangageComponent},
  { path: 'Framework', component: FrameworkComponent},
  { path: 'Projects', component: ProjectsComponent},
  { path: 'Pathway', component: PathwayComponent},
  { path: 'Profile', component: ProfileComponent},
  { path: 'Skills', component: SkillsComponent},
  { path: 'Sandbox', component: SandboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
