import { SanPhamGioHang } from "./sanphamgiohang.js"
import { SanPham } from "./sanpham.js"

export class QuanLyGioHang {
    private CacSanPhamTrongGioHang : SanPhamGioHang[] = [];

    xemgiohang(): SanPhamGioHang [] {
        return this.CacSanPhamTrongGioHang;
    }

    tangsoluongsanpham(motsanpham: SanPham) : void {
        // biet duoc motsanpham vi tri cua no o dau trong mang
        var chiso: number = this.checksptruockhithem(motsanpham);
        var soluonghientai = this.CacSanPhamTrongGioHang[chiso].laysoluong();
        soluonghientai = soluonghientai +1;
        this.CacSanPhamTrongGioHang[chiso].thaydoisoluong(soluonghientai);
    }

    addSanPhamTrongGioHang(motsanpham:SanPhamGioHang): void {
        this.CacSanPhamTrongGioHang.push(motsanpham);
    }

    checksptruockhithem (motsanpham: SanPham) : number{
        for ( var i : number = 0; i < this.CacSanPhamTrongGioHang.length; ++i){
            if(this.CacSanPhamTrongGioHang[i].laysanpham().id == motsanpham.id){
                // co san pham nay trong gio hang roi
                return i;
            }
        }
        return -1;
    }

    updateSanPhamTrongGioHang(motsanpham:SanPham, soluong:number) :void {}

    tinhSoLuong(): number {
        var tongsoluong : number = 0;
        //duyet tat ca san pham va xem so luong
        for (let i: number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
            tongsoluong += this.CacSanPhamTrongGioHang[i].laysoluong();            
        }
        return tongsoluong;

    };

    tinhGia():number {
        var giatien : number = 0;
        for (let i: number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
            var gia : number = this.CacSanPhamTrongGioHang[i].laysanpham().gia;
            var soluongne =  this.CacSanPhamTrongGioHang[i].laysoluong();    
            giatien = giatien + (gia*soluongne);
        }
        return giatien;
    };

    hienThiGioHang():any  {
        var giohangHTML : string = "";
        for (let i :number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
        //   giohangHTML += this.CacSanPhamTrongGioHang[i].laysanpham().ten ;
          giohangHTML += `
          
          <div class="row motsanpham card-body">
          <div class="col-sm-3">
              <img src="${this.CacSanPhamTrongGioHang[i].laysanpham().anh}" alt="" class="img-fluid">
          </div>
          <div class="col-sm-3">
              <a href="" class="tieude">${this.CacSanPhamTrongGioHang[i].laysanpham().ten}</a>
              <div class="noidungsp">
                 ${this.CacSanPhamTrongGioHang[i].laysanpham().mota}
              </div>
          </div>
          <div class="col-sm-2">
              <div class="gia1">
                  ${this.CacSanPhamTrongGioHang[i].laysanpham().gia}
              </div>
              <span class="badge badge-warning">-10%</span>
          </div>
          <div class="col-sm-1">
         
              <input type="number" class="form-group" value="${this.CacSanPhamTrongGioHang[i].laysoluong()}" min=1>
          </div>
          <div class="col-sm-3">
              <div class="btn-group">
                  <button href="" class="btn btn-outline-danger xoasp" idsp="${this.CacSanPhamTrongGioHang[i].laysanpham().id}">Delete</button>
              </div>
          </div>
      </div>
          ` ;
        }
        return giohangHTML;
    };

    xoaSanPham(msanpham:SanPham) : void {
        for (let i :number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
            if(this.CacSanPhamTrongGioHang[i].laysanpham().id == msanpham.id){
                this.CacSanPhamTrongGioHang.splice(i, 1);
            }
        }
    }
    
    constructor(){
        
    }
}

