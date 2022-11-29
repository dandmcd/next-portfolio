import React, { useEffect } from "react";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";

const md = new MarkdownIt({
  html: true,
  linkify: false,
});

const CodeSnippet = ({
  id,
  markdown,
}: {
  id: string;
  markdown: any;
}): JSX.Element => {
  const mkd = markdown?.find((m: any) => m.sys.id === id.toString());
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: md.render(mkd.codeSnippet) }} />
  );
};

export default CodeSnippet;
