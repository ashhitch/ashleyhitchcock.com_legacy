import React from 'react';
import renderHTML from 'react-render-html';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDarkPlus';
import Gist from 'react-gist';

const replaceAll = (target, search, replacement) => target.replace(new RegExp(search, 'g'), replacement);

const decodeHtml = text => {
  const entities = {
    '#8220': '"',
    '#8221': '"',
    '#8216': "'",
    '#8217': "'",
    amp: '&',
    apos: "'",
    '#x27': "'",
    '#x2F': '/',
    '#39': "'",
    '#47': '/',
    lt: '<',
    gt: '>',
    nbsp: ' ',
    quot: '"',
  };
  return text.replace(/&([^;]+);/gm, function(match, entity) {
    return entities[entity] || match;
  });
};
const parseCode = content => {
  // If no content then return
  if (!content) {
    return;
  }

  // Remove p tags from [] blocks
  const filteredContent = content.replace(/<p>[*]?(.*?)<\/p>/gi, '$1');

  // Test for highlighed code
  const highlightDelimiterPattern = /\[([a-z]+)\]((.|\n|\r)*?)\[\/[a-z]+\]/gi;
  const highlightTest = highlightDelimiterPattern.exec(filteredContent);
  const updatedContent = filteredContent.split(highlightDelimiterPattern).map((token, i) => {
    // hack out the group we need for the highlighter
    // console.log(highlightTest);
    if (highlightTest && token === highlightTest[1]) {
      return;
    }

    if (highlightTest && token === highlightTest[2]) {
      let code = highlightTest[2];
      code = decodeHtml(code);
      code = replaceAll(code, '<br />', '\n');
      code = replaceAll(code, '<p>', '');
      code = replaceAll(code, '</p>', '\n');
      // console.log(code, highlightTest[1]);
      return (
        <Highlight {...defaultProps} code={code} language={highlightTest[1]} theme={theme} key={i}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      );
    }

    // Also test for embeded gists
    const delimiterPattern = /<script src="https:\/\/gist.github.com\/ashhitch\/(.*?).js"><\/script>/gi;
    const test = delimiterPattern.exec(token);

    const updatedContentGist = token.split(delimiterPattern).map((token, i) => {
      if (test && token === test[1]) {
        return <Gist id={test[1]} key={i} />;
      }

      // .replace(/(?:\r\n|\r|\n)+/g, '<br />')
      return <React.Fragment key={i}>{renderHTML(token)}</React.Fragment>;
    });

    return <React.Fragment key={i}>{updatedContentGist}</React.Fragment>;
  });

  return <>{updatedContent}</>;
};

export default parseCode;
