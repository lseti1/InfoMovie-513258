import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.local';

const API_KEY = environment.tmdbApiKey; 
const BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root'
})
export class Tmdb {
  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query
      }
    });
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY
      }
    });
  }

  getTopRated(page = '1'): Observable<any> {
    return this.http.get(`${BASE_URL}/movie/top_rated`, {
      params: { 
        api_key: API_KEY, 
        page 
      }
    });
  }

  getTrendingMovies(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this.http.get(`${BASE_URL}/trending/movie/${timeWindow}`, {
      params: { 
        api_key: API_KEY 
      }
    });
  }
}