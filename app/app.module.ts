import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LikeComponent } from './like.component';
import { TweetComponent } from './tweet.component'
import { TweetService } from './tweet.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TweetComponent,
		LikeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TweetService]
})
export class AppModule { }
