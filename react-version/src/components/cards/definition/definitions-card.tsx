import type { FC } from 'react';
import {
  ElementDefinition,
  RelationDefinition,
  SetDefinition
} from './definitions';
import { AccordionCard } from '../accordion/accordion-card';

const data = [
  { section: "Element", content: <ElementDefinition wikiLink="https://en.wikipedia.org/wiki/Element_of_a_set" /> },
  { section: "Set", content: <SetDefinition wikiLink="https://en.wikipedia.org/wiki/Set_(mathematics)" /> },
  { section: "Relation", content: <RelationDefinition wikiLink="https://en.wikipedia.org/wiki/Relation_(mathematics)" /> },
];

export const DefinitionsCard: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-2">Definitions</h1>
      <p className="mb-6">{text}</p>
      <AccordionCard data={data} className="justify-start items-baseline" />
    </div>
  )
}

