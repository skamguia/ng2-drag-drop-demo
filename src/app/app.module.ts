import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Ng2DragDropModule} from 'ng2-drag-drop';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { ReviewSectionComponent } from './review-section/review-section.component';

@NgModule({
  imports: [ BrowserModule, Ng2DragDropModule.forRoot(), FormsModule ],
  declarations: [ AppComponent, QuestionsComponent, DeleteItemComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
