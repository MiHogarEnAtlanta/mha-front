import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit {
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
  };
  @ViewChild("sidenav") sidenav: any;
  public sidenavOpen: boolean = true;
  public links = [
    // { name: 'Profile', href: 'profile', icon: 'person' },
    // { name: "My Properties", href: "my-properties", icon: "view_list" },
    { name: "Favorites", href: "favorites", icon: "favorite" },
    // { name: 'Submit Property', href: '/submit-property', icon: 'add_circle' },
    // { name: 'Logout', href: '/login', icon: 'power_settings_new' },
  ];
  constructor(public router: Router) {}

  ngOnInit() {
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    }
  }

  @HostListener("window:resize")
  public onWindowResize(): void {
    window.innerWidth < 960
      ? (this.sidenavOpen = false)
      : (this.sidenavOpen = true);
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (window.innerWidth < 960) {
          this.sidenav.close();
        }
      }
    });
  }
}
