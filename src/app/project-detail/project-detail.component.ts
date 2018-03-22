import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../app-project/project.service';
import { Router, ActivatedRoute } from '@angular/router';

import {ProjectDetail} from '../model/projectDetail';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {

    _post: any;

    constructor(private _projectService: ProjectService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            this._projectService.getPost(id)
                .subscribe(
                    data => {
                        this._post = data;
                    }
            );
        });
    }

    returnTop() {
        $('html').animate({
            scrollTop: 0,
        }, 2000, 'easeInOutQuart');
    }

    returnProject() {
        console.log('return to project page');
        this.router.navigate(['project']);
    }

}
