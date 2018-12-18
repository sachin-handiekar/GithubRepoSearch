import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GithubService} from '../services/github.service';

import {GithubRepo} from '../model/GithubRepo';

@Component({
  selector: 'search-form',
  templateUrl: 'reposearch.component.html'
})

export class ReposearchComponent implements OnInit {
  @Input() githubRepo: GithubRepo;
  @Output() userUpdated: EventEmitter<GithubRepo> = new EventEmitter<GithubRepo>();

  columnDefs = [
    {headerName: 'Id', field: 'id'},
    {headerName: 'Repository Name', field: 'full_name'},
    {headerName: 'Owner', field: 'owner.login'},
    {headerName: 'Forks', field: 'forks_count'},
    {headerName: 'StarGazers', field: 'stargazers_count'},
    {headerName: 'Url', field: 'html_url'}
  ];

  rowData = [];


  gridOptions = {
    enableSorting: true,
    enableFilter: true,
    suppressRowClickSelection: true,
    groupSelectsChildren: true,
    debug: true,
    rowSelection: 'multiple',
    enableColResize: true,
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    enableRangeSelection: true,
    columnDefs: this.columnDefs,
    pagination: true,
    defaultColDef: {
      editable: true
    }
  };

  constructor(private _githubService: GithubService) {
  }

  ngOnInit() {

    if (this.githubRepo) {
      this.githubRepo.user = false;
      this.getUserInformation();
    }

  }

  searchUser() {
    if (this.githubRepo.repositoryName && this.githubRepo.repositoryName.length > 0) {
      // this._githubService.updateRepositoryName(this.githubRepo.repositoryName);
      this.getUserInformation();
    } else {
      this.githubRepo.user = false;
    }
  }

  getUserInformation() {
    if (this.githubRepo.repositoryName && this.githubRepo.repositoryName.length > 0) {

      this._githubService.getRepository(this.githubRepo.repositoryName).subscribe(user => {

          console.log(user);
          this.displaySearchTable(user);
          this.userUpdated.emit(this.githubRepo);
        },
        (err) => {
          console.log('err:' + err);
          this.githubRepo.user = false;
        },
        () => console.log('Done')
      );


    }
  }


  displaySearchTable(data: any) {
    this.rowData = data.items;
  }
}
