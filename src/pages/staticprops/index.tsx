import Head from 'next/head'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'

const index = () => {
  const [allcharacter, setallcharacter] = useState([])
  useEffect(() => {
      async function getPortfolio() {
          const request = await fetch('https://rickandmortyapi.com/api/character')
          const result = await request.json()

          setallcharacter(result)
      }

      getPortfolio();
  }, []);

  return (
    <main>
      <Head>
        <title>Static Props</title>
      </Head>

      <h2 className='font-bold'>getStaticProps</h2>
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
