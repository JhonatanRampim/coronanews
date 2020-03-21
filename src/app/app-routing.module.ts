import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedCardComponent }   from './feed-card/feed-card.component';
import { FeedService } from './services/feed.service';

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
