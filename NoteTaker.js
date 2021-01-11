var addNote = document.getElementById('addNote');
var clearNote = document.getElementById('clearNote');
var notes = document.getElementById('notes');
clearNote.addEventListener('click', () => {
    document.getElementById('title').value = "";
    document.getElementById('note').value = "";
});
addNote.addEventListener('click', () => {
    event.preventDefault();
    var note = document.getElementById('note').value;
    var title = document.getElementById('title').value;
    var titleID = title.replace(/\s+/g, '');
    if (title != "") {
        var viewDetails = document.createElement('div');
        viewDetails.classList.add('modal');
        viewDetails.setAttribute("id", `${titleID}Modal`);
        viewDetails.innerHTML = `
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${title}</h5>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <p>${note}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>`;

        var newNote = document.createElement('div');
        newNote.classList.add('rounded', 'mt-3', 'border', 'p-3', 'col-5');
        newNote.innerHTML = `
                    <h4>${title}</h4>
                    <p style="white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;">${note}</p>
                        <button class="float-end btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#${titleID}Modal">ViewDetails</button>
                        <button class="mx-1 float-end btn btn-danger"
                            id="${titleID}delete">Delete</button>`;
        newNote.setAttribute("id", `${titleID}`);
        newNote.appendChild(viewDetails);
        notes.appendChild(newNote);

        document.getElementById('title').value = "";
        document.getElementById('note').value = "";

        document.getElementById(`${titleID}delete`).addEventListener('click', () => {
            document.getElementById(`${titleID}`).remove();
        });

        // document.getElementById(`${name}edit`).addEventListener('click', () => {
        //     // alert("EDIT");

        //     var save = document.getElementById(`${name}Save`);
        //     save.addEventListener('click', () => {

        //         document.getElementById(`${name}DataName`).innerText = document.getElementById(`${name}EditedName`).value;
        //         document.getElementById(`${name}DataDate`).innerText = document.getElementById(`${name}EditedDate`).value;
        //         document.getElementById(`${name}DataAmount`).innerText = document.getElementById(`${name}EditedAmount`).value;
        //     });

        // });
    }
    else {
        alert("Please add title to note");
    }
});
        // var save = document.getElementById('save');
        // save.addEventListener('click', () => {
        //     document.getElementById('listOfNotes').tBodies[0].rows[0].getElementsByTagName("td")[0].innerText = "Saved Value";
        //     document.getElementById('listOfNotes').tBodies[0].rows[0].getElementsByTagName("td")[1].innerText = "2021-10-20";
        //     document.getElementById('listOfNotes').tBodies[0].rows[0].getElementsByTagName("td")[2].innerText = "100";
        // });