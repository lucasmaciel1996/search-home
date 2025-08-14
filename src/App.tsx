import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Search Home :)</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}

      </button>

      <code>
        {JSON.stringify({ e: import.meta.env }, null, 4)}
      </code>
    </>
  )
}

