import React from 'react';
import { default as tokens } from '../tokens/ns-tokens.json';

export const Tokens = ({...props}) => {
  const tokensNeeded = JSON.stringify(tokens[props.component], null, 2);

  if (tokensNeeded !== undefined) {
    return (
      <>
        <h2>Design Tokens</h2> {/* This heading doesn't get included in the page table of contents (TOC) https://github.com/facebook/docusaurus/issues/1921 */}

        <p>You can change the branded look and feel of the ns-{props.component} by modifying these options in the design tokens.</p>

        <p>Read more about design tokens in our <a href="/docs/getting-started/design-tokens">getting started guide</a>.</p>

        <pre><code>{ tokensNeeded }</code></pre>
      </>
    )
  }

  return null
};
