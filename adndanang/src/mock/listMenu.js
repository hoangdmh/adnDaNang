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
        pageName: 'Tin tức',
        pageUrl: '/tin-tuc',
        isChild: false
    },
    {
        pageName: 'Liên hệ',
        pageUrl: '/lien-he',
        isChild: false
    },
]