import axios from 'axios';
import * as Api from '../api/apiRequest';
import { EachDayDataApiType } from 'types/types';

const domain = `http://13.124.143.111/api`;

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

// FIX:
export async function deleteApiCalendarData(date?: string) {
  if (window.confirm('삭제하면 복구할 수 없습니다. 삭제하시겠습니까?')) {
    axios
      .delete(`http://13.124.143.111/api/diary/${date}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('에러 발생:', error);
      });
  } else {
  }
}
