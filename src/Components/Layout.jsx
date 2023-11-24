import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import InfoSV from './InfoSV';
import FormSV from './FormSV';
import TableSV from './TableSV';
import useUsersApi from '../Hooks/useUsersApi';
import { async } from 'q';
export default function Layout() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const { fetchUsers, deleteUser, addUser, fetchUserById, updateUser } =
    useUsersApi();

  const getUsers = async () => {
    const response = await fetchUsers();
    setUsers(response);
  };
  const handleAddUser = async (user) => {
    await addUser(user);
    getUsers();
    toast.success('Thêm Sinh Viên thành công');
  };
  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    getUsers();
    toast.success('Xóa thành công');
  };
  const handleUpdateUser = async (id, user) => {
    await updateUser(id, user);
    getUsers();
    toast.success('Cập nhật thành công');
  };

  const getInfoSVById = async (id) => {
    const selected = await fetchUserById(id);
    setSelectedUser(selected);
    setIsUpdating(true);
  };

  const cancelUpdate = () => {
    setSelectedUser(null);
    setIsUpdating(false);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <InfoSV />
      <FormSV
        onAddUser={handleAddUser}
        selectedUser={selectedUser}
        isUpdating={isUpdating}
        cancelUpdate={cancelUpdate}
        handleUpdateUser={handleUpdateUser}
      />
      <TableSV
        users={users}
        onDelete={handleDeleteUser}
        onGetUser={getInfoSVById}
      />
      <Toaster position="top-right" />
    </div>
  );
}
