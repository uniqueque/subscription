import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.masadoraandroid',
  name: '魔法集市 Global',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          matches: '[id="com.masadoraandroid:id/skip"][text*="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13638359',
            'https://i.gkd.li/import/13692884',
          ],
        },
      ],
    },
  ],
});