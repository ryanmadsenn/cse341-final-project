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
    `query GetEvents {
        events {
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

  if (document.getElementById("events")) {
    for (i in data.events) {
      const currevent = data.events[i];
      const eventList = document.getElementById("events");
      const div = document.createElement("div");
      const title = document.createElement("h3");
      const id = document.createElement("p");
      const description = document.createElement("p");
      const userLabel = document.createElement("p");
      const userList = document.createElement("ul");
      const users = currevent.users;

      div.classList.add("eventContainer");
      title.textContent = currevent.title;
      id.textContent = "ID: " + currevent.id;
      description.textContent = "Description: " + currevent.description;
      userLabel.textContent = "Users:";
      for (user in users) {
        const li = document.createElement("li");
        li.textContent = users[user].fname + " " + users[user].lname;
        userList.appendChild(li);
      }
      div.appendChild(title);
      div.appendChild(id);
      div.appendChild(description);
      div.appendChild(userLabel);
      div.appendChild(userList);
      eventList.appendChild(div);
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
