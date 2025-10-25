import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'blog', 
  apiKey: 'eQD9DFwQtT1VjWU7VMvDJXAOUKqgUxJlsArX',
});
// SDKの初期設定　fetchなどの設定を自動で行ってくれる