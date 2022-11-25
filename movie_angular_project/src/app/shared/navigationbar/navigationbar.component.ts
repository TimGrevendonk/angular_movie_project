import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css'],
})
export class NavigationbarComponent implements OnInit {
  // always start with the icon collapsed.
  hamburgerOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  // switch the hamburger icon state.
  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }
  // close the hamburger menu if it was open.
  onHamburgerItemClick() {
    if (this.hamburgerOpen) {
      this.hamburgerOpen = false;
    }
  }
}
