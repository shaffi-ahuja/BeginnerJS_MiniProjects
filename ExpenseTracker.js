var addItem = document.getElementById('addItem');
var list = document.getElementById('addDetails');
var total = document.getElementById('total');
addItem.addEventListener('click', () => {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var amount = document.getElementById('amount').value;
    var date = document.getElementById('date').value;
    if (name != "") {
        var editDetails = document.createElement('div');
        editDetails.classList.add('modal');
        editDetails.setAttribute("id", `${name}Modal`);
        editDetails.innerHTML = `<div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Details</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-3">Name</div>
                                <input class="col-8" id="${name}EditedName" value="${name}" type="text">
                            </div>
                            <div class="row mb-3">
                                <div class="col-3">Date</div>
                                <input class="col-8" id="${name}EditedDate" value="${date}" type="date">
                            </div>
                            <div class="row">
                                <div class="col-3">Amount</div>
                                <input class="col-8" id="${name}EditedAmount" value="${amount}" type="number">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button class="btn btn-primary" data-bs-dismiss="modal" id="${name}Save">Save Changes</button>
                        </div>
                    </div>
                </div>
                `;
        console.log(`${name}EditedName`);

        document.getElementById('editModal').appendChild(editDetails);
        var newItem = document.createElement('tr');
        newItem.innerHTML = `
                        <td class="text-center" id="${name}DataName">${name}</td>
                        <td class="text-center" id="${name}DataDate">${date}</td>
                        <td class="text-center" id="${name}DataAmount">${amount}</td>
                        <td class="text-center">
                            <button id="${name}delete" class="btn-sm btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-trash mb-1" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                            <button id="${name}edit" class="btn btn-sm btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#${name}Modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-pencil mb-1" viewBox="0 0 16 16">
                                <path
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                            </button>
                        </td>`;
        newItem.setAttribute("id", `${name}`);
        list.appendChild(newItem);
        document.getElementById('name').value = "";
        document.getElementById('date').value = "2021-01-01";
        document.getElementById('amount').value = "0";

        document.getElementById("total").disabled = false;

        document.getElementById(`${name}delete`).addEventListener('click', () => {
            document.getElementById(`${name}`).remove();
        });

        document.getElementById(`${name}edit`).addEventListener('click', () => {
            // alert("EDIT");

            var save = document.getElementById(`${name}Save`);
            save.addEventListener('click', () => {

                document.getElementById(`${name}DataName`).innerText = document.getElementById(`${name}EditedName`).value;
                document.getElementById(`${name}DataDate`).innerText = document.getElementById(`${name}EditedDate`).value;
                document.getElementById(`${name}DataAmount`).innerText = document.getElementById(`${name}EditedAmount`).value;
            });

        });
    }
    else {
        alert("Please enter Name");
    }
});
total.addEventListener('click', () => {
    var rows = document.getElementById('listOfItems').tBodies[0].rows.length;
    var totalAmount = 0;
    for (let i = 0; i < rows; i++) {
        totalAmount
            += parseInt(document.getElementById('listOfItems').tBodies[0].rows[i].getElementsByTagName("td")[2].innerText);
    } console.log(rows); var newItem = document.createElement('tr'); newItem.innerHTML = ` <td
                    class="text-center">Total Amount</td>
                    <td class="text-center"></td>
                    <td class="text-center">${totalAmount}</td>
                    <td class="text-center"></td>`;
    list.appendChild(newItem);
    total.disabled = true;
    document.getElementById('name').disabled = true;
    document.getElementById('amount').disabled = true;
    document.getElementById('date').disabled = true;

    var clearList = document.createElement('button');
    clearList.classList.add('btn', 'btn-primary', 'btn-danger', 'col-md-2');
    clearList.setAttribute("id", "clearList");
    clearList.innerHTML = "Clear List";
    document.getElementById("mybuttons").appendChild(clearList);

    document.getElementById("clearList").addEventListener('click', () => {
        console.log("clear");
        list.innerHTML = "";
        document.getElementById("clearList").remove();
        document.getElementById('name').disabled = false;
        document.getElementById('amount').disabled = false;
        document.getElementById('date').disabled = false;
    });
});
        // var save = document.getElementById('save');
        // save.addEventListener('click', () => {
        //     document.getElementById('listOfItems').tBodies[0].rows[0].getElementsByTagName("td")[0].innerText = "Saved Value";
        //     document.getElementById('listOfItems').tBodies[0].rows[0].getElementsByTagName("td")[1].innerText = "2021-10-20";
        //     document.getElementById('listOfItems').tBodies[0].rows[0].getElementsByTagName("td")[2].innerText = "100";
        // });
