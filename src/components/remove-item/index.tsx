import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { removeSquare } from 'store/actions'

import Button from 'components/button'

const RemoveItem = () => {
  const dispatch = useAppDispatch()
  const { squares } = useAppSelector((state) => state.squares)

  const onClick = () => {
    dispatch(removeSquare())
  }
  return (
    <Button onClick={onClick} disabled={!squares.length}>
      Remove
    </Button>
  )
}

export default RemoveItem
