import { agent as _request } from 'supertest';
import { get as getApplication } from '../index';

export const request = _request(getApplication());
