import { Component } from '@angular/core';
import { ArticleFormComponent } from 'src/app/shared/components/articleFrom/articleForm.component';
import { ArticleFormValuesInterface } from 'src/app/shared/components/articleFrom/types/articleFormValues.interface';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponent],
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    console.log('Onsubmit in Create Article', articleFormValues);
  }
}
