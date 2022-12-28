import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  gotoResumeLink() {
    window.open("https://drive.google.com/file/d/1kKGGAuHwXN9-Rr6cb2Ojz4E7TXagthRO/view?usp=sharing", '_blank')
  }
}
