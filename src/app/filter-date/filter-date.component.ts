import { Component } from '@angular/core';
import { DotCmsService } from '../shared/dotcms.service';

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.sass'],
})
export class FilterDateComponent {
  type: string | undefined;
  filterType: string[] | undefined = ['2022', '2021', '2020'];

  constructor(private dotCmsService: DotCmsService) {}

  setFilterDate() {
    this.dotCmsService.setDateFilter(this.type);
  }
}
