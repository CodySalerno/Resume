import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}
  resume_pdf: string = "https://drive.google.com/file/d/1Wc5WEdeYwNk2jwL_xYnwzj05MguNqW_C/view?usp=sharing";
  ngOnInit(): void {
    
  }
  onClick(elementID: string): void {
    this.viewportScroller.scrollToAnchor(elementID);
  }
}
