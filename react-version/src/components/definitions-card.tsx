import type { FC } from 'react';
import { AccordionCard } from './cards';

const data = [
  { section: "Element", content: <p>An <strong className="text-blue">element</strong></p> },
  { section: "hello", content: <p>govna</p> },
];

export const DefinitionsCard: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-2">Definitions</h1>
      <p className="mb-6">{text}.</p>
      <AccordionCard data={data} />
    </div>
  )
}
