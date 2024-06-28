import React from "react";
import { GoTrash } from "react-icons/go";
import { removeUser } from "../store";
import useThunk from "../hooks/useThunk";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UsersListItems({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = <>
  <Button className=' mr-3' loading={isLoading} onClick={handleClick}>
    <GoTrash />
</Button>
{error && <div>Error Deleting User...</div>}
{user.name}
</>

  return (
    <ExpandablePanel header={header}>
        <AlbumList user={user} />
    </ExpandablePanel>       
  );
}

export default UsersListItems;
