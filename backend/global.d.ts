declare module 'express' {
  interface Request {
    user?: {
      sub: number;
      username: string;
    };
  }
}
