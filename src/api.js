export const Login = (userName, password) => apiCall({
    callback,
    url: '/guncelkonular-api',
    path: '/batched/form/properties',
    method: 'POST',
    options: {
      data: {
        kullanici_adi: userName,
        sifre: password
      }
    }
  });