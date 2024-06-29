declare module 'react-highlight-words' {
  import * as React from 'react';

  interface HighlighterProps {
    autoEscape?: boolean;
    highlightClassName?: string;
    highlightStyle?: React.CSSProperties;
    sanitize?: (text: string) => string;
    searchWords: string[];
    textToHighlight: string;
    activeIndex?: number;
    caseSensitive?: boolean;
    findChunks?: (options: {
      autoEscape: boolean;
      caseSensitive: boolean;
      sanitize: (text: string) => string;
      searchWords: string[];
      textToHighlight: string;
    }) => { start: number; end: number }[];
    highlightTag?: React.ElementType;
    unhighlightTag?: React.ElementType;
  }

  const Highlighter: React.FC<HighlighterProps>;
  export default Highlighter;
}
