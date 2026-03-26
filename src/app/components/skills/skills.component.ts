import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel') carousel!: ElementRef;
  private autoScrollInterval: any;
  isPaused = false;

  // Lista completa de tus skills con las clases de DevIcon (colored)
  skills = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'SQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'OpenLayers', icon: 'bi bi-layers-fill text-primary' }, // Bootstrap icon alternativo
    { name: 'Oauth2', icon: 'devicon-oauth-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Angular', icon: 'devicon-angular-plain colored' },
  ];

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.scroll('right');
    }, 3000); 
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  scroll(direction: 'left' | 'right') {
    const container = this.carousel.nativeElement;
    const scrollAmount = 210; // Ancho item + gap
    
    container.scrollBy({ 
      left: direction === 'left' ? -scrollAmount : scrollAmount, 
      behavior: 'smooth' 
    });
  }

  onScroll() {
    const container = this.carousel.nativeElement;
    const halfWidth = container.scrollWidth / 2;

    // Reset para bucle infinito
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft = 1;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft = halfWidth - 1;
    }
  }
}