import { Component } from '@angular/core';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styles: [`
    div.scroll-list {
      overflow: auto;
      max-height: 70vh;
    }

    .drag-over {
      border: #ff525b dashed 2px;
    }

    .drag-hint {
      border: #ffc100 dashed 2px;
    }

    .drag-target-border {
      border: #00bfff dashed 2px;
    }

    .drag-target-border-green {
      border: #3c763d dashed 2px;
    }
  `
  ]
})
export class QuestionsComponent {

  tabs = [
    {name: 'Team Members'},
    {name: 'Direct Reports'},
    {name: 'Managers'}
  ];

  teamMemberQuestions = [ // "getTeamMemberQuestionsService"
    { text: 'Are you a good team member?', type: 'teamMember', tag: ''},
    { text: 'Are you sure your teammates like you?', type: 'teamMember', tag: ''},
    { text: 'How do you know that they are not lying?', type: 'teamMember', tag: ''}
  ];

  selectedTeamMemberQuestions = [];

  directReportQuestions = [ // "getDirectReportQuestionsService"
    { text: 'How would you rate your ability to report directly?', type: 'directReport', tag: ''},
    { text: 'How confident are you in your direct reporting?', type: 'directReport', tag: ''},
    { text: 'Are your reports direct?', type: 'directReport', tag: ''}
  ];

  selectedDirectReportQuestions = [];

  managerQuestions = [ // "getManagerQuestionsService"
    { text: 'Are you a good manager?', type: 'manager', tag: ''},
    { text: 'Are you sure?', type: 'manager', tag: ''},
    { text: 'How do I know you are not lying?', type: 'manager', tag: ''}
  ];

  selectedManagerQuestions = [];


  // vegetables = [
  //   {name: 'Carrot', type: 'vegetable'},
  //   {name: 'Onion', type: 'vegetable'},
  //   {name: 'Potato', type: 'vegetable'},
  //   {name: 'Capsicum', type: 'vegetable'}
  // ];

  // fruits = [
  //   {name: 'Apple', type: 'fruit'},
  //   {name: 'Orange', type: 'fruit'},
  //   {name: 'Mango', type: 'fruit'},
  //   {name: 'Banana', type: 'fruit'}
  // ];



  // droppedFruits = [];
  // droppedVegetables = [];
  // droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  teamMemberQuestionDragEnabled = true;
  directReportQuestionDragEnabled = true;
  managerQuestionDragEnabled = true;

  teamMemberQuestionDropEnabled = true;
  directReportQuestionDropEnabled = true;
  managerQuestionDropEnabled = true;

  onTeamMemberQuestionDrop(e: any) {
    this.selectedTeamMemberQuestions.push(e.dragData);
    this.removeItem(e.dragData, this.teamMemberQuestions);
  }

  onDirectReportQuestionDrop(e: any) {
    this.selectedDirectReportQuestions.push(e.dragData);
    this.removeItem(e.dragData, this.directReportQuestions);
  }

  onManagerQuestionDrop(e: any) {
    this.selectedManagerQuestions.push(e.dragData);
    this.removeItem(e.dragData, this.managerQuestions);
  }

  // onAnyDrop(e: any) {
  //   this.droppedItems.push(e.dragData);

  //   if (e.dragData.type === 'vegetable') {
  //     this.removeItem(e.dragData, this.vegetables);
  //   } else {
  //     this.removeItem(e.dragData, this.fruits);
  //   }
  // }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  showSection(event) {
    // show target draggable section
    // show dropable section
    console.log(event);
  }
}
