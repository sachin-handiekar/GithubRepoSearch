import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ReposearchComponent} from './components/reposearch.component';

import {GithubService} from './services/github.service';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  imports: [BrowserModule, AgGridModule.withComponents([]), HttpClientModule, FormsModule],
  declarations: [AppComponent, ReposearchComponent],
  bootstrap: [AppComponent],
  providers: [GithubService]

})
export class AppModule {
}
