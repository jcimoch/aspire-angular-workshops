module.exports = {
  name: 'nasa',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nasa',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
