/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from "class-validator";

export class EditNoteDto {
  @IsString()
  @IsOptional()
  category?: string

  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  content?: string

  @IsString()
  @IsOptional()
  status?: string
}