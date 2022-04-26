import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import 'reflect-metadata';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [NotesModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
