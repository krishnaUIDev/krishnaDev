/* eslint-disable no-plusplus */

import { Node, Parser } from 'acorn';
import acornJsx from 'acorn-jsx';
import fm from 'front-matter';
import slug from 'slug';

const ParserWithJSX = Parser.extend(acornJsx());

const parse = (content: string) =>
  ParserWithJSX.parse(content, {
    ecmaVersion: 2020,
    sourceType: 'module',
  });

export const getFrontMatter = (content: string) => fm(content).attributes;

export const addImport = (
  tree: { children: { type: string; data: { estree: Node } }[] },
  name: any,
  location: string
) => {
  tree.children.unshift({
    type: 'mdxjsEsm',
    data: {
      estree: parse(`import ${name} from '${location}'`),
    },
  });
};

export const addContent = (tree: { children: any }, content: string) => {
  tree.children.push({
    type: 'mdxjsEsm',
    data: {
      estree: parse(content),
    },
  });
};

export const getTableOfContents = (tree: { children: any }) => {
  const contents = [];

  for (let nodeIndex = 0; nodeIndex < tree.children.length; nodeIndex++) {
    const node = tree.children[nodeIndex];

    if (node.type === 'heading' && [2, 3].includes(node.depth)) {
      const depth = node.depth - 1;
      const title = node.children
        .filter((n: { type: string }) => n.type === 'text')
        .map((n: { value: any }) => n.value)
        .join('');

      contents.push({
        title,
        slug: slug(title),
        depth,
      });
    }
  }

  return contents;
};
