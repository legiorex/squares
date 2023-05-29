import { useAppSelector } from 'hooks/redux'

import Square from 'components/square'

import styles from './styles.module.scss'

const List = () => {
  const { squares } = useAppSelector((state) => state.squares)

  return (
    <ul className={styles.list}>
      {squares.map((item) => (
        <Square key={item.id} background={item.color} />
      ))}
    </ul>
  )
}

export default List
