// ###########
//   Models
// ###########

export type BackendInfo = {
    build: BuildInfo;
};

type BuildInfo = {
    artifact: string;
    name: string;
    time: string;
    version: string;
    group: string;
};

// ###########
//   Requests
// ###########

// ###########
//   Responses
// ###########

export type BackendInfoResponse = BackendInfo;
