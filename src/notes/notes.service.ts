/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Note } from '@prisma/client'
// import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto, EditNoteDto } from './dto';
import { notes } from 'src/mock/notes.mock';

@Injectable()
export class NotesService {
  notes: Note[] = notes;
  maxId = 6;
  // constructor(private prisma: PrismaService) {}
  
  async createNote(dto: CreateNoteDto) {
    this.maxId = this.maxId + 1
    const note = {
      id: this.maxId,
      createdAt: new Date(),
      name: dto.name,
      category: dto.category,
      content: dto.content,
      status: 'true',
    }
   this.notes.push(note);
   return this.notes;
  }
  
  async deleteNote(noteId: number) {
    const noteIndex = await this.notes.findIndex(note => note.id === noteId);
    if (noteIndex < 0) {
      throw new ForbiddenException(`The note with id ${noteId} does not exist`);
    } else {
      const delNoteIndex = this.notes.findIndex(note => note.id === noteId); 
      this.notes.splice(delNoteIndex, 1);
    }
    
    return this.notes;
  }

  async editNote(noteId: number, dto: EditNoteDto) {
    const noteIndex = await this.notes.findIndex(note => note.id === noteId);
    if (noteIndex < 0) {
      throw new ForbiddenException(`The note with id ${noteId} does not exist`);
    } else {
      this.notes[noteIndex].category = dto.category;
      this.notes[noteIndex].name = dto.name;
      this.notes[noteIndex].content = dto.content;
      this.notes[noteIndex].status = dto.status; 
    }
      return this.notes;
  }

 async getNote(noteId: number) {
    const noteIndex = await this.notes.findIndex(note => note.id === noteId);
    if (noteIndex < 0) {
      throw new ForbiddenException(`The note with id ${noteId} does not exist`);
    } else {
      return this.notes.find(note => note.id === noteId);
    }
  }

  getNotes() {
    return this.notes;
  }

  
  async archiveNote(noteId: number) {
    const noteIndex = await this.notes.findIndex(note => note.id === noteId)
    if (noteIndex < 0) {
      throw new ForbiddenException(`The note with id ${noteId} does not exist`);
    } else if (this.notes[noteIndex].status === 'false') {
      throw new ForbiddenException(`The note with id ${noteId} is already archived`);
    } else {
      this.notes[noteIndex].status = 'false';
    }
    return this.notes;
  }
  
  async activateNote(noteId: number) {
    const noteIndex = await this.notes.findIndex(note => note.id === noteId);
    if (noteIndex < 0) {
      throw new ForbiddenException(`The note with id ${noteId} does not exist`);
    } else if (this.notes[noteIndex].status === 'true') {
      throw new ForbiddenException(`The note with id ${noteId} is already active`);
    } else {
      this.notes[noteIndex].status = 'true';
    }
    return this.notes;
  }

  async getStats() {
    const catArray = [];
    await this.notes.forEach(note => {
      if (!catArray.find(element => element === note.category)) {
        catArray.push(note.category);
      }
    })
    const data = [];
    catArray.forEach( cat => {
      let active = 0;
      let archived = 0;
      this.notes.forEach( note => {
        
        if (note.category === cat && note.status === 'true') {
          active = active + 1
        } if (note.category === cat && note.status === 'false') {
          archived = archived + 1;
        }
      })

      const category = {
        categoryName: cat,
        activeNotes: active,
        archivedNotes: archived,
      }
      data.push(category);
    })

    return data;
  }
}