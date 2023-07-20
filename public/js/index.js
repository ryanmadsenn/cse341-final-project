const queryGraphQL = async (query, variables) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const graphql = JSON.stringify({
    query,
    variables,
  });

  const requestOptions = {
    method: "POST",
    headers,
    body: graphql,
    redirect: "follow",
  };

  return await fetch("http://localhost:8080/graphql", requestOptions);
};

const main = async () => {
  const event = await queryGraphQL(
    `query GetEvent($eventId: ID!) {
        event(id: $eventId) {
          id
          title
          description
          users {
            id
            fname
            lname
          }
        }
      }`,
    {
      eventId: "64b48805546be3b88ef4272b",
    }
  );

  const { data } = await event.json();
  console.log(data);

  //For Event Page Only
  if (document.getElementById("title")) {
    const title = document.getElementById("title");
    const id = document.getElementById("id");
    const description = document.getElementById("description");
    const usersList = document.querySelector("#users ul");
    title.textContent = data.event.title;
    id.textContent = "Event ID: " + data.event.id;
    description.textContent = "Event Description: " + data.event.description;
    let users = data.event.users;
    for (user in users) {
      const li = document.createElement("li");
      li.textContent = users[user].fname + " " + users[user].lname;
      usersList.appendChild(li);
    }
  }
};

function events() {
  window.location.href = "./events.html";
}

function profile() {
  window.location.href = "./index.html";
}

main();
