import { v4 as uuidv4 } from 'uuid';
export class SalesOrderItem {
    private readonly _productId: string;
    private readonly _quantity: number;
    private readonly _unitPrice: number;
    private readonly _itemId: string;
    private readonly _orderId: string;

    constructor(orderId: string, productId: string, quantity: number, unitPrice: number) {
        this._productId = productId;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
        this._orderId = orderId;
        this._itemId = uuidv4();
    }

    get productId(): string {
        return this._productId;
    }

    get quantity(): number {
        return this._quantity;
    }

    get unitPrice(): number {
        return this._unitPrice;
    }

    calculateItemPrice = (): number => this._quantity * this._unitPrice;

}