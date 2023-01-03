System.register(["./quanlyhang.js", "./quanlygiohang.js", "./sanphamgiohang.js"], function (exports_1, context_1) {
    "use strict";
    var quanlyhang_js_1, quanlygiohang_js_1, sanphamgiohang_js_1, tatcahang, giohang, divchuagiohang, smallsl, giatamtinh, thanhtien, divsanpham, nutmuangays, i;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (quanlyhang_js_1_1) {
                quanlyhang_js_1 = quanlyhang_js_1_1;
            },
            function (quanlygiohang_js_1_1) {
                quanlygiohang_js_1 = quanlygiohang_js_1_1;
            },
            function (sanphamgiohang_js_1_1) {
                sanphamgiohang_js_1 = sanphamgiohang_js_1_1;
            }
        ],
        execute: function () {
            tatcahang = new quanlyhang_js_1.QuanLyHang();
            giohang = new quanlygiohang_js_1.QuanLyGioHang();
            divchuagiohang = document.getElementById('cacsptronggio');
            smallsl = document.querySelector('.tdto small');
            giatamtinh = document.getElementById('giatamtinh');
            thanhtien = document.querySelector('.doto');
            divsanpham = document.getElementById('cacspdemua');
            divsanpham.innerHTML = tatcahang.showSanPham();
            nutmuangays = document.querySelectorAll('.nutmuangay');
            for (i = 0; i < nutmuangays.length; i++) {
                nutmuangays[i].addEventListener('click', function () {
                    var idlayduoc = this.getAttribute('data-idsp');
                    if (tatcahang.getSanPhamById(idlayduoc) == 0) {
                        console.log("Loi du lieu");
                    }
                    else {
                        var sanphamlayduoc = tatcahang.getSanPhamById(idlayduoc);
                        if (giohang.checksptruockhithem(sanphamlayduoc) == -1) {
                            var chuyendoisanphamsanggiohang = new sanphamgiohang_js_1.SanPhamGioHang(sanphamlayduoc, 1);
                            giohang.addSanPhamTrongGioHang(chuyendoisanphamsanggiohang);
                        }
                        else {
                            giohang.tangsoluongsanpham(sanphamlayduoc);
                        }
                        divchuagiohang.innerHTML = giohang.hienThiGioHang();
                        smallsl.innerHTML = "(" + giohang.tinhSoLuong() + " San Pham" + ")";
                        giatamtinh.innerHTML = giohang.tinhGia() + "VND";
                        thanhtien.innerHTML = giohang.tinhGia() + "VND";
                    }
                });
            }
            $(document).on("click", ".xoasp", function () {
                var idlayduoc = this.getAttribute('idsp');
                if (tatcahang.getSanPhamById(idlayduoc) == 0) {
                    console.log("Loi du lieu");
                }
                else {
                    var sanphamlayduoc = tatcahang.getSanPhamById(idlayduoc);
                    giohang.xoaSanPham(sanphamlayduoc);
                    divchuagiohang.innerHTML = giohang.hienThiGioHang();
                    smallsl.innerHTML = "(" + giohang.tinhSoLuong() + " San Pham" + ")";
                    giatamtinh.innerHTML = giohang.tinhGia() + "VND";
                    thanhtien.innerHTML = giohang.tinhGia() + "VND";
                }
            });
        }
    };
});
