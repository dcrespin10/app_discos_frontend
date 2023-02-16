import { Component, OnInit } from '@angular/core';
import { DiscosService } from 'src/app/discos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  title = 'app_discos';
  discosList:any[]=[];

  constructor(private discosservice: DiscosService){  }

  ngOnInit(): void {
    this.discosservice.getDiscos()
    .subscribe((discos:any[])=>this.discosList=discos)
    //console.log()
  }


}














