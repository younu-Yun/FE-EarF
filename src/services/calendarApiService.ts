import * as Api from '../api/ApiRequest';
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
