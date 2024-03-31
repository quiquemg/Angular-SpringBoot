//import { Component } from '@angular/core';


import { Component, TemplateRef, ElementRef,  ViewChild, OnInit , Input} from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ProductService } from '../product.service';
import { Producto } from '../producto.model';
import { Data } from '../data.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Usuario } from '../usuario.model';
import { FormBuilder, Validators} from '@angular/forms';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../modal/modal.component'
//import { LoginUsuario } from '../LoginUsuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

    productos: Producto[] = []; // Inicializa la variable con un array vacío	
	modalRef !: BsModalRef;
	public showModal: boolean = true; // Inicialmente mostramos el modal
	
	public join: Producto[] |any; 
	usuarioLogueado: string = 'Iniciar sesión'; // Valor inicial para usuario no logueado
	nif !: string;
	password !: string;
	usuarioAutenticado: boolean = false;
	constructor(//private elementRef: ElementRef,
				private usuarioService: UsuarioService, 
				private productService: ProductService, 
				private modalService: BsModalService,
				private formBuilder:FormBuilder, ) {}
	
	
	
	
	onLogin(): void {
	
		const loginRequest = { nif: this.nif, password: this.password };
		this.usuarioService.login(loginRequest).subscribe(
			response => {
				// Manejar la respuesta del servidor
				console.log('Usuario autenticado:', response);
				console.log('Nombre:', response.nombre);
				console.log('Apellidos:', response.apellidos);
				this.usuarioLogueado = response.nombre + ' ' + response.apellidos;
				this.modalRef.hide();
				this.usuarioAutenticado = true;
			},
			error => {
				// Manejar errores
			}
		);
	}
	
	logout(): void {
		console.log('En logout');
		this.usuarioLogueado = 'Iniciar sesion';
		this.usuarioAutenticado = false; // Restablecer el estado de aut
		
		/*this.usuarioService.logout().subscribe(
			response => {
				
			},
			error => {
				// Manejar errores
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
		console.log('En abrir');
		this.modalRef = this.modalService.show(template);
	}
	
}
	

