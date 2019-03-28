import { readFileSync } from 'fs';
import genDiff from '../src';

const testJsonPath1 = '__tests__/__fixtures__/before.json';
const testJsonPath2 = '__tests__/__fixtures__/after.json';
const testYamlPath1 = '__tests__/__fixtures__/before.yml';
const testYamlPath2 = '__tests__/__fixtures__/after.yml';
const testIniPath1 = '__tests__/__fixtures__/before.ini';
const testIniPath2 = '__tests__/__fixtures__/after.ini';
const testJsonRecPath1 = '__tests__/__fixtures__/beforeRec.json';
const testJsonRecPath2 = '__tests__/__fixtures__/afterRec.json';
const testIniRecPath1 = '__tests__/__fixtures__/beforeRec.ini';
const testIniRecPath2 = '__tests__/__fixtures__/afterRec.ini';
const expectedJson = readFileSync('__tests__/__fixtures__/expectedJson.txt', 'utf-8');
const expectedYml = readFileSync('__tests__/__fixtures__/expectedYml.txt', 'utf-8');
const expectedIni = readFileSync('__tests__/__fixtures__/expectedIni.txt', 'utf-8');
const expectedJsonRec = readFileSync('__tests__/__fixtures__/expectedJsonRec.txt', 'utf-8');
const expectedIniRec = readFileSync('__tests__/__fixtures__/expectedIniRec.txt', 'utf-8');
const expectedJsonRecPlain = readFileSync('__tests__/__fixtures__/expectedJsonRecPlain.txt', 'utf-8');


describe('genDiff tests', () => {
  test('json test', () => {
    expect(genDiff(testJsonPath1, testJsonPath2)).toEqual(expectedJson);
  });

  test('yaml test', () => {
    expect(genDiff(testYamlPath1, testYamlPath2)).toEqual(expectedYml);
  });

  test('ini test', () => {
    expect(genDiff(testIniPath1, testIniPath2)).toEqual(expectedIni);
  });

  test('recursive json test', () => {
    expect(genDiff(testJsonRecPath1, testJsonRecPath2)).toEqual(expectedJsonRec);
  });

  test('recursive ini test', () => {
    expect(genDiff(testIniRecPath1, testIniRecPath2)).toEqual(expectedIniRec);
  });

  test('recursive json plain test', () => {
    expect(genDiff(testJsonRecPath1, testJsonRecPath2, 'plain')).toEqual(expectedJsonRecPlain);
  });
});
