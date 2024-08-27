// const platformCore = require('@folio/platform-core/stripes.config.js');
// const platformERM = require('@folio/platform-erm/stripes.config.js');
// const { merge } = require('lodash');

module.exports = {
  okapi: { 'url':'https://snapshot-dev-okapi.folio-dev.indexdata.com', 'tenant':'harvester' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    maxUnpagedResourceCount: 2000,
    showPerms: false,
    welcomeMessage: 'Welcome to the Harvester Snapshot Dev environment. The Future of Libraries is OPEN!',
    aboutInstallDate: '2024-07-15T05:00-05:00',
  },

  modules: {
    '@folio/bulk-edit': {},
    '@folio/calendar' : {},
    '@folio/checkin' : {},
    '@folio/checkout' : {},
    '@folio/circulation' : {},
    '@folio/circulation-log' : {},
    '@folio/courses' : {},
    '@folio/data-import' : {},
    '@folio/data-export' : {},
    '@folio/developer' : {},
    '@folio/export-manager': {},
    '@folio/inventory' : {},
    '@folio/myprofile' : {},
    '@folio/notes' : {},
    '@folio/plugin-create-inventory-records' : {},
    '@folio/plugin-find-authority' : {},
    '@folio/plugin-find-import-profile' : {},
    '@folio/plugin-find-instance' : {},
    '@folio/plugin-find-user' : {},
    '@folio/quick-marc' : {},
    '@folio/marc-authorities': {},
    '@folio/requests' : {},
    '@folio/servicepoints' : {},
    '@folio/stripes-authority-components' : {},
    '@folio/stripes-inventory-components' : {},
    '@folio/stripes-marc-components' : {},
    '@folio/tags' : {},
    '@folio/tenant-settings' : {},
    '@folio/users' : {},
    '@indexdata/harvester-admin' : {}
  },

  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/folio-favicon.png',
    },
  },
};

// module.exports = merge({}, platformCore, platformERM, platformComplete);
