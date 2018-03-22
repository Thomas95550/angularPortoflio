import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import {Project} from '../model/project';

@Component({
  selector: 'app-app-project',
  templateUrl: './app-project.component.html',
  styleUrls: ['./app-project.component.css']
})
export class AppProjectComponent implements OnInit {

  // Define a _postsArray property to hold our Project data
  _postsArray: any[] = [];

  // Create an instance of the ProjectService through dependency injection
  constructor(private _projectService: ProjectService) { }
  getPosts(): void {
    this._projectService.getAllPosts()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        );
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
