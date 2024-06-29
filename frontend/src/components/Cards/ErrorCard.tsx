import React from 'react';
import { ErrorCardProps } from './types';

const ErrorCard: React.FC<ErrorCardProps> = ({ error, query }) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6">
        <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {query ? `No results for '${query}'` : (error || 'Send a CSV file to start')}
        </h4>
          {error ? (
            <p>
              Please make sure it is a csv file and try again
            </p>
            ) : null
          }
      </div>
    </div> 
  );
};

export default ErrorCard;