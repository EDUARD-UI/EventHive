/**
 * Resolución de la URL base del backend.
 *
 * Prioridad:
 * 1. VITE_API_URL (definida en .env / .env.production) -> URL del backend ya desplegado.
 * 2. Fallback local -> http://localhost:8080/api mientras el backend no esté desplegado.
 */

const LOCAL_API_URL = 'http://localhost:8080/api';

const deployedUrl = import.meta.env.VITE_API_URL?.trim();

export const API_BASE_URL = deployedUrl ? deployedUrl.replace(/\/$/, '') : LOCAL_API_URL;
