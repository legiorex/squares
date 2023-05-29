import { useAppDispatch } from 'hooks/redux'
import { addSquare } from 'store/actions'
import { getColor, uuid } from 'utils'

import Button from 'components/button'

const AddItem = () => {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(addSquare({ id: uuid(), color: getColor() }))
  }

  return <Button onClick={onClick}>Add</Button>
}

export default AddItem
