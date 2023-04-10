import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  const paths = data?.results?.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (getId) => {
  const id = getId.params.id;
  const res = await fetch('https://rickandmortyapi.com/api/character/' + id);
  const data = await res.json();

  return {
    props: { data: data }
  }
}

const Details = ({ data }) => {
  return (
    <div>
      <h1>{ data.name }</h1>
      <p>{data.status}</p>
      <p>{data.species}</p>
      <p>{data.type}</p>
      <p>{data.gender}</p>
      <Link href={data.origin.url}><p>{data.origin.name}</p></Link>
      <Link href={data.location.url}><p>{data.location.name}</p></Link>
      <img src={data.image} alt="" />
      
      {
        data['episode'].map((episodes:any, index:number) => {
          return(
            <div key={episodes}>
              <Link href={episodes}><h4>Episode {index+1}</h4></Link>
            </div>
          )
        })
      }
    </div>
  );
}

export default Details;