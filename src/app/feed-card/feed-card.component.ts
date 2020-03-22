import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';

let result;
@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
    feeds: any = [];
    news: String[] = [];
    source: any[] = [];
    filtro: String[] = ["Covid-19", "Corona Vírus", "Vírus", "Corona", "quarentena", "estado de emergência", "Coronavírus", "coronavírus"];
    constructor(
    private feedService: FeedService
  ) { }

  async ngOnInit(){
    this.news.push('https://www.noticiasdeararas.com.br/feed/','https://www.jornalcidade.net/rss','https://conchalemnoticias.com.br/rss', 'https://opopularmm.com.br/rss')
    this.news.map(async url => {
     await this.refreshFeed(url);
    });
  }

 private refreshFeed(url):any {
    this.feedService.getFeedContent(url)
      .subscribe(async res => {
        res.items.map(feed => {
          result = res.items.filter(item => this.filtro.map(filtro => item.title.includes(filtro)));
        }); 
        console.log(result);
        this.feeds.push(result);
        console.log(this.feeds)
      //   res.items.map(feed => {
      //   this.feeds.push(feed);
      // }); 
    });
  }
}
