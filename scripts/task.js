// take Reference's

const addProject = document.getElementById("addproject");
const projectdetails_Section = document.querySelector(".Project-details");

// From data Reference's
const Projecttitle = document.getElementById("Projecttitle");
const projectName = document.getElementById("projectName");
const technology = document.getElementById("technology");
const Description = document.getElementById("Description");
const GitHub = document.getElementById("GitHub");
const deployed = document.getElementById("deployed");

// Add project.

addProject.addEventListener("click", () => {
    if (
        Projecttitle.value != "" &&
        projectName.value != "" &&
        technology.value != "" &&
        Description.value != "" &&
        GitHub.value != "" &&
        deployed.value != ""
    ) {
        let My_project = document.createElement("div");

        My_project.classList.add("projectdetails_card");

        // Project template
        let projectdetails = `<div class="card">
               <div class="card-header">
                ${Projecttitle.value}
               </div>
               <div class="card-body">
                <div>
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <th scope="row">1.</th>
                                <td><h6>Project Name</h6></td>
                                <td>${projectName.value}</td>
                            </tr>
                            <tr>
                                <th scope="row">2.</th>
                                <td><h6>technology</h6> </td>
                                <td>${technology.value}</td>
                            </tr>
                            <tr>
                                <th scope="row">3.</th>
                                <td><h6>Project Description</h6></td>
                                <td>${Description.value}</td>
                            </tr>
                            <tr>
                                <th scope="row">4.</th>
                                <td><h6>GitHub</h6></td>
                                <td>
                                    <a href="${GitHub.value}" target="_blank">${GitHub.value}</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5.</th>
                                <td><h6>deployed Link</h6></td>
                                <td>
                                    <a href="${deployed.value}" target="_blank">${deployed.value}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a class="btn btn-primary">Update</a>
                <a class="btn btn-danger delete_project">Delete</a>
            </div>
        </div>
        `;

        My_project.insertAdjacentHTML("afterbegin", projectdetails);

        projectdetails_Section.appendChild(My_project);

        // Clear input fields
        Projecttitle.value = "";
        projectName.value = "";
        technology.value = "";
        Description.value = "";
        GitHub.value = "";
        deployed.value = "";

        // Delete project.

        const delete_project = My_project.querySelector(".delete_project");

        delete_project.addEventListener("click", () => {
            My_project.remove();
        });
    } else {
        alert("Please fill out the form completely!");
    }
});