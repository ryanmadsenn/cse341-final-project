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
};

main();
