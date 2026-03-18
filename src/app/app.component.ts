import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [ProjectsComponent, FooterComponent, SkillsComponent, AboutComponent, HomeComponent, HeaderComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
