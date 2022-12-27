import { Component } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DotCmsResponse } from '../core/model/NewsItem';
import { DotCmsService } from '../shared/dotcms.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  data: DotCmsResponse | undefined;
  id: string | undefined;

  constructor(private dotCmsService: DotCmsService, private router: Router) {}

  showNews() {
    this.dotCmsService.sendGetRequest().subscribe((data) => {
      const response = data as DotCmsResponse;
      this.data = response;
    });
  }

  ngOnInit() {
    this.router.events.subscribe((value) => {
      if (value instanceof RoutesRecognized) {
        this.id = value.state.root.firstChild?.params['id'];
      }
    });

    this.showNews();
  }
}
