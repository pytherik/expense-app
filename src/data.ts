// interface creates new custom datatype Data
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
export interface Report {
  source: string;
  amount: number;
}

export interface UpdateReport {
  source?: string;
  amount?: number;
}
// enum declares a set of named constants
export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'BBQ',
      amount: 1500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'EDEKA',
      amount: 500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid5',
      source: 'TV',
      amount: 700,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
