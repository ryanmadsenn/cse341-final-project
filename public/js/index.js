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
  const events = await queryGraphQL(
    `{
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
      }`
  );

  const { data } = await events.json();
  console.log(data);
};

main();
