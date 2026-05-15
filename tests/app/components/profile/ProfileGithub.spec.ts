import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ProfileGithub from '@/components/profile/ProfileGithub.vue';

describe('ProfileGithub', () => {
  it('renders two stats images pointing at the readme-stats API', () => {
    const wrapper = mount(ProfileGithub);

    const images = wrapper.findAll('img');
    expect(images).toHaveLength(2);
    images.forEach((img) => {
      expect(img.attributes('src')).toMatch(/^https:\/\/github-readme-stats/);
    });
  });

  it('builds the stats URL with the configured username', () => {
    const wrapper = mount(ProfileGithub);

    const statsImg = wrapper.findAll('img')[0];
    expect(statsImg.attributes('src')).toContain('username=randompch');
  });

  it('points the second image at the top-langs endpoint', () => {
    const wrapper = mount(ProfileGithub);

    const langsImg = wrapper.findAll('img')[1];
    expect(langsImg.attributes('src')).toContain('/top-langs');
    expect(langsImg.attributes('src')).toContain('layout=compact');
  });
});
