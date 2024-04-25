"use client";

import React from "react";
import Form from "@/components/Form";
import { gql, useMutation } from "@apollo/client";

const INSERT_GAME = gql`
  mutation AddMutation($game: AddGameInput!) {
    addGame(game: $game) {
      id
      title
      platform
      reviews {
        author {
          name
        }
      }
    }
  }
`;

const FormPage = () => {
  const [addGame, { data: fetchedData, loading, error }] =
    useMutation(INSERT_GAME);
  const onSubmit = (data: { title: string; platform: string }) => {
    addGame({
      variables: {
        game: {
          title: data.title,
          platform: data.platform,
        },
      },
    });
    console.log(fetchedData, loading, error)
  };
  console.log("this is form");
  return <Form onSubmit={onSubmit} />;
};

export default FormPage;
