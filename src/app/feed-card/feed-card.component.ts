import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';


@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
    feeds: any[] = [];
    news: String[] = [];
    source: any[] = [];
    constructor(
    private feedService: FeedService
  ) { }

  async ngOnInit(){
    this.news.push('https://www.noticiasdeararas.com.br/feed/','https://www.jornalcidade.net/rss','https://conchalemnoticias.com.br/rss', 'https://opopularmm.com.br/rss')
    this.news.map(async url => {
      await this.refreshFeed(url)
    });
  }

 private refreshFeed(url):any {
    this.feedService.getFeedContent(url)
      .subscribe(async res => {
        this.source.push(res.items)
        console.log(this.source);
        res.items.map(feed => {
        this.feeds.push(feed);
      }); 
    });
  }
}
