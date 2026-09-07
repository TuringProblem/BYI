import type { FC, ReactNode, HTMLAttributes } from "react";

type BaseCardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;


export const BaseCard: FC<BaseCardProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col w-full h-full bg-white p-8 ${className}`}>
      {children}
    </div>
  );
};
