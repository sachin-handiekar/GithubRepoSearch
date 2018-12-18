import { Component } from '@angular/core';
import { GithubRepo } from './model/GithubRepo';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    public gitRepo: GithubRepo;

    constructor() {
        this.gitRepo = new GithubRepo(false, null);
    }
}
