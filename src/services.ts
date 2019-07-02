import axios from 'axios';

import { Activity } from '@/models/Activity';
import { ActivityError } from '@/models/ActivityError';

axios.interceptors.request.use((config) => {
    config.baseURL = '//www.boredapi.com/api/';
    return config;
});

export async function getActivity({
  activityType,
  participants,
  price,
}: {
  activityType?: string,
  participants: number,
  price: number,
}): Promise<Activity | ActivityError | undefined> {
  try {
    const res = await axios.get('activity/', {
      params: {
        participants,
        price,
        type: activityType,
      },
    });
    if (res.data.error) {
      return res.data as ActivityError;
    }
    return res.data as Activity;
  } catch (error) {
    return undefined;
  }
}
