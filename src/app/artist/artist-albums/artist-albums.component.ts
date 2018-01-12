import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ArtistAlbumsService } from './artist-albums.service';

@Component({
	selector: 'app-artist-albums',
	templateUrl: './artist-albums.component.html',
	styleUrls: ['./artist-albums.component.scss'],
	providers: [ArtistAlbumsService]
})
export class ArtistAlbumsComponent implements OnInit, OnChanges {

	@Input()
	artistId: any;

	albums: any;
	artistname: string;


	constructor(private service: ArtistAlbumsService) { }

	ngOnInit() { }


	ngOnChanges(changes: SimpleChanges) {
		if (changes['artistId'] && changes['artistId'].previousValue !== changes['artistId'].currentValue) {
			this.getArtistInfo();
			this.getArtistName();
		}
	}


	private getArtistInfo(): void {
		this.service.getAlbums(this.artistId).subscribe(
			(response: any) => {
				this.albums = response.topalbums.album;
				console.log(response);
			}
		);
	}


	private getArtistName(): void {
		this.artistname = localStorage.getItem('artistname')
	}

}
