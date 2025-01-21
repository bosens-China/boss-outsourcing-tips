export interface Location {
  start: number;
  end: number;
}

export type HighlightText = string | RegExp;

export class Highlight {
  /**
   * 高亮区域
   *
   * @param {string} text
   * @param {(HighlightText | HighlightText[])} highlightText
   * @return {*}
   * @memberof Highlight
   */
  highlightArea(text: string, highlightText: HighlightText | HighlightText[]) {
    const arr = Array.isArray(highlightText) ? highlightText : [highlightText];
    const locations = arr
      .map((item) => {
        return this.queryTheHighlightedPosition(text, item);
      })
      .flat(2);

    const optimizeLocations = this.mergeLocations(locations);
    return {
      result: this.render(text, optimizeLocations),
      optimizeLocations: optimizeLocations,
      locations,
    };
  }

  private render(text: string, ranges: Location[]) {
    let highlightedText = '';
    let currentIndex = 0;

    for (const range of ranges) {
      const { start, end } = range;

      // 添加非高亮部分
      if (currentIndex < start) {
        highlightedText += text.slice(currentIndex, start);
      }

      // 添加高亮部分
      highlightedText += `<span style="color: red;">${text.slice(
        start,
        end,
      )}</span>`;
      currentIndex = end; // 更新当前索引
    }

    // 添加剩余未高亮的文本
    if (currentIndex < text.length) {
      highlightedText += text.slice(currentIndex);
    }

    return highlightedText;
  }

  /**
   *
   * 高亮文本位置查询
   * @private
   * @param {string} text
   * @param {HighlightText} highlight
   * @return {*}
   * @memberof Highlight
   */
  private queryTheHighlightedPosition(text: string, highlight: HighlightText) {
    const locationRecord: (Location & { text: string })[] = [];
    const reg =
      highlight instanceof RegExp ? highlight : new RegExp(highlight, 'g');

    let result = reg.exec(text);

    while (result) {
      const highlightText = result[0];
      locationRecord.push({
        start: result.index,
        end: result.index + highlightText.length,
        text: highlightText,
      });
      if (!reg.flags.includes('g')) {
        break;
      }
      result = reg.exec(text);
    }
    return locationRecord;
  }

  /**
   * 位置规则合并
   * 1. 处理规则如下，如果起始位置相同则则合并最大位置
   * 2. 如果元素的开始结束位置与其他成员的位置大小相邻或者在内则合并
   * @param {Location[]} locations
   * @return {*}
   * @memberof Highlight
   */
  mergeLocations(locations: Location[]) {
    // 先按 start 排序，如果 start 相同按 end 排序
    const ranges = locations.toSorted(
      (a, b) => a.start - b.start || a.end - b.end,
    );
    // 如果范围数组为空或只有一个范围，直接返回
    if (ranges.length <= 1) {
      return ranges;
    }

    const result: Location[] = [];
    let current: null | Location = null;

    for (const range of ranges) {
      if (!current) {
        // 初始化第一个范围
        current = { ...range };
      } else if (range.start <= current.end) {
        // 如果当前范围与新范围重叠或相邻，合并
        current.end = Math.max(current.end, range.end);
      } else {
        // 如果不重叠，保存当前范围并更新为新范围
        result.push(current);
        current = { ...range };
      }
    }

    // 添加最后一个范围
    if (current) {
      result.push(current);
    }

    return result;
  }
}

export const highlight = new Highlight();
