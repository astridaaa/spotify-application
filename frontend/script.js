console.log("✅ script.js loaded!");

const button = document.getElementById("login-button");
console.log("Button:", button);

function LandingPage() {
  console.log("✅ LandingPage() called");

  const getSpotifyUserLogin = () => {
    console.log("✅ Button clicked!");
    console.log("Fetching: http://127.0.0.1:8080/api/login");

    fetch("http://127.0.0.1:8080/api/login")
      .then((response) => {
        console.log("Response status:", response.status);
        console.log("Response OK:", response.ok);
        return response.text();
      })
      .then((url) => {
        console.log("Received URL:", url);
        window.location.href = url;
      })
      .catch((error) => {
        console.error("❌ Fetch error:", error);
      });
  };

  button.onclick = getSpotifyUserLogin;
  console.log("✅ Click handler attached");
}
