'use strict';

/**
 * bookkeeping service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bookkeeping.bookkeeping');
