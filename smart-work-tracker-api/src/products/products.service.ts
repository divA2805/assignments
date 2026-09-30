import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 1500,
    },
    {
      id: 3,
      name: 'Mouse',
      price: 800,
    },
    {
      id: 4,
      name: 'Monitor',
      price: 12000,
    },
    {
      id: 5,
      name: 'Headphones',
      price: 2500,
    },
  ];

  getall(): Task[] {
    return this.tasks;
  }
  removeid(id: number): Task[] {
    return this.tasks.filter((item) => item.id !== id);
  }
  getbyId(id:number):Task|undefined {
    return this.tasks.find((item)=>item.id==id)
  }
  filterproducts(name?:string):Task[]{
    const search = name?.toLowerCase().trim() || '';
    return this.tasks.filter((items)=>items.name.toLowerCase().includes(search))
  }

//   filterproducts(name?: string): Task[] {
//   if (!name) return this.tasks; // Return all tasks if name is undefined or empty
  
//   const searchTerm = name.toLowerCase().trim();
//   return this.tasks.filter((item) => 
//     item.name.toLowerCase().includes(searchTerm)
//   );
}
}
