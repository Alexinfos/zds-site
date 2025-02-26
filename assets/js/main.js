// 1. Build style
import '../scss/main.scss';
import '../scss/zmd.scss';

// 2. Import and execute all JS modules

import ZDSAjax from './common/ajax.js';
window.ajax = new ZDSAjax()
