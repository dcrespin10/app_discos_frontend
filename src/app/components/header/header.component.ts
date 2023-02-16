import { Component, OnInit } from '@angular/core';
import { DiscosService } from 'src/app/discos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  title = 'app_discos';
  discosList:any[]=[];

  constructor(private discosservice: DiscosService){  }

  ngOnInit(): void {
    this.discosservice.getDiscos()
    .subscribe((discos:any[])=>this.discosList=discos)
    //console.log()
  }


}


