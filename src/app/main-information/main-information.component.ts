import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrl: './main-information.component.scss'
})
export class MainInformationComponent {
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      // Add any scroll-related actions here
    }
  }

  scrollTo(elementId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.querySelector(elementId);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  }
}
