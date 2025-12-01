const button = document.getElementById("login-button");

function LandingPage() {
  const getSpotifyUserLogin = () => {
    fetch("http://127.0.0.1:8080/api/get-user-code")
      .then((response) => response.text())
      .then((response) => {
        window.location.replace(response);
      });
  };
}

button.addEventListener("click", LandingPage());
