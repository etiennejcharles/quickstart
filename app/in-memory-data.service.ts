import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
        { id: 1, name: 'Mr.nice' },
        { id: 2, name: 'Narco' },
        { id: 3, name: 'Bombasto' },
        { id: 4, name: 'Celeritas' },
        { id: 5, name: 'Magneta' },
        { id: 6, name: 'Foo' },
        { id: 7, name: 'Bar' },
        { id: 8, name: 'Dynama' },
        { id: 9, name: 'Dr. IQ' },
        { id: 10, name: 'Magma' },
        { id: 11, name: 'Tornado' }
        ];
        return {heroes};
    }
}
