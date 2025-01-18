import { expect, test, describe } from "vitest";
import { Highlight } from "../highlight";

const text = `a1b1c1`;

const highlight = new Highlight();

test("单一字符串关键字高亮", () => {
  const result = highlight.highlightArea(text, "a1");
  expect(result).toBe('<span style="color: red;">a1</span>b1c1');
});

test("正则表达式关键字高亮", () => {
  expect(highlight.highlightArea(text, /\d/g)).toBe(
    'a<span style="color: red;">1</span>b<span style="color: red;">1</span>c<span style="color: red;">1</span>'
  );
  expect(highlight.highlightArea(text, /\d/)).toBe(
    'a<span style="color: red;">1</span>b1c1'
  );
  expect(highlight.highlightArea(text, /A/)).not.toContain(
    '<span style="color: red;">'
  );
  expect(highlight.highlightArea(text, /A/i)).toBe(
    '<span style="color: red;">a</span>1b1c1'
  );
});

test("混合关键字高亮", () => {
  const result = highlight.highlightArea(text, ["a", /\d/g]);
  expect(result).toBe(
    '<span style="color: red;">a1</span>b<span style="color: red;">1</span>c<span style="color: red;">1</span>'
  );
});

test("相同关键字高亮", () => {
  const result = highlight.highlightArea(text, ["a1", "a1b1"]);
  expect(result).toBe('<span style="color: red;">a1b1</span>c1');
});

test("词义相同关键字高亮", () => {
  const result = highlight.highlightArea(text, ["a1", "b1"]);
  expect(result).toBe('<span style="color: red;">a1b1</span>c1');
});

test("无匹配关键字高亮", () => {
  const result = highlight.highlightArea(text, ["不存在的词"]);
  expect(result).not.toContain('<span style="color: red;">');
});

test(`严格包裹性测试`, () => {
  const result = highlight.highlightArea(`abcabc`, "a");
  expect(result).toBe(
    '<span style="color: red;">a</span>bc<span style="color: red;">a</span>bc'
  );
});
test(`替换一次`, () => {
  const result = highlight.highlightArea(`abcabc`, /a/);
  expect(result).toBe('<span style="color: red;">a</span>bcabc');
});

describe(`mergeLocations方法测试`, () => {
  test(`相邻位置测试`, () => {
    const result = highlight.mergeLocations([
      {
        start: 0,
        end: 1,
      },

      {
        start: 1,
        end: 2,
      },
    ]);
    expect(result).toEqual([
      {
        start: 0,
        end: 2,
      },
    ]);
  });

  test(`start相同测试`, () => {
    const result = highlight.mergeLocations([
      {
        start: 0,
        end: 1,
      },
      {
        start: 0,
        end: 4,
      },
    ]);
    expect(result).toEqual([
      {
        start: 0,
        end: 4,
      },
    ]);
  });

  test(`混合测试`, () => {
    const result = highlight.mergeLocations([
      {
        start: 0,
        end: 1,
      },
      {
        start: 0,
        end: 2,
      },
      {
        start: 0,
        end: 4,
      },
      {
        start: 1,
        end: 2,
      },
      {
        start: 9,
        end: 10,
      },
    ]);

    expect(result).toEqual([
      {
        start: 0,
        end: 4,
      },
      {
        start: 9,
        end: 10,
      },
    ]);
  });

  test("1个数组", () => {
    expect(highlight.mergeLocations([{ start: 0, end: 1 }])).toEqual([
      { start: 0, end: 1 },
    ]);
  });
});
