export class PurchaseOrderVM{
    PurchaseOrderId: number;
    PurchaseOrderCode: string;
    MinorCategoryId: number;
    MinorSubCategoryId: number;
    MinorSubCategoryName: string;
    Quantity: number;
    fob: number;
    unitCostPrice: number;
    totalCostPrice: number;
    debitAccLedgerName: string;
    DebitLedgerId: number;
    DebitSubLedgerId?: number;
    DebitLedgerCode: string;
    DebitSubLedgerCode: string;
    amount: number;
    voucherNumber: string;
    narration: string;
    Status: string;
    OrgId?: number;
    BranchId?: number;
    EntryUserId?: number;
    UpdateUserId?: number;
    entryDate?: Date;
    UpdatedDate?: Date;
    debitLedgerName: string;
    createDate: Date;
}

