

//let arr=[{id:1,name:"jack",profession:"developer",age:20}, {id:2,name:"john",profession:"admin",age:28},{id:2,name:"smith",profession:"admin",age:28}];

let arr = [];

let NameEmp = document.getElementById("name");
let AgeEmp = document.getElementById("age");
let professionEmp = document.getElementById("Profession");

document.getElementById('table').classList.add('hidden');



// labels field

let sucess = document.getElementById("sucess");
let error = document.getElementById("error");
let noOfEmployee = document.getElementById('zero')


// table data

let table_data = document.getElementById("tableData");



//button
let button = document.getElementById("adduser");
button.addEventListener("click", addEmployees);



function addEmployees() {
    let Emp_name = NameEmp.value;
    let Emp_age = AgeEmp.value;
    let Emp_prof = professionEmp.value;

    // console.log(Emp_name);
    // console.log(Emp_age);
    // console.log(Emp_prof);

    if (Emp_name && Emp_age && Emp_prof) {

        sucess.classList.remove("hidden") // sucess message now display on the scren
        error.classList.add("hidden");  // now hide due to satisfy above condition
        noOfEmployee.classList.add("hidden"); // hide .
        document.getElementById('table').classList.remove('hidden');


        // craate an object and assign value to it ;

        let obj = {
            Name: Emp_name,
            Age: Emp_age,
            profession: Emp_prof
        }


        // now push the obj value to an array .

        arr.push(obj);

        // display emplyoyee table .
        //console.log(arr);

        displayEmployeeTable();

    }
    else {
        // if input status empty .

        sucess.classList.add("hidden"); // sucess message now hidden
        error.classList.add("hidden");
        noOfEmployee.classList.remove('hidden');

    }
    updateInputEmployee() ;
     
}
 //  
// update object 


function updateInputEmployee() {
    NameEmp.value = "";
    AgeEmp.value = "";
    professionEmp.value = ""
}


    let deleteEmp;

    function deleteEmployee(index) {

        deleteEmp = arr.splice(index, 1);
        updateInputEmployee();

        //  displayEmployeeTable();
        if (arr.length === 0) {
            document.getElementById('table').classList.add('hidden');
            sucess.classList.add("hidden");
            noOfEmployee.classList.remove('hidden');

        }
    }


//make a function to dispalay data of table .
function displayEmployeeTable() {

    table_data.innerHTML = "";

    arr.map((item, index) => {

        table_data.innerHTML += `
            <tr>
            <td> id: ${String(index + 1).padStart(2, '0')}.</td>
            <td>Name: ${item.Name}</td>
            <td>Profession: ${item.profession}</td>
            <td>Age: ${item.Age}</td>
            
            <td> <button class="removebtn" onclick=" deleteEmployee(${index})" >Delete User </button></td>
            </tr>`
    });
    //  console.log(table_data);
    console.log(arr);

}













