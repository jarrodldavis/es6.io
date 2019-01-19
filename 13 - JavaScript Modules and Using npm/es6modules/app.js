import { uniq } from 'lodash';

import {
    apiKey as key, url,
    sayHi,
    old as age, dog
} from './src/config';

import User, { createUrl, gravatar } from './src/user';

console.log(key, url);

sayHi('jarrod')

console.log(age, dog);

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));

const me = new User('Jarrod Davis', 'developer@jarrodldavis.com', 'https://jarrodldavis.com');
console.log(me);

const profile = createUrl(me.name);
console.log(profile);

const image = gravatar(me.email);
console.log(image);