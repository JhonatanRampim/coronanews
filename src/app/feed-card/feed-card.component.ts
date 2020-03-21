import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';


@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
    private feedUrl: string = 'https://www.noticiasdeararas.com.br/feed/';
    public feeds: any;
  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit(){
   this.refreshFeed()
  }

 private refreshFeed():any {
    this.feedService.getFeedContent(this.feedUrl)
      .subscribe(
          feed => this.feeds = feed.items,
          error => console.log(error));
  }
  
}
