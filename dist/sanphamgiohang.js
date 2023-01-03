System.register([], function (exports_1, context_1) {
    "use strict";
    var SanPhamGioHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SanPhamGioHang = class SanPhamGioHang {
                constructor(sanpham, soluong = 1) {
                    this.sanpham = sanpham;
                    this.soluong = soluong;
                }
                tinhGiaTien() {
                    return 1;
                }
                showSanPhamTrongGioHang() {
                    return "";
                }
                layID() {
                    return this.laysanpham().id;
                }
                laysanpham() {
                    return this.sanpham;
                }
                thaydoisoluong(soluong) {
                    this.soluong = soluong;
                }
                laysoluong() {
                    return this.soluong;
                }
            };
            exports_1("SanPhamGioHang", SanPhamGioHang);
        }
    };
});
