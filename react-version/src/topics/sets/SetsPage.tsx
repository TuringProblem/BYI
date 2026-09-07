import { DefinitionsCard } from '../../components/'


export function SetsPage() {

  return (
    <div className="bg-gray-100 min-h-screen flex items-center fadder">
      <div className="text-center w-full h-full p-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            So you want to learn sets!
          </h1>
          <p className="text-gray-600 mb-6">Hello world.</p>
          <div className="p-4 flex flex-col gap-4">
            <DefinitionsCard text="This is a special card" />
          </div>
        </div>
      </div>
    </div>
  )
}
