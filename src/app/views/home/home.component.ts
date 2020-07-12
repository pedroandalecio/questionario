import { QuestionarioComponent } from './questionario/questionario.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //this.addLive();
  }

  addLive(): void {
    const dialogRef = this.dialog.open(QuestionarioComponent, {
      maxHeight: '95%',
      minWidth: '95%',
      width: '95%',
      height: '95%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
