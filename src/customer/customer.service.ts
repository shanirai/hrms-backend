import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      customerName: 'Shani Rai',
      email: 'shani.rai@example.com',
      phone: '9876543210',
      address: '123, Main Street, Anytown, USA',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      country: 'USA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getAllCustomers(): Customer[] {
    return this.customers;
  }
  addCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer = {
      id: Date.now(),
      ...createCustomerDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    console.log(newCustomer);
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
