import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Gif, SearchGifsResponse } from "../interfaces/gifs.interface";

@Injectable({
    providedIn: 'root'
})
export class GifsService {
    private API_URL: string = 'https://api.giphy.com/v1/gifs';
    private API_KEY: string = 'o9AONzH2uaV4Mz5O27x9OtLkVml2dLKK';

    private _currentSearch: string = '';

    private _recentSearches: string[] = [];

    public get recentSearches(): string[] {
        return [...this._recentSearches];
    }

    public gifsList: Gif[] = [];

    public constructor(private http: HttpClient) {
        this._recentSearches = JSON.parse(localStorage.getItem('angular_albabianca_giphyapp')!) ?? [];
        if (!this._recentSearches.length) return;

        this.search(this.recentSearches[0]);
        this._currentSearch = this.recentSearches[0];
    }

    public search(query: string): Promise<void> {
        const params = new HttpParams()
            .set('api_key', this.API_KEY)
            .set('q', query)
            .set('limit', 30);

        return new Promise((resolve, reject) => {
            this.http.get<SearchGifsResponse>(`${this.API_URL}/search?${params}`)
            .subscribe(response => {
              console.log(response);
              this.gifsList = response.data;
                resolve();
            }, error => reject());
        });
    }

    public async searchGifs(query: string): Promise<void> {
      /**Query Item Handling **/
      query = query.toUpperCase();

      if (query === this._currentSearch) return;
      this._currentSearch = query;

      await this.search(query);

      if (this._recentSearches.includes(query)) {
          const itemIndex = this._recentSearches.indexOf(query);
          this._recentSearches.splice(itemIndex, 1);
      }
      this._recentSearches.unshift(query);

      this._recentSearches = this._recentSearches.splice(0, 6);
      localStorage.setItem('angular_albabianca_giphyapp', JSON.stringify(this._recentSearches));
    }
}
