import { Component, OnInit } from '@angular/core';
import { DiscosService } from 'src/app/discos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  title = 'app_discos';
  discosList:any[]=[];

  constructor(private discosservice: DiscosService){  }

  ngOnInit(): void {
    this.discosservice.getDiscos()
    .subscribe((discos:any[])=>this.discosList=discos)
    //console.log()
  }


}
