import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  optionsVisibleMovies = false;
  optionsVisibleTv = false;

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit(): void {
    // Agrega un listener de clics al documento
    document.addEventListener('click', this.documentClick.bind(this));
  }

  // Método para manejar clics en el documento
  documentClick(event: MouseEvent): void {
    // Verifica si el clic fue dentro del componente
    if (!this.el.nativeElement.contains(event.target)) {
      // Cerrar las opciones si están abiertas
      this.closeOptions();
    }
  }

  // Método para cerrar las opciones
  closeOptions(): void {
    this.optionsVisibleMovies = false;
    this.optionsVisibleTv = false;
  }

  toggleOptions(typeSelect: string): void {
    if (typeSelect === 'Movies') {
      this.optionsVisibleMovies = !this.optionsVisibleMovies;
      this.optionsVisibleTv = false;
    } else if (typeSelect === 'Tv') {
      this.optionsVisibleTv = !this.optionsVisibleTv;
      this.optionsVisibleMovies = false;
    } else {
      return;
    }
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
