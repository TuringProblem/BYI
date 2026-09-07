import type { FC } from 'react';
import type { Wiki } from './shared/';

export const ElementDefinition: FC<Wiki> = ({ wikiLink, wikiText = "Wikiepedia Link!" }) => (
  <>
    <a href={wikiLink} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-900 hover:underline">{wikiText}</a>
    <div className="p-2 bg-gray-50 rounded-md mt-4 w-full">
      An <strong>Element</strong> at its fundamental level is fairly simple to understand. For example, look around your room - everything around you is an element of some set... e.g:
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>an Iphone is an element inside of the set of phones.</li>
        <li>A hat is an element of the set of Hats.</li>
        <li>Your key is an element of a set of Keys.</li>
      </ul>
    </div>
  </>
);
