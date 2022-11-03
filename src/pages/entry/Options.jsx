import { useEffect, useState } from 'react'
import axios from 'axios'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'
import { Row } from 'react-bootstrap'
import AlertBanner from '../common/AlertBanner'

export default function Options({ optionType }) {
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])


  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get(`http://localhost:3030/${ optionType }`)
        if (res.status === 200) return setItems(res.data)
      } catch (error) {
        setError(error)
      }
    }

    fetch()
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const optionItems = items.map(item => (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    )
  )

  if (error) return <AlertBanner />

  return (
    <Row>
      {optionItems}
    </Row>
  )
}