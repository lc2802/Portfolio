import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string;
  tags: string[];
  categoria: 'gis' | 'arquitectura';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  proyectos: Proyecto[] = [
    {
      titulo: 'Geoportal Corporativo',
      descripcion: 'Gestión de capas dinámicas y análisis territorial.',
      imagen: '/assets/geoportal.png',
      tags: ['Angular', 'OpenLayers'],
      categoria: 'gis'
    },
    {
      titulo: 'Segunda Vista GIS',
      descripcion: 'Visualización alternativa con datos en tiempo real.',
      imagen: '/assets/geoportal2.png',
      tags: ['PostGIS'],
      categoria: 'gis'
    },
 {
  titulo: 'Templates Base',
  descripcion: 'Estandarización de microservicios y frontend.',
  imagen: '/assets/geoportal2.png', // ✔️ corregido
  tags: ['Spring Boot', 'OAuth2'],
  categoria: 'arquitectura'
},
    {
      titulo: 'Estructura Core',
      descripcion: 'Implementación de Clean Architecture.',
      imagen: 'assets/geoportal.png',
      tags: ['Maven', 'JWT'],
      categoria: 'arquitectura'
    }
  ];

  get gis() {
    return this.proyectos.filter(p => p.categoria === 'gis');
  }

  get arquitectura() {
    return this.proyectos.filter(p => p.categoria === 'arquitectura');
  }
}