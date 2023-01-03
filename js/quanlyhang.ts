import { SanPham } from "./sanpham.js"

export class QuanLyHang {
    private hang : SanPham[] = []; // dung de hung du lieu tu API

    constructor(){
        // vi khong co PHP(Database nen tao bang tay)
        var sanpham1 = new SanPham(1,"Bia Tiger",40000,"Bảo quản nơi sạch sẽ khô ráo thoáng mát.",true,"../images/1.png");
        this.addSanPham(sanpham1);

        var sanpham2 = new SanPham(2,"Heineken Silver",45000,"Bảo quản nơi sạch sẽ khô ráo thoáng mát.",true,"../images/2.png");
        this.addSanPham(sanpham2);

        var sanpham3 = new SanPham(3,"SAIGON SPECIAL",35000,"Bảo quản nơi sạch sẽ khô ráo thoáng mát.",false,"../images/3.png");
        this.addSanPham(sanpham3);

        var sanpham4 = new SanPham(4,"Bia Hà Nội",30000,"Bảo quản nơi sạch sẽ khô ráo thoáng mát.",true,"../images/4.png");
        this.addSanPham(sanpham4);

        var sanpham5 = new SanPham(5,"Bia Trúc Bạch",25000,"Bảo quản nơi sạch sẽ khô ráo thoáng mát.",false,"../images/5.png");
        this.addSanPham(sanpham5);
    }

    // Hàm lấy ra các sản phẩm dựa vào ID -- ham nay khong dung
    public getSanPhamById(idsanpham:number): any{
       // lay san pham du vao id
       for (var i:number = 0; i< this.hang.length; ++i){
        // kiem tra
        if(this.hang[i].id == idsanpham){
            return this.hang[i];
        }
       }
        // het vong lap thi khong co san pham trung trong du lieu
       return 0;
    }


    // ham them mot san pham
    public addSanPham(sp:SanPham): void{
        // dung de day du lieu hung duoc API
        // vao trong cai mang hang
        this.hang.push(sp); // ham push la ham thao tac voi mang
    }

    // hàm lấy ra các sản phảm -- ham nay khong dung
    public getCacSanPham(): SanPham[] {
        return this.hang;
    }

    //hien thi san pham
    public showSanPham(): string {
        //lay san pham in ra duoi dang HTML va dat vao giao dien
        var danhsachspHTML = "";
        if(this.hang.length != 0){
            //duyet mang hang
            for(var i =0; i< this.hang.length; ++i){
                danhsachspHTML += `
                <div class="col-sm-4">
                <div class="card _1spkhac id-${this.hang[i].id}">
                    <img class="card-img"  src="${this.hang[i].anh}" alt="">
                    <div class="card-body">
                        <a href="" class="tieudespkhac">${this.hang[i].ten}</a>
                        <p class="card-text mota">${this.hang[i].mota}</p>
                        <b>${this.hang[i].gia}</b>`;

                        if(this.hang[i].tinhtrang == false){
                            danhsachspHTML+= `
                              <a href="" class="btn btn-outline-secondary disabled">Het Hang</a>
                            
                            `;
                        }else{
                            danhsachspHTML+= `
                            <button href="" class="btn btn-outline-info nutmuangay" data-idsp="${this.hang[i].id}">Mua Ngay</button>                     
                          `;
                        }
                      
                        danhsachspHTML +=
                        `
                    </div>
                </div>
                </div>
            `
            } // het vong lap for
            return danhsachspHTML;
        }
        return "San pham dang duoc cap nhat";
    }
}