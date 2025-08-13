import React from 'react'

type Props = {
  name: string
}

function Greeting({ name }: Props) {
  return <div>Hey, {name}</div>
}

function Button () {
  return <button>Click me Aqui nova PR</button>
}

function Input() {
  return <input type="text" placeholder="Type here" />
}

export default Greeting
