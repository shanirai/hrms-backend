import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: '123456',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.j@example.com',
      password: '123456',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      password: '123456',
    },
    {
      id: 5,
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      password: '123456',
    },
    {
      id: 6,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      password: '123456',
    },
    {
      id: 7,
      name: 'David Martinez',
      email: 'david.m@example.com',
      password: '123456',
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@example.com',
      password: '123456',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.users.find((user) => user.id === id);
  }

  //post a new user
  createUser(data: { name: string; email: string; password: string }) {
    const newUser = { id: this.users.length + 1, ...data };
    this.users.push(newUser);
    return newUser;
  }
  // put a user
  updateUser(
    id: number,
    data: { name: string; email: string; password: string },
  ) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    return user;
  }
  // delete a user
  deleteUser(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    const deletedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return deletedUser;
  }
  // patch a user
  patchUser(
    id: number,
    data: { name?: string; email?: string; password?: string },
  ) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (data.name !== undefined) user.name = data.name;
    if (data.email !== undefined) user.email = data.email;
    if (data.password !== undefined) user.password = data.password;
    return user;
  }
}
