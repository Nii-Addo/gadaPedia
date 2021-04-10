import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { faBars, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';

import { faStar } from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false;

library.add(faBars, faSearch, faStar, faEdit);
