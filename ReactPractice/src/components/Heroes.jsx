import React from 'react'

function Heroes() {
    const myHeroes = ["IronMan","CaptainAmerica","Thor","BlackWidow", "Hulk", "Hawkeye"]
    const heroesList = myHeroes.map(hero => <li className='text-red-500 font-bold list-disc list'>{hero}</li>)
  return (
    <div className='ml-8'>
        <ul>{heroesList}</ul>
    </div>
  )
}

export default Heroes