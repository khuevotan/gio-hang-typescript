System.register(["./sanpham.js"], function (exports_1, context_1) {
    "use strict";
    var sanpham_js_1, QuanLyHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (sanpham_js_1_1) {
                sanpham_js_1 = sanpham_js_1_1;
            }
        ],
        execute: function () {
            QuanLyHang = class QuanLyHang {
                constructor() {
                    this.hang = [];
                    var sanpham1 = new sanpham_js_1.SanPham(1, "Bia Tiger", 40000, "Bảo quản nơi sạch sẽ khô ráo thoáng mát.", true, "../images/1.png");
                    this.addSanPham(sanpham1);
                    var sanpham2 = new sanpham_js_1.SanPham(2, "Heineken Silver", 45000, "Bảo quản nơi sạch sẽ khô ráo thoáng mát.", true, "../images/2.png");
                    this.addSanPham(sanpham2);
                    var sanpham3 = new sanpham_js_1.SanPham(3, "SAIGON SPECIAL", 35000, "Bảo quản nơi sạch sẽ khô ráo thoáng mát.", false, "../images/3.png");
                    this.addSanPham(sanpham3);
                    var sanpham4 = new sanpham_js_1.SanPham(4, "Bia Hà Nội", 30000, "Bảo quản nơi sạch sẽ khô ráo thoáng mát.", true, "../images/4.png");
                    this.addSanPham(sanpham4);
                    var sanpham5 = new sanpham_js_1.SanPham(5, "Bia Trúc Bạch", 25000, "Bảo quản nơi sạch sẽ khô ráo thoáng mát.", false, "../images/5.png");
                    this.addSanPham(sanpham5);
                }
                getSanPhamById(idsanpham) {
                    for (var i = 0; i < this.hang.length; ++i) {
                        if (this.hang[i].id == idsanpham) {
                            return this.hang[i];
                        }
                    }
                    return 0;
                }
                addSanPham(sp) {
                    this.hang.push(sp);
                }
                getCacSanPham() {
                    return this.hang;
                }
                showSanPham() {
                    var danhsachspHTML = "";
                    if (this.hang.length != 0) {
                        for (var i = 0; i < this.hang.length; ++i) {
                            danhsachspHTML += `
                <div class="col-sm-4">
                <div class="card _1spkhac id-${this.hang[i].id}">
                    <img class="card-img"  src="${this.hang[i].anh}" alt="">
                    <div class="card-body">
                        <a href="" class="tieudespkhac">${this.hang[i].ten}</a>
                        <p class="card-text mota">${this.hang[i].mota}</p>
                        <b>${this.hang[i].gia}</b>`;
                            if (this.hang[i].tinhtrang == false) {
                                danhsachspHTML += `
                              <a href="" class="btn btn-outline-secondary disabled">Het Hang</a>
                            
                            `;
                            }
                            else {
                                danhsachspHTML += `
                            <button href="" class="btn btn-outline-info nutmuangay" data-idsp="${this.hang[i].id}">Mua Ngay</button>                     
                          `;
                            }
                            danhsachspHTML +=
                                `
                    </div>
                </div>
                </div>
            `;
                        }
                        return danhsachspHTML;
                    }
                    return "San pham dang duoc cap nhat";
                }
            };
            exports_1("QuanLyHang", QuanLyHang);
        }
    };
});
