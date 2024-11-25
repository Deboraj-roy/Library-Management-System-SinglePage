export class AccLedgerOpeningBalance {
  accLedgerId: number;
  accLedgerName: string;
  ledgerId: number;
  subLedgerId: number | null;
  balance: number | null;
  balanceType: string;
  narration: string;
  ledgerCode: string;
  subLedgerCode: string;
  createdDate: string | null;
}