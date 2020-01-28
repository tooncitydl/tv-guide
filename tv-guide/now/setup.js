/**
 * Application setup values to be changed "on the fly" once deployed.
 */
// eslint-disable-next-line
angular.module('go').constant('goCnstSetup', {
  'forceTasaSSOEnabled': false,
  'version': {
    'prod': false
  },
  'decimalCurrency': 2,
  'player': {
    'PlayerBufferingTime': '0:0:0:60',
    'minBufferTime': 4,
    'maxPreloadedFragments': 2,
    'timeouts': {
      'live': {
        'manifestRequest': 15000,
        'rangeRequest': 15000,
        'licenseRequest': 15000
      },
      'vod': {
        'manifestRequest': 15000,
        'rangeRequest': 15000,
        'licenseRequest': 15000
      },
      'trailer': {
        'manifestRequest': 15000,
        'rangeRequest': 15000,
        'licenseRequest': 15000
      },
      'default': {
        'manifestRequest': 15000,
        'rangeRequest': 15000,
        'licenseRequest': 15000
      }
    },
    'html5SecureOrigin': [],
    'cdnDomains': [
      'tid.es',
      't-cdn.com',
      'cdnprepro.telefonica.com',
      'cdn.telefonica.com'
    ],
    'defaultBandwidthEstimate': 10000
  },
  'googleAnalytics': {
    'defaultEnvironment': {
      'useThisInsteadInstanceValue': true,
      'id': 'UA-51276496-4'
    },
    'Production': {
      'useThisInsteadInstanceValue': false,
      'id': ''
    }
  },
  'enableRecomms': true,
  'vsppFix': {
    'enabled': true,
    'interval': 1000,
    'seek': 0.2
  },
  'vsspTimestampOnFragments': false,
  'l7dFix': {
    'isEnabled': true,
    'lastSecondsToClose': 5
  }
});
