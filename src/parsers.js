import yaml from 'js-yaml';

const parseData = (data, ext) => {
  if (ext === 'json') {
    return JSON.parse(data);
  }
  if (ext === 'yml' || ext === 'yaml') {
    return yaml.load(data);
  }
  throw new Error('Falsy extention');
};

export default parseData;
