'use client';

import { FC } from "react";

import { ErrorProps } from "./types";

const ErrorCreateSnippet: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div>
      {error.message}
    </div>
  );
}

export default ErrorCreateSnippet