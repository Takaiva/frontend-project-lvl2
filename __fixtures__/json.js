const json = '[{"key":"common","status":"nested","value":[{"key":"follow","status":"hasOnlySecondFile","value":false},{"key":"setting1","status":"bothHaveTheSame","value":"Value 1"},{"key":"setting2","status":"hasOnlyFirstFile","value":200},{"key":"setting3","status":"changed","value":[true,null]},{"key":"setting4","status":"hasOnlySecondFile","value":"blah blah"},{"key":"setting5","status":"hasOnlySecondFile","value":{"key5":"value5"}},{"key":"setting6","status":"nested","value":[{"key":"doge","status":"nested","value":[{"key":"wow","status":"changed","value":["","so much"]}]},{"key":"key","status":"bothHaveTheSame","value":"value"},{"key":"ops","status":"hasOnlySecondFile","value":"vops"}]}]},{"key":"group1","status":"nested","value":[{"key":"baz","status":"changed","value":["bas","bars"]},{"key":"foo","status":"bothHaveTheSame","value":"bar"},{"key":"nest","status":"changed","value":[{"key":"value"},"str"]}]},{"key":"group2","status":"hasOnlyFirstFile","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","status":"hasOnlySecondFile","value":{"deep":{"id":{"number":45}},"fee":100500}}]';

export default json;
