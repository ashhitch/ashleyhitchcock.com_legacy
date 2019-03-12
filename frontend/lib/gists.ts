import Gist from "react-gist";
import React from "react";
import renderHTML from "react-render-html";

const parseGist = content => {
  if (!content) {
    return;
  }
  const delimiterPattern = /<script src="https:\/\/gist.github.com\/ashhitch\/(.*?).js"><\/script>/gi;
  const test = delimiterPattern.exec(content);

  const updatedContent = content.split(delimiterPattern).map((token, i) => {
    if (test && token === test[1]) {
      return <Gist id={test[1]} key={i} />;
    }

    return <React.Fragment key={i}>{renderHTML(token)}</React.Fragment>;
  });

  return <>{updatedContent}</>;
};

export default parseGist;
