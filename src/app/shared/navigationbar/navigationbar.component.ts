import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  hamburgerOpen = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  onHamburgerItemClick() {
    if (this.hamburgerOpen) {
      this.hamburgerOpen = false;
    }
  }

  navigateTo(path: string) {
    this.hamburgerOpen = false;
    this.router.navigate([path]);
  }

}
