var fs = require('fs');
var requireDir = require('require-dir');
var stats = require('stats-lite');
var _ = require('lodash');

var algorithms = requireDir('./algorithms');
var skipAlgorithms = [];

var loadData = function (filename) {
  var data = fs.readFileSync(__dirname + '/../data/' + filename);
  return data.toString().split('\n').sort();
};

var tests = [{
  name: 'English Words',
  data: loadData('english.txt')
}, {
  name: 'French Words',
  data: loadData('french.txt')
}, {
  name: 'German Words',
  data: loadData('german.txt')
}, {
  name: 'Passswords',
  data: loadData('passwords.txt')
}];

var results = {};
_.each(algorithms, function (algorithm) {
  if (_.includes(skipAlgorithms, algorithm.type)) {
    return;
  }

  if (_.isUndefined(results[algorithm.type])) {
    results[algorithm.type] = {};
  };
  results[algorithm.type][algorithm.implementation] = [];
  _.each(tests, function (test) {
    var testResults = {
      dataset: test.name,
      datasize: test.data.length,
      hashes: {},
      times: [],
      example: algorithm.hash('This is an example hash.'),
      collisions: 0
    };

    process.stdout.write(algorithm.type + ' (' + algorithm.implementation + ') ' + test.name + ': ');

    var lastLetter = '';
    _.each(test.data, function (data) {
      if (lastLetter !== data.charAt(0).toLowerCase()) {
        lastLetter = data.charAt(0).toLowerCase();
        process.stdout.write(data.charAt(0));
      }

      var hash;
      var start = process.hrtime();
      hash = algorithm.hash(data);
      var elapsed = process.hrtime(start)[1];

      testResults.times.push(elapsed);

      if (_.isUndefined(testResults.hashes[hash])) {
        testResults.hashes[hash] = [];
      }
      testResults.hashes[hash].push(data);
    });
    process.stdout.write('  ' + testResults.example + '\n');

    _.forEach(testResults.hashes, function (item) {
      if (item.length > 1) {
        testResults.collisions += 1;
      }
    });

    testResults.averageTime = stats.mean(testResults.times);
    testResults.medianTime = stats.median(testResults.times);
    testResults.varianceTime = stats.variance(testResults.times);
    delete testResults.times;
    delete testResults.hashes;

    results[algorithm.type][algorithm.implementation].push(testResults);
  }); // Tests
}); // Algorithms


process.stdout.write('| Algorithm | Implementation | Dataset Name | Dataset Size | Collisions | Average Time | Median Time | Variance |\n');
process.stdout.write('| --- | --- | --- | --- | --- | --- | --- | --- |\n');
_.forEach(results, function (algorithm, algorithmName) {
  _.forEach(algorithm, function (implementation, implementationName) {
    _.forEach(implementation, function (dataset) {
      process.stdout.write('| ' + algorithmName + ' | ' + implementationName + ' | ' + dataset.dataset + ' | ' + dataset.datasize + ' | ' + dataset.collisions + ' | ' + parseFloat(dataset.averageTime).toFixed(2) + ' | ' + dataset.medianTime + ' | ' + parseFloat(dataset.varianceTime).toFixed(2) + ' |\n');
    });
  });
});
