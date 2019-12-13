import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({ dsn: "https://a7bce080f1ac4a1386103d2a838407a6@sentry.io/1855742", release: "1.0.0" });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
};