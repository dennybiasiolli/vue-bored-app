import axios from 'axios';

import { Activity } from '@/models/Activity';

axios.interceptors.request.use((config) => {
    config.baseURL = 'http://www.boredapi.com/api/';
    return config;
});

export async function getActivity(): Promise<Activity | undefined> {
  try {
    const res = await axios.get('activity/');
    return res.data as Activity;
  } catch (error) {
    return undefined;
  }
}
