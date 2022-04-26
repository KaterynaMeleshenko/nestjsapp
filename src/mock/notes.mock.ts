/* eslint-disable prettier/prettier */
import { Note } from "@prisma/client";

export const notes: Note[] = [
  {   
    id: 0,
    createdAt: new Date(),
    name: 'Shopping list',
    category: 'Task',
    content: 'Tomatoes, bread',
    status: 'true',
},
{   
    id: 1,
    createdAt: new Date(),
    name: 'The theory of evolution',
    category: 'Random Thought',
    content: `Evolution is the change in the characteristics of a species over several generations and relies on the process of natural selection`,
    status: 'true',
},
{
    id: 2,
    createdAt: new Date(),
    name: 'Radency',
    category: 'Idea',
    content: 'Internship from 2/5/2022 till 3/6/2022',
    status: 'true',
},
{
    id: 3,
    createdAt: new Date(),
    name: 'William Gaddis',
    category: 'Quote',
    content: "Power doesn't co...",
    status: 'false',
},
{   
    id: 4,
    createdAt: new Date(),
    name: 'Books',
    category: 'Task',
    content: "The Lean Startup",
    status: 'true',
},
{   
    id: 5,
    createdAt: new Date(),
    name: 'Project',
    category: 'Idea',
    content: "To create a project for my portfolio 4/15/2022",
    status: 'false',
},
{   
    id: 6,
    createdAt: new Date(),
    name: 'Covid',
    category: 'Random Thought',
    content: "Covid is not dangerous anymore",
    status: 'true',
}
]