import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

type Album = {
  userId: number;
  id: number;
  title: string;
}

const fetchAlbums = async () => {
  const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  return result.data;
}
const ReactQuery = () => {
  //key設定, fetcher関数設定
  const { data } = useQuery<Album[]>(['albums'], fetchAlbums);
  return (
    <div>
      {data?.map((album) => <p key={album.id}>{album.title}</p>)}
    </div>
  )
}

export default ReactQuery
