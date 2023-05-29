import { useAppDispatch } from 'hooks/redux'
import { addSquare } from 'store/actions'
import { uuid } from 'utils'

import Button from 'components/button'

const AddItem = () => {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(addSquare(uuid()))
  }

  return <Button onClick={onClick}>Add</Button>
}

export default AddItem
