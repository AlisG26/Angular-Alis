export class EmployeesService {
    employees = [
        {
            name: 'pepito',
            age: 25,
            charge: 'Engineer',
            state: 'active'
        },{
            name: 'juanito',
            age: 26,
            charge: 'Secretary',
            state: 'active'
        }
    ];
    getEmployee(id: number) {
        return this.employees[id];
    }
}