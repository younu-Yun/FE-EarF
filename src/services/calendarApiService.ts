import axios from 'axios';
import * as Api from '../api/apiRequest';
import { EachDayDataApiType } from 'types/types';

const domain = `http://34.64.216.86/api`;

export async function getApiCalendarAllData(date?: string) {
  const params = `/diary/month/${date}`;
  return await Api.get(domain, params, true);
}

export async function getApiCalendarEachData(eachDate?: string): Promise<EachDayDataApiType> {
  const params = `/diary/${eachDate}`;
  return await Api.get(domain, params, true);
}

export async function getApiCalendarHavedata(date?: string): Promise<string[]> {
  const params = `/diary/monthDiary/${date}`;
  return await Api.get(domain, params, true);
}

export async function postApiCalendarData(date?: string, data?: any) {
  const params = `/diary/${date}`;
  return await Api.post(domain, params, data, true);
}

export async function getApiCalendarReportData(date?: string): Promise<string[]> {
  const params = `/diary/month/${date}`;
  return await Api.get(domain, params, true);
}

export async function patchApiPostData(date?: string, data?: any): Promise<string[]> {
  const params = `/diary/${date}`;
  return await Api.patch(domain, params, data, true);
}

export async function deleteApiCalendarData(date?: string) {
  axios
    .delete(`http://34.64.216.86/api/diary/${date}`)
    .then((response) => {
      alert('삭제되었습니다.');
    })
    .catch((error) => {
      console.error('에러 발생:', error);
    });
}
