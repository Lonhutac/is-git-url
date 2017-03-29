/*!
 * is-git-url <https://github.com/jonschlinkert/is-git-url>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

/* deps: mocha */
var assert = require('assert');
var isGitUrl = require('./');

var validURLs = [
  'git://github.com/ember-cli/ember-cli.git#v0.1.0',
  'git://github.com/ember-cli/ember-cli.git#ff786f9f',
  'git://github.com/ember-cli/ember-cli.git#master',
  'git://github.com/ember-cli/ember-cli.git#gh-pages',
  'git://github.com/ember-cli/ember-cli.git#quick_fix',
  'git://github.com/ember-cli/ember-cli.git#Quick-Fix',
  'git@github.com:user/project.git',
  'git@github.com:user/some-project.git',
  'git@github.com:user/some_project.git',
  'https://github.com/user/project.git',
  'http://github.com/user/project.git',
  'git@192.168.101.127:user/project.git',
  'https://192.168.101.127/user/project.git',
  'http://192.168.101.127/user/project.git',
  'ssh://user@host.xz:port/path/to/repo.git/',
  'ssh://user@host.xz/path/to/repo.git/',
  'ssh://host.xz:port/path/to/repo.git/',
  'ssh://host.xz/path/to/repo.git/',
  'ssh://user@host.xz/path/to/repo.git/',
  'ssh://host.xz/path/to/repo.git/',
  'ssh://user@host.xz/~user/path/to/repo.git/',
  'ssh://host.xz/~user/path/to/repo.git/',
  'ssh://user@host.xz/~/path/to/repo.git',
  'ssh://host.xz/~/path/to/repo.git',
  'git://host.xz/path/to/repo.git/',
  'git://host.xz/~user/path/to/repo.git/',
  'http://host.xz/path/to/repo.git/',
  'https://host.xz/path/to/repo.git/',
  'git@github.com:user/some-project.git',
  'git@github.com:user/some_project.git'
];

var invalidURLs = [
  'git@github.com:user/some_project.gitfoo',
  'git@github.com:user/some_project.git/foo',
  '/path/to/repo.git/',
  'path/to/repo.git/',
  '~/path/to/repo.git',
  'file:///path/to/repo.git/',
  'file://~/path/to/repo.git/',
  'user@host.xz:/path/to/repo.git/',
  'host.xz:/path/to/repo.git/',
  'user@host.xz:~user/path/to/repo.git/',
  'host.xz:~user/path/to/repo.git/',
  'user@host.xz:path/to/repo.git',
  'host.xz:path/to/repo.git',
  'rsync://host.xz/path/to/repo.git/'
];

validURLs.forEach(function(url, i) {
  it('git URL: #' + (i++) + ' - ' + url, function () {
    assert(isGitUrl(url) === true);
  });
});

invalidURLs.forEach(function(url, i) {
  it('not a git url #' + (i++) + ' - ' + url, function () {
    assert(isGitUrl(url) === false);
  });
});

