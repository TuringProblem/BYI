import type { FC } from 'react';
import { DefinitionsCard } from "../../components/"

export const SetsPage: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center fadder">
      <div className="text-center w-full h-full p-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            So you want to learn sets!
          </h1>
          <div className="p-4 flex flex-col gap-4">
            <DefinitionsCard text="" />
          </div>
        </div>
      </div>
    </div>
  )
}
