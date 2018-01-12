import { Observable } from 'rxjs/Observable';
import { API_KEY } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../../environments/environment';

@Injectable()
export class ArtistAlbumsService {

	readonly version: string = '2.0/';

	constructor(private http: HttpClient) { }


	getAlbums(artistId: string): Observable<any> {
		const params: any = {
			method: 'artist.gettopalbums',
			api_key: API_KEY,
			format: 'json',
			mbid: artistId
		};


		return this.http.get(`${BASE_URL}${this.version}`, { params: params })
	}


}
