import {Institution} from '../models/institution.model';
import {LoginResponse} from '../models/loginResponse.model';
import {Injectable} from '@angular/core';
import {UserForLogin} from '../models/userForLogin.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseUrl = 'http://dev-task.cheishvili.ge/api';

  constructor(
    private http: HttpClient
  ) {
  }

  login(user: UserForLogin): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, user);
  }

  getInstitutions(page: number, name: string, pid: string): Observable<Institution> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    return this.http.get<Institution>(`${this.baseUrl}/institutions?page=${page}&name=${name}&pid=${pid}`, httpOptions);

  }

  getInstitutionDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/institutions/${id}`);
  }

  updateInstitutionDetails(institution): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    const params = new HttpParams({
      fromObject: {
        number: institution.number,
        name: institution.name,
        pid: institution.pid
      }
    });

    return this.http.put<any>(`${this.baseUrl}/institutions/${institution.id}`, params, httpOptions);

  }

  createInstitution(institution): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    const params = new HttpParams({
      fromObject: {
        number: institution.number,
        name: institution.name,
        pid: institution.pid
      }
    });

    return this.http.post<any>(`${this.baseUrl}/institutions/create`, params, httpOptions);
  }

  createBranch(institution): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    const params = new HttpParams({
      fromObject: {
        address: institution.address,
        manager_name: institution.manager_name
      }
    });

    return this.http.post<any>(`${this.baseUrl}/institutions/${institution.id}/branches/create`, params, httpOptions);
  }

  getInstitutionBranchDetails(institutionid, branchid): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    return this.http.get<any>(`${this.baseUrl}/institutions/${branchid}/branches/${institutionid}`, httpOptions);

  }

  // getPersonal() {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  //   });
  //   return this.http.get('http://dev-task.cheishvili.ge/api/institutions/:institutionId/branches', { headers });
  // }

  // createPerson(value: any, event: any) {
  //   // const httpOptions = {
  //   //   headers: new HttpHeaders({
  //   //     'Content-Type': 'application/x-www-form-urlencoded',
  //   //     Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  //   //   })
  //   // };

  //   // const params = new HttpParams({
  //   //    fromObject: {
  //   //      this.event.sessions.id = value.address,
  //   //      this.event.sessions.name = value.manager_name,
  //   //   }
  //   // });

  //   // return this.http.post(`http://dev-task.cheishvili.ge/api/institutions/${value.id}/branches`, params, httpOptions);
  // }
  updateInstitutionBranchDetails(branch: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    const params = new HttpParams({
      fromObject: {
        address: branch.address,
        manager_name: branch.manager_name,
      }
    });

    return this.http.put(`${this.baseUrl}/institutions/${branch.institutionID}/branches/${branch.id}`, params, httpOptions);

  }

  getInstitutionBranchPersonalDetails(activatedId: string, brachnId: any, institutionId: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    return this.http.get<any>(`${this.baseUrl}/institutions/${institutionId}/branches/${brachnId}/personal/${activatedId}`, httpOptions);

  }

  createPerson(details: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    const params = new HttpParams({
      fromObject: {
        name: details.name,
        pid: details.pid
      }
    });

    return this.http.post(`${this.baseUrl}/institutions/${details.institutionid}/branches/${details.id}/personal/create`, params, httpOptions);
  }

  // getPersonal() {

  // }
  getPersonal(institutionId: any, activatedId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      })
    };

    return this.http.get<any>(`${this.baseUrl}/institutions/${institutionId}/branches/${activatedId}/personal`, httpOptions);
  }
}
