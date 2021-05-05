
const whoseMove = (moveLog) => {
  return (moveLog.length%2 === 0) ? 'white' : 'black'
}
export default whoseMove;
