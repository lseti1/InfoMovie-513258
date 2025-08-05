import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment.local'; // This is for local work
import { environment } from '../environments/environment.prod'; // This is for deployment

const APIkey = environment.tmdbApiKey; 
const BaseURL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root'
})
export class Tmdb {
  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${BaseURL}/search/movie`, {
      params: {
        api_key: APIkey,
        query: query
      }
    });
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${BaseURL}/movie/${id}`, {
      params: {
        api_key: APIkey
      }
    });
  }

  getTopRated(page = '1'): Observable<any> {
    return this.http.get(`${BaseURL}/movie/top_rated`, {
      params: { 
        api_key: APIkey, 
        page 
      }
    });
  }

  getTrendingMovies(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this.http.get(`${BaseURL}/trending/movie/${timeWindow}`, {
      params: { 
        api_key: APIkey 
      }
    });
  }

  getUpcomingMovies(page = '1'): Observable<any> {
  return this.http.get(`${BaseURL}/movie/upcoming`, {
    params: {
      api_key: APIkey,
    }
  });
}
}