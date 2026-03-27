import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
verDetalle() {
    const modalWidth = window.innerWidth < 768 ? '100%' : '40%';

    Swal.fire({
      title: 'Protocolo OAuth2 - Geoportal',
      imageUrl: 'assets/oauth2.svg',
      imageAlt: 'Diagrama de flujo OAuth2',
      width: modalWidth, 
      background: '#ffffff',
      color: '#020617',
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: {
        popup: 'custom-project-modal',
        image: 'img-fluid rounded'
      },
    });
  }
}
