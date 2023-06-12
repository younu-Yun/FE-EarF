import * as Api from '../api/ApiRequest';

const domain = `http://34.64.216.86/api`;

type EachDayDataApiType = {
  _id: string;
  id: string;
  tag: string[];
  imageUrl: string;
  title: string;
  content: string;
  shareStatus: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export async function getApiCalendarAllData(date?: string) {
  const params = `/diary/month/${date}`;
  return await Api.get(domain, params, true);
}

export async function getApiCalendarEachData(eachDate?: string): Promise<EachDayDataApiType> {
  const params = `/diary/${eachDate}`;
  return await Api.get(domain, params, true);
}

export async function getApiCalendarHavedata(date?: string) {
  const params = `/diary/monthDiary/${date}`;
  return await Api.get(domain, params, true);
}
