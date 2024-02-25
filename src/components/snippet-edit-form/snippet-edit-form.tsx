"use client";
import { FC, startTransition, useState } from "react";
import { Editor } from "@monaco-editor/react";

import * as lib from "@/lib";
import { Props } from "./types";
import { Button } from "@nextui-org/react";

export const SnippetEditForm: FC<Props> = ({ snippet }) => {
  const { code: oldCode, id } = snippet;
  const [code, setCode] = useState<string>(oldCode);

  const onChangeEditor = (value: string = "") => setCode(value);
  const onClickSave = async () => {
    await lib.snippet.edit(id, code);
  }

  return (
    <>
      <Button onClick={onClickSave} color="success">
        Save
      </Button>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={oldCode}
        options={{ minimap: { enabled: false } }}
        value={code}
        onChange={onChangeEditor}
      />
    </>
  );
};
