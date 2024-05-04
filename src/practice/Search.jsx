import { useState } from 'react'

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Durian' },
    { id: 5, name: 'Elderberry' },
  ]

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
    const results = search(items, event.target.value)
    setSearchResults(results)
  }

  function search(items, term) {
    return items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    )
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
