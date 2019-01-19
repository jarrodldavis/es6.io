import slug from 'slug';
import md5 from 'blueimp-md5'

import { url } from './config';

export default function User(name, email, website) {
    return { name, email, website }
}

export function createUrl(name) {
    return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
    return `https://www.gravatar.com/avatar/${md5(email)}`
}