<template>
    <div class="menu-left">
        <ul class="clear-fix">
            <li class="active"><a href="javascript:void(0)">DỊCH VỤ</a></li>
            <li><a href="/categories/xet-nghiem-adn-cha-me-con.html">XÉT NGHIỆM ADN CHA (MẸ) CON</a></li>
            <li><a href="/categories/xet-nghiem-cha-con-truoc-khi-sinh.html">XÉT NGHIỆM CHA CON TRƯỚC KHI SINH</a></li>
            <li><a href="/categories/xet-nghiem-adn-anh-chi-em.html">XÉT NGHIỆM ADN ANH (CHỊ) EM</a>
            </li>
            <li><a href="/categories/xet-nghiem-adn-ho-hang.html">XÉT NGHIỆM ADN HỌ HÀNG</a>
            </li>
            <li><a href="/categories/xet-nghiem-huyet-thong-ong-ba-chau.html">XÉT NGHIỆM HUYẾT THỐNG ÔNG BÀ CHÁU</a>
            </li>
            <li><a href="/categories/giam-dinh-adn-hai-cot.html">GIÁM ĐỊNH ADN HÀI CỐT LIỆT SĨ</a>
            </li>
        </ul>
        <ul class="clear-fix">
            <li class="active"><a href="javascript:void(0)">BẢNG GIÁ</a></li>
            <li><a href="/categories/banggia.html">BẢNG GIÁ </a></li>
            <li><a href="/categories/thanhtoan.html">HÌNH THỨC THANH TOÁN</a></li>
        </ul>
        <ul class="clear-fix">
            <li class="active"><a href="javascript:void(0)">HƯỚNG DẪN - THỦ TỤC</a></li>
            <li><a href="/categories/huong-dan-thu-mau-va-bao-quan-mau.html">HƯỚNG DẪN THU MẪU VÀ BẢO QUẢN MẪU</a></li>
            <li><a href="/categories/thu-tuc-xet-nghiem.html">THỦ TỤC XÉT NGHIỆM</a></li>
        </ul>
    </div>
  </template>
  
  <script>
  import listMenu from '../mock/listMenu';
  export default {
      name: 'comp-menu-left',
      data(){
        return {
            listMenu
        }
      }
  }
  </script>
  
  <style>
  
  </style>