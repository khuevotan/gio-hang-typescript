import { SanPham } from "./sanpham.js";
import { QuanLyHang } from "./quanlyhang.js";
import { QuanLyGioHang } from "./quanlygiohang.js";
import { SanPhamGioHang } from "./sanphamgiohang.js";

var tatcahang = new QuanLyHang();
var giohang = new QuanLyGioHang();
var divchuagiohang= document.getElementById('cacsptronggio');
var smallsl = document.querySelector('.tdto small');
var giatamtinh = document.getElementById('giatamtinh');
var thanhtien = document.querySelector('.doto');



// var hangs : SanPham[] = tatcahang.getCacSanPham();
// for (var i =0; i< hangs.length; ++i){
//     console.log(hangs[i]);
    
// }
// console.log(tatcahang.showSanPham());

// day san pham tu "du lieu" vao giao dien
var divsanpham = document.getElementById('cacspdemua');
divsanpham.innerHTML = tatcahang.showSanPham();


//xy ly su kien click vao nut mua ngay
var nutmuangays = document.querySelectorAll('.nutmuangay');

for (var i:number = 0; i< nutmuangays.length; i++){
    nutmuangays[i].addEventListener('click',function(){  
       var idlayduoc:number = this.getAttribute('data-idsp');

       if(tatcahang.getSanPhamById(idlayduoc) == 0){
            console.log("Loi du lieu");
        
       }else{
            var sanphamlayduoc:SanPham = tatcahang.getSanPhamById(idlayduoc);
          
          
          if(giohang.checksptruockhithem(sanphamlayduoc) == -1){
               var chuyendoisanphamsanggiohang: SanPhamGioHang = new
               SanPhamGioHang (sanphamlayduoc,1);
               giohang.addSanPhamTrongGioHang(chuyendoisanphamsanggiohang);
          }else // co roi
          {
               //updte so luong san pham
               giohang.tangsoluongsanpham(sanphamlayduoc);
          } 
          
         divchuagiohang.innerHTML = giohang.hienThiGioHang();
         smallsl.innerHTML = "(" + giohang.tinhSoLuong() + " San Pham" + ")" ;
         giatamtinh.innerHTML = giohang.tinhGia() + "VND";
         thanhtien.innerHTML = giohang.tinhGia() + "VND";

     //     var osoluong = document.getElementsByClassName('.soluongspne');
     //     console.log(osoluong);
       }
    })
}

// xu ly su kien nut delete
// var nutdelete = document.querySelectorAll('.xoasp');
// for (var i:number = 0; i< nutdelete.length; i++){
//      nutdelete[i].addEventListener('click',function(){  
//           var idlayduoc:number = this.getAttribute('idsp');

//           if(tatcahang.getSanPhamById(idlayduoc) == 0){
//                console.log("Loi du lieu");
          
//           }else{
//           var sanphamlayduoc:SanPhamGioHang = tatcahang.getSanPhamById(idlayduoc);
//           giohang.xoaSanPham(sanphamlayduoc);
          
//           divchuagiohang.innerHTML = giohang.hienThiGioHang();
//           smallsl.innerHTML = "(" + giohang.tinhSoLuong() + " San Pham" + ")" ;
//           giatamtinh.innerHTML = giohang.tinhGia() + "VND";
//           thanhtien.innerHTML = giohang.tinhGia() + "VND";
//           }
//      })
// }

declare var $: any;

$(document).on("click", ".xoasp", function () {
     var idlayduoc:number = this.getAttribute('idsp');

     if(tatcahang.getSanPhamById(idlayduoc) == 0){
          console.log("Loi du lieu");
     
     }else{
     var sanphamlayduoc:SanPham = tatcahang.getSanPhamById(idlayduoc);
     giohang.xoaSanPham(sanphamlayduoc);
     
     divchuagiohang.innerHTML = giohang.hienThiGioHang();
     smallsl.innerHTML = "(" + giohang.tinhSoLuong() + " San Pham" + ")" ;
     giatamtinh.innerHTML = giohang.tinhGia() + "VND";
     thanhtien.innerHTML = giohang.tinhGia() + "VND";
     }
});

