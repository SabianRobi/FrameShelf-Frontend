// ###########
//   Models
// ###########

export type User = {
  id: string;
};

// ###########
//   Requests
// ###########

export type GetLoginUrlRequest = void;
export type LoginRequest = {
  code: string;
  state: string;
  scope: string;
  authuser: number;
  prompt: string;
};

// ###########
//   Responses
// ###########

export type GetLoginUrlResponse = {
  url: string;
};
export type LoginResponse = void;
