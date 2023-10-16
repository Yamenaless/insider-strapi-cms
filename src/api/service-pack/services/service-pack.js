'use strict';

/**
 * service-pack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-pack.service-pack');
