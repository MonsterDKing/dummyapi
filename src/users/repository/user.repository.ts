import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
    private spaces: User[] = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            image: 'https://picsum.photos/200',
            valid: true,
            rfc: 'XHJKL3456789012',
            phone: '555-123-4567',
            address: '123 Main St',
            city: 'Sampleville',
            state: 'CA',
        },
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            image: 'https://picsum.photos/200',
            valid: true,
            rfc: 'ABCKL9876543210',
            phone: '555-987-6543',
            address: '456 Elm St',
            city: 'Mocktown',
            state: 'NY',
        },
        {
            id: '3',
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            image: 'https://picsum.photos/200',
            valid: true,
            rfc: 'MNOPQ1234567890',
            phone: '555-345-6789',
            address: '789 Oak St',
            city: 'Faketown',
            state: 'TX',
        },
        {
            id: '4',
            name: 'Bob Brown',
            email: 'bob.brown@example.com',
            image: 'https://picsum.photos/200',
            valid: true,
            rfc: 'UVWXYZ5678901234',
            phone: '555-234-5678',
            address: '101 Pine St',
            city: 'Testville',
            state: 'FL',
        },
        {
            id: '5',
            name: 'Eve White',
            email: 'eve.white@example.com',
            image: 'https://picsum.photos/200',
            valid: true,
            rfc: 'RSTUV2345678901',
            phone: '555-678-1234',
            address: '567 Cedar St',
            city: 'Example City',
            state: 'WA',
        },
    ];

    findAll(): User[] {
        return this.spaces;
    }

    findOne(id: string): User | undefined {
        return this.spaces.find((user) => user.id === id);
    }

    create(user: User): void {
        this.spaces.push(user);
    }

    update(id: string, updatedUser: User): void {
        const userIndex = this.spaces.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            this.spaces[userIndex] = { ...updatedUser, id };
        }
    }

    delete(id: string): void {
        const userIndex = this.spaces.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            this.spaces.splice(userIndex, 1);
        }
    }
}
