import { useEffect, useState } from 'react'
import axios from 'axios'
import ScoopOption from './ScoopOption'
import { Row } from 'react-bootstrap'

export default function Options({ optionType }) {
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])


  useEffect(() => {
    async function fetch() {
      const res = await axios.get(`http://localhost:3030/${ optionType }`)
      if (res.status === 200) return setItems(res.data)
      
      setError(res.data)
    }

    fetch()
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;
  const optionItems = items.map(item => (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    )
  )

  return (
    <Row>
      {optionItems}
    </Row>
  )
}
