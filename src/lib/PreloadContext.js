import {createContext, useContext} from 'react';

// 클라이언트 환경 null

// 서버 환경: { done: false, promise: [] }
const PreloadContext = createContext(null);
export default PreloadContext;

export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;

  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};