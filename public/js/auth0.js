const configureClient = async () => {
  auth0Client = await auth0.createAuth0Client({
    domain: "dev-p7xq1dvhz2bqeljn.us.auth0.com",
    clientId: "gxZHewSlncZFVP8DF0LyHVdCKoMknB0a",
    authorizationParams: {
      audience: "https://localhost:8080",
    },
  });
};

const updateUI = async () => {
  const isAuthenticated = await auth0Client.isAuthenticated();
  document.getElementById("btn-logout").disabled = !isAuthenticated;

  document.getElementById("btn-login").disabled = isAuthenticated;

  if (isAuthenticated) {
    document.getElementById("gated-content").classList.remove("hidden");

    document.getElementById("ipt-access-token").innerHTML =
      await auth0Client.getTokenSilently();

    let userProfile = JSON.parse(JSON.stringify(await auth0Client.getUser()));
    for (key in userProfile) {
      const li = document.createElement("li");
      li.classList.add("list-group", "text-start");
      li.textContent = key + ": " + userProfile[key];
      document.getElementById("ipt-user-profile").appendChild(li);
    }
    // document.getElementById("ipt-user-profile").textContent =
    // JSON.stringify(await auth0Client.getUser());
  } else {
    document.getElementById("gated-content").classList.add("hidden");
  }
};

const login = async () => {
  await auth0Client.loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  });
};

const logout = () => {
  auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
};

const resetLocalStorage = () => {
  localStorage.clear();
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    document.cookie = cookies[i] + "=; expires=" + new Date(0).toUTCString();
  }
  location.reload();
};

window.onload = async () => {
  await configureClient();
  updateUI();
  const isAuthenticated = await auth0Client.isAuthenticated();
  if (isAuthenticated) {
    // show the gated content
    return;
  }
  // NEW - check for the code and state parameters
  const query = window.location.search;

  if (query.includes("code=") && query.includes("state=")) {
    // Process the login state
    await auth0Client.handleRedirectCallback();
    updateUI();
    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
  }
};
