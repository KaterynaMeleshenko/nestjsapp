/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { EditNoteDto } from './dto/edit-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

    @Post('')
    createNote(
      @Body() dto: CreateNoteDto,
    ) {
      return this.notesService.createNote(
        dto,
      )
    }
    
    @Delete('/:id')
    deleteNote(
      @Param('id', ParseIntPipe) noteId : number,
    ){
      return this.notesService.deleteNote(
        noteId,
      )
    }

    @Patch('/:id')
    editNote(
      @Param('id', ParseIntPipe) noteId : number,
      @Body() dto: EditNoteDto,
    ){
      return this.notesService.editNote(
        noteId,
        dto,
      )
    }

    @Get('/stats')
    getStats() {
      return this.notesService.getStats()
    }

    @Get('/:id')
    getNote(
      @Param('id', ParseIntPipe) noteId : number,
    ){
      return this.notesService.getNote(
        noteId,
      )
    }

    @Get('')
    getNotes() {
      return this.notesService.getNotes()
    }

    @Patch('/archive/:id')
    archiveNote(
      @Param('id', ParseIntPipe) noteId : number,
    ) {
      return this.notesService.archiveNote(
        noteId,
      )
    }

    @Patch('activate/:id')
    aactivateNote(
      @Param('id', ParseIntPipe) noteId : number,
    ) {
      return this.notesService.activateNote(
        noteId,
      )
    }
  }