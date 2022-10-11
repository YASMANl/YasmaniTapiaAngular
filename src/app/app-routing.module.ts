import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Modules/auth/login-page/login-page.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { ValidationsComponent } from './Modules/auth/validations/validations.component';
import { MarcadoresComponent } from './Modules/favoritos/marcadores/marcadores.component';
import { HistoryMenuComponent } from './Modules/history/history-menu/history-menu.component';
import { FooterComponent } from './Modules/home/footer/footer.component';
import { HeaderComponent } from './Modules/home/header/header.component';
import { TracklistComponent } from './Modules/tracks/tracklist/tracklist.component';
import { MycomponenteComponent } from './mycomponente/mycomponente.component';

const routes: Routes = [
  {
    path: '',
    component: MycomponenteComponent
  },
  {
    path: 'Login',
    component: LoginPageComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    path: 'Validations',
    component: ValidationsComponent
  },
  {
    path: 'Header',
    component: HeaderComponent
  },
  {
    path: 'Footer',
    component: FooterComponent
  },
  {
    path: 'Tracklist',
    component: TracklistComponent
  },
  {
    path: 'History',
    component: HistoryMenuComponent
  },
  {
    path: 'Marcadores',
    component: MarcadoresComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
