import type { FC } from 'react';
import type { Wiki } from './shared/';

export const RelationDefinition: FC<Wiki> = ({ wikiLink, wikiText = "Wikiepedia Link!" }) => (
  <>
    <a href={wikiLink} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-900 hover:underline">{wikiText}</a>
    <p>A <strong>Relation</strong></p>
  </>
);
