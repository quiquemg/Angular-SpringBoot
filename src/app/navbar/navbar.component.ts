//import { Component } from '@angular/core';


import { Component, TemplateRef, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ProductService } from '../product.service';
import { Producto } from '../producto.model';
import { Data } from '../data.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Usuario } from '../usuario.model';
import { FormBuilder, Validators} from '@angular/forms';
//import { LoginUsuario } from '../LoginUsuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

    productos: Producto[] = []; // Inicializa la variable con un array vacío	
	modalRef !: BsModalRef;

	public join: Producto[] |any; 
	usuarioLogueado: string = 'Iniciar sesión'; // Valor inicial para usuario no logueado
	//loginUsuario: LoginUsuario;
	//nif: string;
	//password: string;
	//productos:Producto[];
    constructor(private usuarioService: UsuarioService, 
				private productService: ProductService, 
				private modalService: BsModalService,
				private formBuilder:FormBuilder, ) {}
	
	
	/*login(): void {
		
		
		if(this.loginForm.valid){
      this.loginError="";
      this.usuarioService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          //this.router.navigateByUrl('/inicio');
          //this.loginForm.reset();
        }
      })

    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
	}*/
	
	
	onLogin(): void {
    //this.loginUsuario = new LoginUsuario(this.n, this.password);
    /*this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // console.log(err.error.message);
      }
    );*/
  }
	
	
	ngOnInit(): void {
    // Llama a la función para cargar los productos al inicializar el componente
		this.cargarProductos();
	}

	cargarProductos(): void {
		this.productService.getProductos().subscribe({
			next: (response: any) => {
				this.productos = response.productos;
				console.log('Listado de productos', response.productos);
			},
			error: (err) => {
				console.error('Error al obtener productos:', err);
				this.productos = []; // o manejo de errores apropiado
			}
		});
	}
	
	mostrarListaProductos(): void {
		// Llama a la función para cargar los productos
		this.cargarProductos();
	}
	
	abrirModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}
}
	

