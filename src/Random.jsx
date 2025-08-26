function Random () {

  let number = Math.random() * 4;
  return <p style= {{'color': '#776691'}}>The Random Number Generated is: {Math.round(number)}</p>

}

export default Random;