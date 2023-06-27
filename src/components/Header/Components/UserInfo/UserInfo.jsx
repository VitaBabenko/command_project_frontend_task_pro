import React from 'react';

export const UserInfo = ({ name, avatarUrl }) => {
  return (
    <div className="header-user-info">
      <p>{name}</p>
      {avatarUrl && (
        <div className="img-wrap">
          <img src={avatarUrl} alt="user avatar" />
        </div>
      )}
    </div>
  );
};
