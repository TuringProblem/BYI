import type { FC, ReactNode, HTMLAttributes } from "react";
import { BaseCard } from "../base/base-card";

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
        <div className="bg-gray-100 p-4 rounded-xl">
          <details className="flex flex-col gap-4" key={key}>
            <summary className="flex text-lg font-bold text-black hover:cursor-pointer">{card.section}</summary>
            <p className={`flex text-black ${className}`}>{card.content}</p>
          </details>
        </div>
      ))}
    </BaseCard>
  );
}

export default AccordionCard;
