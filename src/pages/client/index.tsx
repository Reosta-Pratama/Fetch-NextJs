"use client"

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const index = () => {
  const {data: characters, isLoading: charactersLoading, error: charactersError} = useSWR(
    'https://rickandmortyapi.com/api/character',
    fetcher
  )

  return (
    <main>
      <Head>
        <title>Client</title>
      </Head>

      <h2 className='font-bold'>Client</h2>
      <ul>
        {
          characters?.results?.map(function(item){
            return(
                <li key={item.id}><Link href={`/staticprops/${item.name}`.replace(/\s+/g,"-").toLowerCase()}>{item.name}</Link></li>
            )
          }
        )}
      </ul>
    </main>
  )
}

export default index 
