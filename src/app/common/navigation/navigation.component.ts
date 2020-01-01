import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

interface Selection {
  route: string;
  selected: boolean;
}

interface Selections {
  [selection: string]: Selection
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private selections: Selections = {
    home: { route: '', selected: true },
    modules: { route: '/modules', selected: false }
  }

  private changeSelected(selectionKey: string): void {
    Object.keys(this.selections).forEach((key: string) => {
      this.selections[key].selected = selectionKey === key;
    })
  }

  constructor(private router: Router) { }

  changeRoute(selectionKey: string): void {
    this.changeSelected(selectionKey);
    this.router.navigateByUrl(this.selections[selectionKey].route);
  }

  ngOnInit() {
  }

}
