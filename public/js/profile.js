const newFormHandler = async (event) => {
  event.preventDefault();

  //check names lin 6 and 10
  

  const name = document.querySelector("#project-name").value.trim();
  const book_review = document
    .querySelector("#book_review")
    .value.trim();
  const description = document.querySelector("#project-desc").value.trim();

  if (name && book_review && description) {
    const response = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({ name, book_review, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);
