import React from 'react'
import { useFetchAbumsQuery } from '../store'
import Skeleton from './Skeleton';
import Button from './Button';
import { useAddAlbumMutation } from '../store';
import AlbumsListItem from './AlbumsListItem';

function AlbumList({ user }) {
  const {data, error, isFetching} = useFetchAbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const hanldeAddAlbum = () => {
    addAlbum(user);
  }

  let content;
  if (isFetching) {
    content = <Skeleton className='h-10 w-full' times={3} />
  } else if (error) {
    content = <div>Error Loading Albums..</div>
  } else{
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album} />
    })
  }

  return (
    <div>
      <div className=' m-2 flex flex-row items-center justify-center'>
        <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={hanldeAddAlbum}>+ Add Album</Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumList