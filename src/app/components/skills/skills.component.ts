import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills = [
    { name: 'JavaScript', level: 80, icon: 'devicon-javascript-plain colored' },
    { name: 'Java', level: 70, icon: 'devicon-java-plain colored' },
    { name: 'TypeScript', level: 85, icon: 'devicon-typescript-plain colored' },
    { name: 'SQL', level: 70, icon: 'devicon-postgresql-plain' },
    { name: 'Docker', level: 70, icon: 'devicon-docker-plain' },
    { name: 'Spring Boot', level: 70, icon: 'devicon-spring-plain colored' },
    { name: 'OpenLayers', level: 95, icon: 'bi bi-layers' },
    { name: 'Oauth2', level: 60, icon: 'devicon-oauth-plain' },
    { name: 'Node.js', level: 70, icon: 'devicon-nodejs-plain colored' },
    { name: 'Angular', level: 85, icon: 'devicon-angular-plain colored' },
  ];

getBorderProgress(level: number): string {
  return `conic-gradient(#465565 ${level * 3.6}deg, transparent ${level * 3.6}deg)`;
}

}
