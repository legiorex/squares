import { useTransition } from '@react-spring/web'
import { useAppSelector } from 'hooks/redux'
import { Square as SquareType } from 'types'

import Square from 'components/square'

import styles from './styles.module.scss'

const List = () => {
  const { squares } = useAppSelector((state) => state.squares)

  const transitions = useTransition(squares, {
    key: (item: SquareType) => item.id,
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(50%,0,0)' },
  })

  return (
    <ul className={styles.list}>
      {transitions((style, item) => (
        <Square animatedStyle={{ style }} key={item.id} background={item.color} />
      ))}
    </ul>
  )
}

export default List
