// test/hello-world.js
const tap = require('tap');
const calculator = require('../codeToTest.js');
const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru();
const assert = require('assert');


tap.test('Add test', t => {
    assert.strictEqual(calculator.Add(2,1), 3);
    t.equals(calculator.Add(2, 1), 3, '2+1 = 3');
    t.end();
});

tap.test('Add test callback', t => {
    calculator.addCallback(5, 7, (result) => {
        t.equal(result, 12, '5+7=12');
        t.end();
    });
});

tap.test('Slow add test', async t => {
    const result = await calculator.addSlowly(11, 12);
    t.equal(result, 23, '11+12=23');
    t.end();
});

tap.test('Slow add test promise', t => {
    calculator.addSlowly(11, 12).then((result)=> {
        t.equal(result, 23, '11+12=23');
        t.end();
    });
});

tap.test('depend Check', t=> {
    const dataStub = {};
    dataStub.getString = sinon.stub();
    dataStub.getString.returns('testtest');

    const testCalc = proxyquire('../codeToTest.js',{
        './depend': dataStub
    });


    t.equal(testCalc.dependCheck(), 'testtest','test depend');
    t.end();
})


