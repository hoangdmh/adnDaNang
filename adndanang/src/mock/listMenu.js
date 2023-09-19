export default [
    {
        pageName: 'Trang Chủ',
        pageUrl: '/',
        isChild: false
    },
    {
        pageName: 'Giới thiệu',
        pageUrl: '/gioi-thieu',
        isChild: false
    },
    {
        pageName: 'Dịch vụ',
        pageUrl: '/xet-nghiem-adn-cha-me-con',
        isChild: true,
        pageChild: [
            {
                pageName: 'XÉT NGHIỆM ADN CHA (MẸ) CON',
                pageUrl: '/xet-nghiem-adn-cha-me-con'
            },
            {
                pageName: 'XÉT NGHIỆM CHA CON TRƯỚC KHI SINH',
                pageUrl: '/xet-nghiem-cha-con-truoc-khi-sinh'
            },
            {
                pageName: 'XÉT NGHIỆM ADN ANH (CHỊ) EM',
                pageUrl: '/xet-nghiem-adn-anh-chi-em'
            },
            {
                pageName: 'XÉT NGHIỆM ADN HỌ HÀNG',
                pageUrl: '/xet-nghiem-adn-ho-hang'
            },
            {
                pageName: 'XÉT NGHIỆM HUYẾT THỐNG ÔNG BÀ CHÁU',
                pageUrl: '/xet-nghiem-huyet-thong-ong-ba-chau'
            },
            {
                pageName: 'GIÁM ĐỊNH ADN HÀI CỐT LIỆT SĨ',
                pageUrl: '/giam-dinh-adn-hai-cot'
            },
        ]
    },
    {
        pageName: 'Bảng giá - thanh toán',
        pageUrl: '/bang-gia',
        isChild: true,
        pageChild: [
            {
                pageName: 'Bảng giá',
                pageUrl: '/bang-gia'
            },
            {
                pageName: 'Hình thức thanh toán',
                pageUrl: '/thanh-toan'
            }
        ]
    },
    {
        pageName: 'Hướng dẫn - thủ tục',
        pageUrl: '/huong-dan-thu-mau-va-bao-quan-mau',
        isChild: true,
        pageChild: [
            {
                pageName: 'Hướng dẫn thu mẫu và bảo quản mẫu',
                pageUrl: '/huong-dan-thu-mau-va-bao-quan-mau'
            },
            {
                pageName: 'Thủ tục xét nghiệm',
                pageUrl: '/thu-tuc-xet-nghiem'
            }
        ]
    },
    {
        pageName: 'Liên hệ',
        pageUrl: '/lien-he',
        isChild: false
    }
]