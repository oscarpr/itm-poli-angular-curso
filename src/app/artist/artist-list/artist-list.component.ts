import { ArtistsListService } from './artist-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-artist-list',
	templateUrl: './artist-list.component.html',
	styleUrls: ['./artist-list.component.scss'],
	providers: [ArtistsListService]
})
export class ArtistsListComponent implements OnInit {
	artists: any[];
	selectedArtist: any;

	constructor(private service: ArtistsListService) { }

	ngOnInit() {
		this.getArtists();
	}


	private getArtists(): void {
		this.service.getArtists().subscribe(
			(response: any) => {
				this.artists = response.topartists.artist;
			}
		);
	}


	private selectArtist(artist: any): void {
		this.selectedArtist = artist.mbid;
		localStorage.setItem('artistname', artist.name);
	}

}
