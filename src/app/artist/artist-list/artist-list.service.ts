import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, BASE_URL } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtistsListService {

	private readonly version: string = '2.0/'

	constructor(private http: HttpClient) { }


	getArtists(): Observable<any> {
		const params: any = {
			method: 'geo.gettopartists',
			country: 'colombia',
			api_key: API_KEY,
			format: 'json'
		};

		return this.http.get(`${BASE_URL}${this.version}`, { params: params });
	}

}
