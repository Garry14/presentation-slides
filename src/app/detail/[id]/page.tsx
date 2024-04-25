import React from "react";
import { gql } from "@apollo/client";
import { getClient } from "@/components/helpers/apollo-clients";

const GET_DETAIL_DATA = gql`
  query GameQuery($id: ID!) {
    game(id: $id) {
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

const DetailPage = async ({ params }: { params: { id: String } }) => {
  const client = getClient();
  const { data } = await client.query({
    query: GET_DETAIL_DATA,
    variables: { id: params.id },
  });

  console.log("data", data);

  return (
    <div className="w-full p-4">
      <h1 className="mb-2">Detail</h1>
      <div key={data?.game.id} className="mb-6">
        <h2>Game Title : {data?.game.title}</h2>
        <p>Platform : {data?.game.platform}</p>
        Reviewers:{" "}
        <ul>
          {data?.game.reviews.map((review: any) => (
            <li key={review.author.id}>
              <h3>{review.author.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailPage;
