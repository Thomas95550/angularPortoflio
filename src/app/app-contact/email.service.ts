import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

// rxjs
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EmailService {

    constructor(private http: Http) { }

    public PostContact(data, url) {
        console.log('posted' + url);
        return this.http.post(url,
            {
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                mobile: data.mobile,
                message: data.message
            })
            .subscribe(
                data => {
                    console.log('<<<<DATA DATA ' + data);
                }
            );
    }

}
