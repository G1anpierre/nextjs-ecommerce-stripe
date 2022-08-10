import React, {useEffect, useState, memo} from 'react'
import styles from './InputQuantity.module.css'

const Input = ({
  value,
  onChange,
}: {
  value: number
  onChange: (quantiry: number) => void
}) => {
  const [quantity, setQuantity] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value))
  }

  useEffect(() => {
    onChange(quantity)
  }, [quantity])

  return (
    <input
      type="number"
      value={quantity}
      onChange={handleChange}
      className={styles.input}
      min={1}
    />
  )
}

const inputPropsAreEqual = (prevProps: any, nextProps: any) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.onChange === nextProps.onChange
  )
}

export const MemoizedInput = memo(Input, inputPropsAreEqual)
