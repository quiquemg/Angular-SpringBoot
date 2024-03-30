import { HttpClient , HttpErrorResponse} from '@angular/common/http';
//import { Observable } from 'rxjs';

import  {  Observable, throwError, catchError, BehaviorSubject , tap, map} from 'rxjs';
import { Producto } from './producto.model'; // Importa el modelo de producto si lo tienes
import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {
  private baseUrl = 'http://localhost:8080/usuarios/acceder'; // URL del backend

  //constructor(private http: HttpClient) {}

  // Método para enviar el usuario al backend y obtener la respuesta
  // Se espera que el backend responda con un objeto de tipo Data
  /*verificarUsuario(usuario: Usuario): Observable<Usuario> {
    console.log('Usuario a enviar ', usuario);
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }*/
  
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> =new BehaviorSubject<String>("");

  constructor(private http: HttpClient) { 
    this.currentUserLoginOn=new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
    this.currentUserData=new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
  }

  /*login(credentials:LoginRequest):Observable<any>{
    console.log(credentials.nif);
	console.log(credentials.password);
	
	
    return this.http.post<any>(this.baseUrl,credentials).pipe(
      tap( (userData) => {
        sessionStorage.setItem("token", userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData)=> userData.token),
      catchError(this.handleError)
    );
  }*/
  
   private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
  
  
}
