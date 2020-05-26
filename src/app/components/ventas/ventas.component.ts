import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  actualRoute:any;
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.actualRoute = this.route.snapshot.url;
  }
  onSelectRoute(){
    this.router.navigate(['formulario']);
  }

}
