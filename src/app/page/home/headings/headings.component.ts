import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-headings',
  standalone: true,
  imports: [],
  templateUrl: './headings.component.html',
  styleUrl: './headings.component.scss'
})
export class HeadingsComponent {
  @Input() headings: string = "";
}
