const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("ok");
  // Collect values from the login form
<<<<<<< HEAD
  const email = document.querySelector("typeEmailX-2").value.trim();
  const password = document.querySelector("typePasswordX-2").value.trim();
=======
  const email = document.querySelector("#typeEmailX-2").value.trim();
  const password = document.querySelector("#typePasswordX-2").value.trim();
>>>>>>> d38bf422850f7870d65d2ed52695b68f161fc49e

  if (email && password) {
    // Send a POST request to the API endpoint

    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

 
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

<<<<<<< HEAD
document.querySelector("#login-form").addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
=======
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
>>>>>>> d38bf422850f7870d65d2ed52695b68f161fc49e
