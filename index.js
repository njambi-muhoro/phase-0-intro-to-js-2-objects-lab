const employee = {name:"lucy", streetAddress:3045};

function updateEmployeeWithKeyAndValue(employee, key, value){
  const newEmployee = {...employee};
  newEmployee[key ]= value;
  return newEmployee;
}


//  we are changing the employee key and value pairs and his is considered non-destructive since it just clones  the original employee

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
  employee[key] = value;
  return employee;
} 
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress", "12 Broadway");


function deleteFromEmployeeByKey(employee, key){ // non-destructive by using 
  const newEmployee = {name:""}; // initialize a new employee and call the  key you want to change and its  value in object form
  newEmployee[""] = newEmployee["name"] // equalize the name of the new key tou want to use to the old key you want to delete
  delete newEmployee["name"] // use the deleted name/method to delete the specific key you wanna delete
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  const newEmployee = employee;
  delete newEmployee.name; 
  return newEmployee;
}


