"use client";

import { FC } from "react";
import { useFormState } from "react-dom";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";

import * as actions from "@/lib";

const CreateSnippet: FC = () => {
  const [formState, action] = useFormState(actions.snippet._create, {
    titleError: "",
    codeError: "",
  });
  const { titleError, codeError } = formState;

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <Divider className="my-4" />
      <div className="flex flex-col gap-4">
        <Input
          id="title"
          type="text"
          label="Title"
          name="title"
          isInvalid={titleError !== ""}
          errorMessage={titleError}
        />
        <Textarea
          id="code"
          name="code"
          label="Code"
          isInvalid={codeError !== ""}
          errorMessage={codeError}
        />
        <Button className="w-2/12 self-end" type="submit" color="primary">
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateSnippet;
