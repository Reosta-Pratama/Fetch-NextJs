import Head from 'next/head'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const index = () => {
  const [allcharacter, setallcharacter] = useState([])
  useEffect(() => {
      async function getPortfolio() {
          const request = await fetch('https://rickandmortyapi.com/api/character',{cache: "no-store"})
          const result = await request.json()

          setallcharacter(result)
      }

      getPortfolio();
  }, []);

  return (
    <main>
      <Head>
        <title>Server</title>
      </Head>

      <h2 className='font-bold'>Server</h2>
      <ul>
        {
          allcharacter.results?.map(function(item){
            return(
                <li key={item.id}><Link href={`/staticprops/${item.id}`.replace(/\s+/g,"-").toLowerCase()}>{item.name}</Link></li>
            )
          }
        )}
      </ul>
    </main>
  )
}

export default index
