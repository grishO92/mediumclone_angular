import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleRequestInterface } from 'src/app/shared/types/articleRequest.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleResponseInterface } from 'src/app/shared/types/articleResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class EditArticleService {
  private http = inject(HttpClient);

  updateArticle(
    slug: string,
    articleRequest: ArticleRequestInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .put<ArticleResponseInterface>(fullUrl, articleRequest)
      .pipe(map((response) => response.article));
  }
}
