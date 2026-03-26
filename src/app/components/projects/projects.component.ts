import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
// En tu componente
ngOnInit(): void {
  const container = document.getElementById('viewerContainer');
  const img = document.getElementById('viewableImage') as HTMLImageElement;

  if (!container || !img) return;

  let scale = 1;
  let isDragging = false;
  let startX = 0, startY = 0;
  let translateX = 0, translateY = 0;

  // --- ZOOM CON RUEDA ---
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    scale = Math.min(Math.max(1, scale + delta), 5); // Entre 1x y 5x
    updateTransform();
  });

  // --- ARRASTRE (PAN) ---
  container.addEventListener('mousedown', (e) => {
    if (scale === 1) return; // No arrastrar si no hay zoom
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  function updateTransform() {
    img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  // Resetear al cerrar el modal
  const modalEl = document.getElementById('diagramModal');
  modalEl?.addEventListener('hidden.bs.modal', () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
  });
}}