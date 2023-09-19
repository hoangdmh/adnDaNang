<template>
  <section class="clear-fix">
    <div id="content">
        <comp-menu-left />
        <div class="center_content">
            <p>Đến với Trung tâm <a href="http://adndanang.com" class="spencial_col">xét nghiệm ADN Đà Nẵng</a> Và Miền Trung bạn sẽ được cung cấp dịch vụ xác định mối quan hệ huyết thống do Giám định viên <span class="col-blue">Trung tâm xét nghiệm ADN Đà Nẵng</span> thực hiện trong thời gian nhanh nhất – Chi phí thấp nhất – Độ chính xác cao nhất – Bảo mật thông tin tuyệt đối.</p>

            <router-view></router-view>
        </div>
    </div>
</section>
</template>

<script>
import CompMenuLeft from '../component/CompMenuLeft.vue';
export default {
    name: 'home-page',
    components: {
        CompMenuLeft
    }
}
</script>

<style>

</style>