import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DotCmsResponse, NewsItem } from '../core/model/NewsItem';
import { DotCmsService } from '../shared/dotcms.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.sass'],
})
export class NewsItemComponent {
[x: string]: any;
  data: NewsItem | undefined;
  selected: boolean | undefined;
  loading: boolean | undefined = true;

  constructor(
    private dotCmsService: DotCmsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getNewsItem() {
    const id = this.route.snapshot.paramMap.get('id') || '';

    this.dotCmsService.getContentById(id).subscribe((data) => {
      this.data = (data as DotCmsResponse).contentlets[0];
      setTimeout(() => {
        this.loading = false;
      }, 500);

    });
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.getNewsItem();
  }
}
