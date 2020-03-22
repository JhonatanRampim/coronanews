import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedCardComponent }   from './feed-card/feed-card.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '',
    component: FeedCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
