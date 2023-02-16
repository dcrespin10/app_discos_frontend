import { Component, OnInit } from '@angular/core';
import { DiscosService } from './discos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app_discos';
  discosList:any[]=[];

  constructor(private discosservice: DiscosService){  }

  ngOnInit(): void {
    this.discosservice.getDiscos()
    .subscribe((discos:any[])=>this.discosList=discos)
    //console.log()
  }


}
