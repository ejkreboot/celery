import { Log } from "../celery.js";
import { strict as assert } from 'assert';

const DEBUG = true;

describe("Database functions", function() {
    it("should log something", function() {
        process.env.CELERY_DEBUG = "";
        Log("a logging message that will not be emitted.")
        process.env.CELERY_DEBUG = "1";
        Log("a logging message that will be emitted.")
        assert.equal(1,1);
    }),
    it("should log an arbitrary set of objects", function() {
        const a = {one: 1, two: 2};
        const b = ["a", "b", "c"];
        const c = "Hello world"
        Log(a,b,c)
        assert.equal(1,1);
    })
});
