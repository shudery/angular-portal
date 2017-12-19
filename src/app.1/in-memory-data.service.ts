import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 10, name: 'Zero' },
            { id: 11, name: '人力' },
            { id: 12, name: '费用' },
            { id: 13, name: '问题' },
            { id: 14, name: '风险' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes };
    }
}