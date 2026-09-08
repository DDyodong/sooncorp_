// CloudFront Function, JavaScript runtime 2.0, viewer-request on the default behavior.
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var target = null;
  if (uri === '/kr' || uri === '/kr/' || uri === '/index.html') target = '/';
  if (uri === '/App' || uri === '/App/' || uri === '/en' || uri === '/en/index.html') target = '/en/';

  if (target !== null) {
    // CloudFront supplies URI-encoded query fields. Preserve repeated values as well.
    var query = [];
    var fields = request.querystring || {};
    Object.keys(fields).forEach(function (key) {
      var values = fields[key].multiValue || [fields[key]];
      values.forEach(function (entry) { query.push(key + '=' + entry.value); });
    });
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: target + (query.length ? '?' + query.join('&') : '') },
        'cache-control': { value: 'public, max-age=300' }
      }
    };
  }
  if (uri === '/') request.uri = '/index.html';
  else if (uri === '/en/') request.uri = '/en/index.html';
  else if (!/\.[^/]+$/.test(uri)) {
    // Unknown page routes must not become successful copies of the home page.
    return {
      statusCode: 404,
      statusDescription: 'Not Found',
      headers: {
        'content-type': { value: 'text/html; charset=utf-8' },
        'x-robots-tag': { value: 'noindex' }
      },
      body: '<!doctype html><html lang="ko"><meta charset="utf-8"><title>404 | SOON Corporation</title><h1>페이지를 찾을 수 없습니다 · Page not found</h1><a href="/">한국어 홈</a> · <a href="/en/">English home</a></html>'
    };
  }
  return request;
}
