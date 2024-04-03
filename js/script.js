// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById("addForm");
let empTable = document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const ext = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const select = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = empTable.insertRow(-1);
   // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellId = row.insertCell(0);
    const cellName = row.insertCell(1);
    const cellExt = row.insertCell(2);
    const cellEmail = row.insertCell(3);
    const cellDept = row.insertCell(4);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.textContent= id;
    cellName.textContent = name;
    cellExt.textContent = ext;
    cellEmail.textContent = email;
    cellDept.textContent = select;

    // CREATE THE DEconstE BUTTON
    const deleteCell = row.insertCell(5)
    deleteCell.innerHTML = '<button class="btn btn-danger btn-sm delete-btn delete">X</button>'

    // RESET THE FORM
    document.getElementById('addForm').reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
    

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})

// DEconstE EMPLOYEE