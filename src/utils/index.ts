export const uuid = () => {
  return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
}

export const getColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return `#${randomColor}`
}
