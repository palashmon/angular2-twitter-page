import { Component } from '@angular/core';
import { TweetComponent } from './tweet.component'
import { TweetService } from './tweet.service';

@Component({
  selector: 'my-app',
  template: `
		<div class="container">
			<div class="row">
				<h3>Tweet Component</h3>
				<div *ngFor="let tweet of tweets">
					<tweet [data]="tweet"></tweet>
			</div>
			</div>  
		</div>   
	`
})

export class AppComponent {

  tweets: any[];
    
	constructor(tweetService: TweetService){
		this.tweets = tweetService.getTweets();
	}
}
