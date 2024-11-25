export class AccOpeningBalance {
  accOpeningBalanceId: number;
  minorCategoryId: number | null;
  minorSubCategoryId: number | null;
  debit: number | null;
  credit: number | null;
  balance: number | null;
  balanceType: string;
  openingBalanceDate: string | null;
  createdDate: string | null;
}