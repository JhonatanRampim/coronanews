import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';


@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
    feeds: any = [];
    news: String[] = [];
    filtereditems: any[] = [];
    constructor(
    private feedService: FeedService
  ) { }

  async ngOnInit(){
    this.news.push('https://www.noticiasdeararas.com.br/feed/','https://www.jornalcidade.net/rss','https://conchalemnoticias.com.br/rss', 'https://opopularmm.com.br/rss', 'https://reporterbetoribeiro.com.br/rss')
    this.news.map(async url => {
     await this.refreshFeed(url);
    });
  }

 private refreshFeed(url):any {
    this.feedService.getFeedContent(url)
      .subscribe(async res => {
        res.items.map(feed => {
           this.filtereditems = res.items.filter(item => {
             if(item.description.includes("Covid-19")||item.description.includes("Covid-19")|| item.description.includes("Corona Vírus") || item.description.includes("Vírus") || item.description.includes("Corona") ||item.description.includes( "quarentena") || item.description.includes("estado de emergência") || item.description.includes("Coronavírus") || item.description.includes("coronavírus") ){
               return item;
             }
            });
        }); 
        this.filtereditems.map(result => {
          this.feeds.push(result);
        });
    });
  }
}
