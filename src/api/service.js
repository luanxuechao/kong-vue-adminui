import httpServer from '../common/httpInterceptor'
export function listServices (){
    return httpServer({
        url: 'services',
        method: 'get',
      });
}