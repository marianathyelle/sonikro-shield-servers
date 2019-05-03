import * as React from "react";

export interface UserProfileProps {
  avatar: string;
  username: string;
}

export const UserProfile = (props: UserProfileProps) => (
  <div className="user-profile">
    <img src={props.avatar} className="user-avatar" />
    <span>{props.username}</span>
  </div>
)