import type { FC } from 'react';

type SpecialCardProps = {
  text: string
}

export const SpecialCard: FC<SpecialCardProps> = ({ text }) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-2">Special Card</h1>
      <p className="mb-6">{text}.</p>
    </div>
  )
}
