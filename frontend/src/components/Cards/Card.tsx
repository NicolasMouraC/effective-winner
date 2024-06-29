import React from 'react';
import Highlighter from 'react-highlight-words';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ item, query }) => {
  return (
    <div data-testid='info-card' className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6">
          {Object.keys(item).map((key) => (
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit" key={key}>
              <strong>{key}</strong>:
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={item[key as any]}
              />
            </p>
          ))}
      </div>
    </div> 
  );
};

export default Card;