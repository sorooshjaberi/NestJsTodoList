import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from 'src/todos/entities/todos.entity';
import { Repository } from 'typeorm';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createRepository = <T = any>(): MockRepository<T> => ({
  find: jest.fn(),
  findOneBy: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
  preload: jest.fn(),
  remove: jest.fn(),
});

describe('TodosService', () => {
  let service: TodosService;
  let todoRepository: MockRepository<Todo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: getRepositoryToken(Todo),
          useValue: createRepository(),
        },
      ],
    }).compile();

    service = module.get<TodosService>(TodosService);

    todoRepository = module.get<MockRepository<Todo>>(getRepositoryToken(Todo));
  });

  describe('create', () => {
    it('should create the intended todo', async () => {
      const todo = {
        description: '',
        done: true,
        title: 'helo',
        user: null,
      };

      todoRepository.create.mockReturnValue(todo);

      const returnedTodo = await todoRepository.create();
      expect(returnedTodo).toEqual(todo);
    });
  });
});
