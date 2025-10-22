import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp, nextTick } from 'vue';
import PrettierDatetimeDirective from '@blink-the-ui/directives/src/prettier-datetime';
import { i18n } from '@blink-the-ui/i18n';

// Mock Date
const mockDate = new Date('2023-01-01T12:00:00Z');

describe('PrettierDatetimeDirective', () => {
  beforeEach(() => {
    // Mock system time
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    // Restore real timers
    vi.useRealTimers();
  });

  it('formats time difference in seconds', () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime>{{ time }}</div>',
      data() {
        return {
          time: '2023-01-01T11:59:59Z'
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('1秒前');
  });

  it('formats time difference in minutes', () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime>{{ time }}</div>',
      data() {
        return {
          time: '2023-01-01T11:55:00Z'
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('5分钟前');
  });

  it('formats time difference in hours', () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime>{{ time }}</div>',
      data() {
        return {
          time: '2023-01-01T09:00:00Z'
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('3小时前');
  });

  it('formats time difference in days', () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime>{{ time }}</div>',
      data() {
        return {
          time: '2022-12-30T12:00:00Z'
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('2天前');
  });

  it('formats time difference in future', () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime>{{ time }}</div>',
      data() {
        return {
          time: '2023-01-01T13:00:00Z'
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('1小时后');
  });

  it('shows "刚刚" for times within 1 second', () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime>{{ time }}</div>',
      data() {
        return {
          time: '2023-01-01T12:00:00Z'
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('刚刚');
  });

  it('works with textContent argument', () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime:textContent="time"></div>',
      data() {
        return {
          time: { time: '2023-01-01T11:59:00Z' }
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('1分钟前');
  });

  it('supports English locale', () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime="options">{{ time }}</div>',
      data() {
        return {
          time: '2023-01-01T11:59:00Z',
          options: { locale: 'en' }
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('1 minute ago');
  });

  it('handles invalid time format gracefully', () => {
    const mockWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    
    const wrapper = mount({
      template: '<div v-prettier-datetime>{{ time }}</div>',
      data() {
        return {
          time: 'invalid-date-format'
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(mockWarn).toHaveBeenCalledWith('Prettier datetime directive: Invalid time format "invalid-date-format"');
    mockWarn.mockRestore();
  });

  it('updates display when value changes', async () => {
    const wrapper = mount({
      template: '<div v-prettier-datetime="time">{{ time }}</div>',
      data() {
        return {
          time: '2023-01-01T11:59:00Z'
        };
      }
    }, {
      global: {
        directives: {
          'prettier-datetime': PrettierDatetimeDirective
        }
      }
    });

    expect(wrapper.text()).toBe('1分钟前');
    
    await wrapper.setData({ time: '2023-01-01T11:55:00Z' });
    await nextTick();
    expect(wrapper.text()).toBe('5分钟前');
  });
});