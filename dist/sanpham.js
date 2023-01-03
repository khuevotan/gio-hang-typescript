System.register([], function (exports_1, context_1) {
    "use strict";
    var SanPham;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SanPham = class SanPham {
                get id() {
                    return this._id;
                }
                set id(v) {
                    this._id = v;
                }
                get ten() {
                    return this._ten;
                }
                set ten(v) {
                    this._ten = v;
                }
                get gia() {
                    return this._gia;
                }
                set gia(v) {
                    this._gia = v;
                }
                get mota() {
                    return this._mota;
                }
                set mota(v) {
                    this._mota = v;
                }
                get tinhtrang() {
                    return this._tinhtrang;
                }
                set tinhtrang(v) {
                    this._tinhtrang = v;
                }
                get anh() {
                    return this._anh;
                }
                set anh(v) {
                    this._anh = v;
                }
                constructor(id, ten, gia, mota, tinhtrang, anh) {
                    this.id = id;
                    this.ten = ten;
                    this.gia = gia;
                    this.mota = mota;
                    this.tinhtrang = tinhtrang;
                    this.anh = anh;
                }
            };
            exports_1("SanPham", SanPham);
        }
    };
});
