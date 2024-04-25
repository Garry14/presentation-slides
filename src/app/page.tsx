import { gql } from "@apollo/client";
import { getClient } from "@/components/helpers/apollo-clients";

const GET_DATA = gql`
  query GameQuery {
    games {
      title
      platform
      id
      reviews {
        author {
          id
          name
          reviews {
            author {
              id
              name
            }
          }
        }
      }
    }
  }
`;
const Home = async () => {
  const client = getClient();
  const { data } = await client.query({
    query: GET_DATA,
  });

  console.log("data", data);

  return (
    <div className="w-full p-4">
      <h1 className="mb-2">Sample Page</h1>
      {data?.games?.map((game: any) => (
        <div key={game.id} className="mb-6">
          <h2>Game Title : {game.title}</h2>
          <p>Platform : {game.platform}</p>
          Reviewers:{" "}
          <ul>
            {game.reviews.map((review: any) => (
              <li key={review.author.id}>
                <h3>{review.author.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
