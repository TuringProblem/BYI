import type { FC, ReactNode, HTMLAttributes } from "react";
import { BaseCard } from "../base/base-card";
import './accordion-card.css';

type AccordionSection = {
  section: string;
  content: ReactNode;
};

type AccordionCardProps = {
  data: AccordionSection[];
} & HTMLAttributes<HTMLDivElement>;

export const AccordionCard: FC<AccordionCardProps> = ({ data, className }) => {
  return (
    <BaseCard className="gap-4 rounded-md">
      {data.map((card, key) => (
        <div className="bg-blue-100 p-4 rounded-xl" key={key}>
          <details className="flex flex-col gap-4">
            <summary className="flex text-lg font-bold text-black hover:cursor-pointer">{card.section}</summary>
            <div className={`flex flex-col content text-left text-black ${className}`}>{card.content}</div>
          </details>
        </div>
      ))}
    </BaseCard>
  );
}

