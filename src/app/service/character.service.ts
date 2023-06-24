import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
  })
export class CharacterService {

    servicePath;

    constructor(private http: HttpClient) {
        this.servicePath = `${environment.apiUri}/character`;
    }

    getAll(): Observable<any> {
        return this.http.get(`${this.servicePath}`);
    }


}