const employee = {
    name: 'Sam',

}

function updateEmployeeWithKeyAndValue(employee,streetAddress) { 
const updateEmployee = {...employee};

updateEmployee[streetAddress] = '11 Broadway'; 

return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress){
    employee[streetAddress] = '12 Broadway';

    return employee;
}

function deleteFromEmployeeByKey(employee,name){
    const updateEmployee = {...employee}; 

    delete updateEmployee[name]

    return updateEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee[name];

    return employee;
}