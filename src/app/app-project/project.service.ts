import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

import {Project} from '../model/project';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

    private _postsURL = 'https://porfolio-app.herokuapp.com/api/project';
    private headers = new Headers({'Content-Type': 'application/json'});
    private operationsUrl = 'http://60.60.60.100/api/operations';
    constructor(private http: Http) { }

    project: any;

    getAllPosts(): Observable<Project[]> {
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getPost(id: string): Observable<Project> {
        return this.getAllPosts()
            .map(projects => projects.find(project => project._id === id));
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
