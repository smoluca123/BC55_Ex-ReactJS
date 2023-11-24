import React, { useEffect, useState, useRef } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const { fetchUsers, deleteUser, addUser, fetchUserById, updateUser } =
    useUsersApi();

  const usersFull = useRef();
  const getUsers = async () => {
    const response = await fetchUsers();
    await setUsers(response);
    usersFull.current = response;
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

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = async () => {
    if (searchTerm) {
      const usersFilter = users.filter((user) =>
        user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      await setUsers(usersFilter);
      return;
    }
    setUsers(usersFull.current);
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

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
        onChangeSearchTerm={handleChangeSearchTerm}
      />
      <Toaster position="top-right" />
    </div>
  );
}
