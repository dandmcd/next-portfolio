import React, { useEffect } from "react";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";

const md = new MarkdownIt({
  html: true,
  linkify: false,
});

const CodeSnippet = ({
  code,
}: {
  code: string;
}): JSX.Element => {
  // Highlight the code using Prism.js after the component mounts
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!code) {
    return <div />;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: md.render(code) }} />
  );
};

export default CodeSnippet;
