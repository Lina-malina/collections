import { Component, OnInit } from '@angular/core';
import { INote } from '../models/note.model';
import { NotesService } from '../services/notes.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public notes: INote[];
  public isVisible = false;
  public isCreationMode = false;
  public newNote: INote = {
    title: '',
    text: '',
    color: '#debfb5',
    createdDate: new Date(),
    _id: ''
  };

  constructor(private notesService: NotesService) { }

  public ngOnInit() {
    this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }
  public showForm() {
    this.isVisible = !this.isVisible;
    this.newNote.title = '';
    this.newNote.text = '';
    this.newNote.color = '#debfb5';
    this.newNote._id = '';
    this.isCreationMode = true;
  }
  public createNote() {
    this.notesService.addNote(this.newNote).subscribe(() =>
      this.notesService.getNotes().subscribe(notes => this.notes = notes));
    this.isVisible = false;
  }
  public deleteNote(id: string) {
    this.notesService.deleteNote(id).subscribe(() =>
    this.notesService.getNotes().subscribe(notes => this.notes = notes));
  }
  public editNote(note) {
    this.isVisible = true;
    this.isCreationMode = false;
    this.newNote.title = note.title;
    this.newNote.text = note.text;
    this.newNote.color = note.color;
    this.newNote.createdDate = new Date();
    this.newNote._id = note._id;
  }
  public updNote() {
    this.notesService.updNote(this.newNote._id, this.newNote).subscribe(() =>
      this.notesService.getNotes().subscribe(notes => this.notes = notes));
    this.isVisible = false;
  }
  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  }
}
