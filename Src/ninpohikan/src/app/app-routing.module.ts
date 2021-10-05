import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BujinkanComponent } from './bujinkan/bujinkan.component';
import { IndexComponent } from './index/index.component';
import { NinjutsuComponent } from './ninjutsu/ninjutsu.component';
import { RegrasComponent } from './regras/regras.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'bujinkan', component: BujinkanComponent
  },
  {
    path: 'ninjutsu', component: NinjutsuComponent
  },
  {
    path: 'regras', component: RegrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
