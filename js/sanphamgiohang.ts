import { SanPham } from "./sanpham.js"

export class SanPhamGioHang {
    private sanpham : SanPham;
    private soluong : number;

    constructor(sanpham: SanPham, soluong:number = 1){
        this.sanpham = sanpham;
        this.soluong = soluong;
    }

    tinhGiaTien():number{
        return 1;
    }

    showSanPhamTrongGioHang() : string{
        return "";
    }

    layID() : number {
       return this.laysanpham().id;
    }

    public laysanpham(): SanPham{
        return this.sanpham;
    }

    public thaydoisoluong(soluong:number) :void{
        this.soluong = soluong;
    }

    public laysoluong():number {
        return this.soluong;
    }

 
}