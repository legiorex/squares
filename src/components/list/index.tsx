import { useTransition } from '@react-spring/web'
import { useAppSelector } from 'hooks/redux'
import { Square as SquareType } from 'types'

import Square from 'components/square'

import styles from './styles.module.scss'

const LEFT_PADDING = 10
const WIDTH = 20

const List = () => {
  const { squares } = useAppSelector((state) => state.squares)

  const addLeftShift = squares.map((item, index) => ({
    ...item,
    left: `calc(${index * WIDTH}% + ${(index + 1) * LEFT_PADDING}px)`,
  }))

  const transitions = useTransition(addLeftShift, {
    key: (item: SquareType) => item.id,
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: ({ left }) => ({ left, opacity: 1, transform: 'translate3d(0%,0,0)' }),
    leave: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    update: ({ left }) => ({ opacity: 1, left }),
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
