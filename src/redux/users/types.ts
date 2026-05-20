// ###########
//   Models
// ###########

export type User = {
  id: string;
  username: string;
  displayName: string;
  profilePicture: string;
  createdAt: string;
  lastLoginAt: string;
};

// ###########
//   Requests
// ###########

// ###########
//   Responses
// ###########

export type UserResponse = User;
