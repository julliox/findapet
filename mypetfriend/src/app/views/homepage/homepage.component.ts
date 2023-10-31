import { Component } from '@angular/core';
import { request } from 'express';
import { AlertService } from 'src/app/resources/services/alert.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private alertService: AlertService) {}
  

  ngOnInit(): void {
    
  }

  
}
