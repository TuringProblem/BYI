import type { FC, ReactNode } from "react";
import { BaseCard } from "../base/base-card";

type AccordionSection = {
  section: string;
  content: ReactNode;
}

type AccordionCardProps = {
  data: AccordionSection[];
}

export const AccordionCard: FC<AccordionCardProps> = ({ data }) => {
  return (
    <BaseCard>
      <div className="flex flex-col gap-4">
        {data.map((card, key) => (
          <div className="flex flex-col gap-2" key={key}>
            <details>
              <summary className="text-lg font-bold text-black">{card.section}</summary>
              <div className="bg-gray-200 p-4 rounded-xl">{card.content}</div>
            </details>
          </div>
        ))}
      </div>
    </BaseCard>
  );
}

export default AccordionCard;
