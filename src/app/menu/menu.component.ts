import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  oe;

 ngOnInit() {
    this.route.params.subscribe(params => {
      this.oe = params['id'];
    });
  }

  onButtonClick(route) {
    this.router.navigate([this.oe, route]);
  }

}
