import { expect, test, describe } from "vitest";
import { Highlight } from "../highlight";

const text = `软通动力信息技术（集团）股份有限公司（以下简称“软通动力”）是中国领先的软件与信息技术服务商，致力于成为具有全球影响力的数字技术服务领导企业，企业数字化转型可信赖合作伙伴。2005年，公司成立于北京，立足中国，服务全球市场。目前，在全球40余个城市设有近百个分支机构和超过20个全球交付中心，员工90000余人。

秉承用数字技术提升客户价值的使命，软通动力长期提供软件与数字技术服务和数字化运营服务，其中软件与数字技术服务包括咨询与解决方案、数字技术服务和通用技术服务；凭借深厚的行业积累，公司在10余个重要行业服务超过1000家国内外客户，其中超过200家客户为世界500强或中国500强企业。
软通动力注重创新和可持续发展。公司已建设30个能力中心，拥有1个国家级工程实验室，5个省市政府认定的工程、技术实验室及研发中心，1个博士后科研工作站，50+技术合作伙伴的生态合作体系，利用多种形式鼓励研发创新，不断探索前沿技术的巨大商业应用潜力。软通动力依托自身的教育平台，开展校企合作、协同育人，为公司长期发展培养人才。

软通动力雇主价值主是张信赖 奋斗与我们一同攀升
信赖 是软通动力为客户创造价值和雇主与员工间彼此成就的纽带
奋斗 是软通人铸就品质与创新精神、恪守持续学习准则、秉持包容开放心态、坚定价值创造信念的基石
与我们一同攀升 是无数来自于不同岗位、不同业务乃至不同地域的软通人对从事的职业、专注的事业、拥有的理念而自豪的信标`;

const highlight = new Highlight();

test("单一字符串关键字高亮", () => {
  const result = highlight.highlightArea(text, "软通动力");
  expect(result).toContain('<span style="color: red;">软通动力</span>');
});

test("正则表达式关键字高亮", () => {
  const result = highlight.highlightArea(text, /软通动力/g);
  expect(result).toContain('<span style="color: red;">软通动力</span>');
});

test("混合关键字高亮", () => {
  const result = highlight.highlightArea(text, ["软通", /公司/gi]);
  expect(result).toContain('<span style="color: red;">软通</span>');
  expect(result).toContain('<span style="color: red;">公司</span>');
});

test("相同关键字高亮", () => {
  const result = highlight.highlightArea(text, ["软通", "软通动力"]);
  expect(result).toContain('<span style="color: red;">软通动力</span>');
});

test("词义相同关键字高亮", () => {
  const result = highlight.highlightArea(text, ["软通动力", "信息技术"]);
  expect(result).toContain('<span style="color: red;">软通动力</span>');
  expect(result).toContain('<span style="color: red;">信息技术</span>');
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
