import { useEffect, useRef, useState } from 'react'
import { SpecialCard } from '../../components/SpecialCard'

export function SetsPage() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (submitted !== null) dialogRef.current?.showModal()
  }, [submitted])

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center w-full h-full p-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            So you want to learn sets!
          </h1>
          <p className="text-gray-600 mb-6">Hello world.</p>

          <div className="p-4 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => setSubmitted(value)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
            >
              Click Me Please
            </button>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-black rounded-sm text-white"
            />
            <SpecialCard text="This is a special card" />
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setSubmitted(null)}
        className="bg-white p-8 rounded-xl shadow-md m-auto"
      >
        <div className="flex flex-col gap-4 items-center fadder">
          <p>{submitted}</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="bg-[#aaaaaa] text-white p-2 rounded-md cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </dialog>
    </div>
  )
}
