import { store } from '../store';
import { Highlight } from '../utils/highlight';

const highlight = new Highlight();

export interface Mark {
  reason: Set<string>;
  grade: 'keyword' | 'blacklist';
}

function fromRegexp(value: string): RegExp {
  const fn = new Function(`return ${value}`);
  return fn();
}

export const useHighlight = () => {
  const companyClass = `a[ka="job-detail-company_custompage"]`;

  const jobTitleClass = '.info-primary h1';

  const jobDescClass = '.job-detail-company .job-sec-text';

  const companyDescClass = '.job-detail-section .job-sec-text';

  const companyElement = document.querySelector(companyClass);
  const jobTitleElement = document.querySelector(jobTitleClass);
  const jobDescElement = document.querySelector(jobDescClass);
  const companyDescElement = document.querySelector(companyDescClass);

  const rules = {
    // 公司名称
    company: {
      html: companyElement?.innerHTML || '',
      text: (companyElement?.textContent || '').trim(),
      el: companyElement,
      class: companyClass,
    },
    // 职位名称
    jobTitle: {
      html: jobTitleElement?.innerHTML || '',
      text: jobTitleElement?.textContent || '',
      el: jobTitleElement,
      class: jobTitleClass,
    },
    // 职位描述
    jobDesc: {
      html: jobDescElement?.innerHTML || '',
      text: jobDescElement?.textContent || '',
      el: jobDescElement,
      class: jobDescClass,
    },
    // 公司描述
    companyDesc: {
      html: companyDescElement?.innerHTML || '',
      text: companyDescElement?.textContent || '',
      el: companyDescElement,
      class: companyDescClass,
    },
  };

  // 还原之前的样式
  const restore = () => {
    Object.values(rules).forEach((rule) => {
      const { class: className } = rule;
      const element = document.querySelector(className);
      if (element) {
        element.innerHTML = rule.html;
      }
      result.value = { reason: new Set(), grade: 'blacklist' };
    });
  };

  const result = ref<Mark>({ reason: new Set(), grade: 'blacklist' });

  const run = () => {
    restore();
    const { blacklist, whitelist, keywords } = store;
    // 如果白名单直接跳过
    if (whitelist.some((f) => f.value === rules.company.text)) {
      return;
    }
    // 如果黑名单直接标记出来
    if (blacklist.some((f) => f.value === rules.company.text)) {
      if (!rules.company.el) {
        return;
      }
      result.value.grade = 'blacklist';

      result.value.reason.add(rules.company.text);

      rules.company.el.innerHTML = `<span style="color: red">${rules.company.text}</span>`;
      return;
    }

    [rules.jobTitle, rules.companyDesc, rules.jobDesc].forEach((rule) => {
      const { locations, result: html } = highlight.highlightArea(
        rule.text,
        // 需要判断类型来取
        keywords.map((f) => {
          if (f.type === 'regexp') {
            return fromRegexp(f.value);
          }
          return f.value;
        }),
      );
      if (!locations.length || !rule.el) {
        return;
      }
      rule.el.innerHTML = html;
      locations.forEach((item) => {
        result.value.grade = 'keyword';
        result.value.reason.add(`${item.text}`);
      });
    });
  };

  onMounted(() => {
    run();
  });

  return {
    run,
    result,
  };
};
