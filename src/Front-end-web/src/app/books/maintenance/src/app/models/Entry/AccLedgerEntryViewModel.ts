export class AccLedgerEntryViewModel {
  creaditAccLedgerName: string;
  creaditLedgerId: number;
  creaditSubLedgerId: number | null;
  debitAccLedgerName: string;
  debitLedgerId: number;
  debitSubLedgerId: number | null;
  amount: number;
  balance: number | null;
  narration: string;
  creaditLedgerCode: string;
  creaditSubLedgerCode: string;
  debitLedgerCode: string;
  debitSubLedgerCode: string;
  voucherNumber: string;
  voucherType: string;
  status: string;
  createdDate: string;
  creaditUniqId: number | null;
  debitUniqId: number | null;
}