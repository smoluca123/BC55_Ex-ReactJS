import React from 'react';
import SVItem from './SVItem';

export default function TableSV({ users, onDelete, onGetUser }) {
  return (
    <div>
      <div className="table-responsive mt-4 ">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <SVItem
                key={user.id}
                user={user}
                onDelete={onDelete}
                onGetUser={onGetUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
