import { AccLedgerEntryViewModel } from "./accLedgerEntryViewModel";

export class JournalEntryViewModel {
    multipleDebitEntry: AccLedgerEntryViewModel[];
    multipleCreaditEntry: AccLedgerEntryViewModel[];
    narration: string;
    voucherNumber: string;
    voucherType: string;
    createdDate: string | null;
}