// Alert Message Reference.
const alertMessage = document.querySelector("#projectAlert");

// Project Data Array with all the objects.
const project_data = [];

const current_data = [];

// List details Array.
let arrList = [];

// List-items Add
let listItems = document.getElementsByClassName("List-container")[0];

let items = () => {
    let li = "";

    arrList.map((obj) => {
        listItems.innerHTML += `<li id="project_show" onclick="show_project(${obj.id})">${obj.Project}</li>`;
    });
};

// Show Project by click on the List.

function show_project(id) {
    project_data.forEach((obj) => {
        if (obj.id == id) {
            let a = document.getElementById(obj.Project);

            if (a.style.display != "block") {
                a.style.display = "block";
            } else {
                a.style.display = "none";
            }
        }
    });
}

// toggle functionality
const HamburgerIcon = document.getElementById("Hamburger-icon");

HamburgerIcon.addEventListener("click", () => {
    const leftContainer = document.getElementsByClassName("left-container")[0];

    if (leftContainer.style.display != "none") {
        leftContainer.style.display = "none";
    } else {
        leftContainer.style.display = "block";
    }
});

const container = document.querySelector("#projectCard");
const projectbtn = document.getElementById("project-btn");

// Get input field value.

let Project_name = document.getElementById("Project_name");

projectbtn.addEventListener("click", () => {
    let new_project = Project_name.value;
    let id = Math.random();

    arrList.forEach((getobj) => {
        if (getobj.Project === new_project) {
            alertMessage.classList.remove("remove");
            document.getElementById("projectAlert").style.display = "block";
            new_project = "";
        }
    });

    if (new_project !== "") {
        const obj = {
            id: id,
            Project: new_project,
        };

        project_data.push(obj);

        // Push to in Current_Array[]
        current_data.push(obj);

        // Here We Again update our DOM.
        listItems.innerHTML = "";

        // Push obj to List Array
        arrList.push(obj);
    }
    Project_name.value = "";

    // Getting All the project data value from project_data Array.

    // Create Project Cards.
    current_data.forEach((value) => {
        const node = document.createElement("div");

        node.classList.add("card");

        const note = `
        <div class="card-body">
        <i class="fa fa-trash" aria-hidden="true" id='trash'></i>
        <a href="/task.html">
        <h4 class="card-title">${value.Project}</h4>
        </a>
        <ul>
            <li>Task One</li>
            <li>Task Two</li>
        </ul>
       </div>`;

        node.setAttribute("id", value.Project);

        node.insertAdjacentHTML("afterbegin", note);

        alert(`${value.Project} Project Added.`);
        container.appendChild(node);

        items(value.Project);

        // Delete Project.
        const trash = node.querySelector("#trash");

        console.log("here" + trash);

        trash.addEventListener("click", () => {
            let res = confirm("Do you really want to delete!");

            if (res != false) {
                node.remove();

                // Update arrList[] After Delete project.

                let temp = [];
                arrList.filter((obj) => {
                    if (obj.id != value.id) {
                        temp.push(obj);
                    }
                });

                arrList.length = 0;
                arrList = [...temp];

                listItems.innerHTML = "";
                items();
            }
        });
    });
    current_data.length = 0;
});

// Remove alert Message!

function remove() {
    setTimeout(() => {
        alertMessage.style.display = "none";
    }, 1000);

    alertMessage.classList.add("remove");
}