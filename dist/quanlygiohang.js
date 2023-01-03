System.register([], function (exports_1, context_1) {
    "use strict";
    var QuanLyGioHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            QuanLyGioHang = class QuanLyGioHang {
                xemgiohang() {
                    return this.CacSanPhamTrongGioHang;
                }
                tangsoluongsanpham(motsanpham) {
                    var chiso = this.checksptruockhithem(motsanpham);
                    var soluonghientai = this.CacSanPhamTrongGioHang[chiso].laysoluong();
                    soluonghientai = soluonghientai + 1;
                    this.CacSanPhamTrongGioHang[chiso].thaydoisoluong(soluonghientai);
                }
                addSanPhamTrongGioHang(motsanpham) {
                    this.CacSanPhamTrongGioHang.push(motsanpham);
                }
                checksptruockhithem(motsanpham) {
                    for (var i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
                        if (this.CacSanPhamTrongGioHang[i].laysanpham().id == motsanpham.id) {
                            return i;
                        }
                    }
                    return -1;
                }
                updateSanPhamTrongGioHang(motsanpham, soluong) { }
                tinhSoLuong() {
                    var tongsoluong = 0;
                    for (let i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
                        tongsoluong += this.CacSanPhamTrongGioHang[i].laysoluong();
                    }
                    return tongsoluong;
                }
                ;
                tinhGia() {
                    var giatien = 0;
                    for (let i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
                        var gia = this.CacSanPhamTrongGioHang[i].laysanpham().gia;
                        var soluongne = this.CacSanPhamTrongGioHang[i].laysoluong();
                        giatien = giatien + (gia * soluongne);
                    }
                    return giatien;
                }
                ;
                hienThiGioHang() {
                    var giohangHTML = "";
                    for (let i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
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
          `;
                    }
                    return giohangHTML;
                }
                ;
                xoaSanPham(msanpham) {
                    for (let i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
                        if (this.CacSanPhamTrongGioHang[i].laysanpham().id == msanpham.id) {
                            this.CacSanPhamTrongGioHang.splice(i, 1);
                        }
                    }
                }
                constructor() {
                    this.CacSanPhamTrongGioHang = [];
                }
            };
            exports_1("QuanLyGioHang", QuanLyGioHang);
        }
    };
});
