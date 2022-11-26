import { expect } from "chai";
import { removeProperties } from "../src";

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

describe("Remove Properties Tests", () => {
	it("Should remove", (done) => {
		const removed = removeProperties(obj, ["b", "e", "c", "g"]);
		expect(removed).to.haveOwnProperty("a", 1);
		expect(removed).not.to.haveOwnProperty("b");
		expect(removed).not.to.haveOwnProperty("c");
		expect(removed).to.haveOwnProperty("d", 4);
		expect(removed).not.to.haveOwnProperty("e");
		expect(removed).to.haveOwnProperty("f", 6);
		expect(removed).not.to.haveOwnProperty("g");
		expect(removed).to.be.deep.equal({
			a: 1,
			d: 4,
			f: 6,
		});
		done();
	});
	it("Should not remove", (done) => {
		const removed = removeProperties(obj, ["z"]);
		expect(removed).to.haveOwnProperty("a", 1);
		expect(removed).to.haveOwnProperty("b", 2);
		expect(removed).to.haveOwnProperty("c", 3);
		expect(removed).to.haveOwnProperty("d", 4);
		expect(removed).to.haveOwnProperty("e", 5);
		expect(removed).to.haveOwnProperty("f", 6);
		expect(removed).to.haveOwnProperty("g", 7);
		expect(removed).to.be.deep.equal(obj);
		done();
	});
	it("Should remove everything", (done) => {
		const removed = removeProperties(obj, [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
		]);
		expect(removed).not.to.haveOwnProperty("a", 1);
		expect(removed).not.to.haveOwnProperty("b", 2);
		expect(removed).not.to.haveOwnProperty("c", 3);
		expect(removed).not.to.haveOwnProperty("d", 4);
		expect(removed).not.to.haveOwnProperty("e", 5);
		expect(removed).not.to.haveOwnProperty("f", 6);
		expect(removed).not.to.haveOwnProperty("g", 7);
		expect(removed).to.be.deep.equal({});
		done();
	});
});
