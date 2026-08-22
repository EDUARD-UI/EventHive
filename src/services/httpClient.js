import { API_BASE_URL } from '../config/api.js';

const TOKEN_STORAGE_KEY = 'eventhive_token';

const buildUrl = (path, params) => {
  const url = new URL(`${API_BASE_URL}${path}`);

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, value);
    }
  });

  return url;
};

async function request(path, { method = 'GET', params, body, isFormData = false } = {}) {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);

  const headers = {};
  if (!isFormData) headers['Content-Type'] = 'application/json';
  if (token) headers.Authorization = `Bearer ${token}`;

  let response;

  try {
    response = await fetch(buildUrl(path, params), {
      method,
      headers,
      body: isFormData ? body : body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error('No fue posible conectar con el servidor. Verifica que el backend esté disponible.');
  }

  const payload = await response.json().catch(() => null);

  if (!response.ok || payload?.success === false) {
    throw new Error(payload?.mensaje || 'Ocurrió un error al procesar la solicitud.');
  }

  return payload?.data;
}

export const httpClient = {
  get: (path, params) => request(path, { method: 'GET', params }),
  post: (path, body, options = {}) => request(path, { method: 'POST', body, ...options }),
  put: (path, body, options = {}) => request(path, { method: 'PUT', body, ...options }),
  patch: (path, body, options = {}) => request(path, { method: 'PATCH', body, ...options }),
  delete: (path, options = {}) => request(path, { method: 'DELETE', ...options }),
};
