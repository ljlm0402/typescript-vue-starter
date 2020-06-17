export interface UserInfo {
    id: string;
    name: string;
    auth: string;
    grade?: number;
  }

export interface UserState {
    isLogin: boolean;
    errorCode: number;
    userInfo: UserInfo | null;
}

export interface LoginForm {
    id: string;
    password: string;
}
