//cookieUtils.ts
import { Response } from 'express'

const setAccessTokenCookie = (res: Response, accessToken: string) => {
    res.cookie('accessToken', accessToken, {
      maxAge: 30 * 60 * 1000,
      httpOnly: true,
      sameSite: 'none',
     // secure: false,
      secure: process.env.NODE_ENV === 'production', 
    });
  };
  
  export default setAccessTokenCookie;