const DEFAULT_PRODUCTS = [
    { id: 1, name: 'شنطة Lady Dior ميني', brand: 'Dior', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 280 }, { size: 'M', unit: 'size', price: 350 }], discount: 0, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 2, name: 'شنطة Dior Crossbody', brand: 'Dior', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 220 }, { size: 'M', unit: 'size', price: 290 }], discount: 10, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop', status: 'special' },
    { id: 3, name: 'شنطة Guess Tote كبيرة', brand: 'Guess', category: 'حقائب', sizes: [{ size: 'M', unit: 'size', price: 180 }, { size: 'L', unit: 'size', price: 220 }], discount: 0, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop', status: 'normal' },
    { id: 4, name: 'شنطة Michael Kors كتف', brand: 'Michael Kors', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 250 }, { size: 'M', unit: 'size', price: 310 }], discount: 0, image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 5, name: 'شنطة Coach Tabby', brand: 'Coach', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 200 }, { size: 'M', unit: 'size', price: 260 }], discount: 5, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop', status: 'normal' },
    { id: 6, name: 'شنطة Calvin Klein مسطحة', brand: 'Calvin Klein', category: 'حقائب', sizes: [{ size: 'One Size', unit: 'size', price: 160 }], discount: 0, image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?w=400&h=400&fit=crop', status: 'normal' },
    { id: 7, name: 'شنطة Guess Evening Clutch', brand: 'Guess', category: 'حقائب', sizes: [{ size: 'One Size', unit: 'size', price: 120 }], discount: 15, image: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=400&h=400&fit=crop', status: 'special' },
    { id: 8, name: 'شنطة Dior Saddle', brand: 'Dior', category: 'حقائب', sizes: [{ size: 'M', unit: 'size', price: 320 }, { size: 'L', unit: 'size', price: 380 }], discount: 0, image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop', status: 'normal' },
    { id: 9, name: 'شنطة كتف صغيرة جلد', brand: 'Zoom', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 100 }, { size: 'M', unit: 'size', price: 130 }], discount: 0, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', status: 'normal' },
    { id: 10, name: 'شنطة يد سهرة لامعة', brand: 'Zoom', category: 'حقائب', sizes: [{ size: 'One Size', unit: 'size', price: 90 }], discount: 0, image: 'https://images.unsplash.com/photo-1564422167509-4f8763ff046e?w=400&h=400&fit=crop', status: 'normal' },
    { id: 11, name: 'اسوارة ستانلس ستيل ذهبي', brand: 'Zoom', category: 'اساور', sizes: [{ size: '17', unit: 'cm', price: 45 }, { size: '19', unit: 'cm', price: 50 }], discount: 0, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 12, name: 'اسوارة ستانلس فضي مع حجر', brand: 'Zoom', category: 'اساور', sizes: [{ size: '17', unit: 'cm', price: 55 }, { size: '19', unit: 'cm', price: 60 }], discount: 0, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', status: 'special' },
    { id: 13, name: 'طقم اساور ستانلس 3 قطع', brand: 'Zoom', category: 'اساور', sizes: [{ size: 'One Size', unit: 'size', price: 80 }], discount: 10, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 14, name: 'اسوارة ستانلس روز قولد', brand: 'Zoom', category: 'اساور', sizes: [{ size: '17', unit: 'cm', price: 50 }, { size: '19', unit: 'cm', price: 55 }], discount: 0, image: 'https://images.unsplash.com/photo-1515562141589-67f0d706d6e0?w=400&h=400&fit=crop', status: 'normal' },
    { id: 15, name: 'اسوارة Pandora ستايل', brand: 'Pandora', category: 'اساور', sizes: [{ size: '17', unit: 'cm', price: 65 }, { size: '19', unit: 'cm', price: 70 }], discount: 0, image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop', status: 'normal' },
    { id: 16, name: 'اسوارة Calvin Klein رفيعة', brand: 'Calvin Klein', category: 'اساور', sizes: [{ size: '16', unit: 'cm', price: 75 }, { size: '18', unit: 'cm', price: 80 }], discount: 0, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop', status: 'normal' },
    { id: 17, name: 'اسوارة Michael Kors ذهبية', brand: 'Michael Kors', category: 'اساور', sizes: [{ size: '17', unit: 'cm', price: 90 }, { size: '19', unit: 'cm', price: 95 }], discount: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop', status: 'special' },
    { id: 18, name: 'طقم اساور ستانلس 5 قطع ملونة', brand: 'Zoom', category: 'اساور', sizes: [{ size: 'One Size', unit: 'size', price: 100 }], discount: 0, image: 'https://images.unsplash.com/photo-1576022162028-2091422c2230?w=400&h=400&fit=crop', status: 'normal' },
    { id: 19, name: 'سلسال Dior قلب', brand: 'Dior', category: 'اكسسوارات', sizes: [{ size: '45', unit: 'cm', price: 85 }], discount: 0, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 20, name: 'خاتم Pandora فضي', brand: 'Pandora', category: 'اكسسوارات', sizes: [{ size: '6', unit: 'ring', price: 50 }, { size: '7', unit: 'ring', price: 50 }, { size: '8', unit: 'ring', price: 50 }], discount: 0, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', status: 'normal' },
    { id: 21, name: 'حلق Guess Crystal', brand: 'Guess', category: 'اكسسوارات', sizes: [{ size: 'One Size', unit: 'size', price: 40 }], discount: 0, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop', status: 'normal' },
    { id: 22, name: 'عقد Calvin Klein طبقات', brand: 'Calvin Klein', category: 'اكسسوارات', sizes: [{ size: '42', unit: 'cm', price: 70 }, { size: '48', unit: 'cm', price: 80 }], discount: 0, image: 'https://images.unsplash.com/photo-1515562141589-67f0d706d6e0?w=400&h=400&fit=crop', status: 'normal' },
    { id: 23, name: 'طقم اكسسوارات Coach', brand: 'Coach', category: 'اكسسوارات', sizes: [{ size: 'One Size', unit: 'size', price: 120 }], discount: 12, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop', status: 'special' },
    { id: 24, name: 'سلسال Michael Kors مع بندول', brand: 'Michael Kors', category: 'اكسسوارات', sizes: [{ size: '50', unit: 'cm', price: 95 }], discount: 0, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop', status: 'normal' }
];

const DEFAULT_DISCOUNTS = [
    { id: 'launch-bracelets', type: 'category', values: ['اساور'], value: 'اساور', percentage: 10, description: 'خصم 10% على جميع الاساور — اللون مكفول لسنتين! 🔥', expiresAt: '' }
];

const DEFAULT_SITE_SETTINGS = {
    whatsappNumber: '0599000000',
    heroSubtitle: 'حقائب، اساور، واكسسوارات بأسعار مميزة وتوصيل لكل فلسطين',
    aboutText: 'Zoom Store وجهتكِ للحقائب الأنيقة والاساور الماركة والاكسسوارات المميزة في طولكرم.\n\nننتقي لكِ قطعاً بجودة عالية وأسعار منافسة، مع خدمة سريعة واهتمام بكل طلب من أول رسالة حتى التسليم.',
    instagramLink: 'https://www.instagram.com/zoom_store_tulkarm2'
};

const BRANDS_DATA = [
    { name: 'Dior', logo: '' },
    { name: 'Guess', logo: '' },
    { name: 'Michael Kors', logo: '' },
    { name: 'Coach', logo: '' },
    { name: 'Calvin Klein', logo: '' },
    { name: 'Pandora', logo: '' }
];

function normalizeSizeEntry(entry) {
    if (!entry) return { size: '', unit: 'size', price: 0 };
    return {
        size: String(entry.size || '').trim(),
        unit: String(entry.unit || 'size').trim() || 'size',
        price: Number(entry.price) || 0
    };
}

function normalizeProduct(product) {
    const sizes = Array.isArray(product && product.sizes) && product.sizes.length
        ? product.sizes.map(normalizeSizeEntry)
        : [normalizeSizeEntry({ size: product && product.size, unit: product && product.unit, price: product && product.price })];

    return {
        id: Number(product && product.id) || Date.now(),
        name: (product && product.name) || '',
        brand: (product && product.brand) || '',
        category: (product && product.category) || '',
        sizes: sizes.filter(function (size) { return size.size && size.price >= 0; }),
        discount: Number(product && product.discount) || 0,
        image: (product && product.image) || '',
        status: (product && product.status) || 'normal'
    };
}

function normalizeProducts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeProduct).sort(function (a, b) { return a.id - b.id; });
}

function normalizeDiscount(discount) {
    var values = [];
    if (discount && discount.values && Array.isArray(discount.values)) values = discount.values;
    else if (discount && discount.value) values = String(discount.value).split(',').map(function (v) { return v.trim(); }).filter(Boolean);
    return {
        id: String(discount && discount.id ? discount.id : Date.now()),
        type: ['brand', 'category', 'manual', 'all'].indexOf(discount && discount.type) >= 0 ? discount.type : 'manual',
        value: values.join(', '),
        values: values,
        percentage: Number(discount && discount.percentage) || 0,
        description: String(discount && discount.description ? discount.description : '').trim(),
        expiresAt: discount && discount.expiresAt ? discount.expiresAt : ''
    };
}

function normalizeDiscounts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeDiscount);
}

function extractWhatsappNumber(input) {
    const raw = String(input || '').trim();
    if (!raw) return DEFAULT_SITE_SETTINGS.whatsappNumber;
    const fromLink = raw.indexOf('wa.me/') >= 0 ? raw.split('wa.me/')[1] : raw;
    return fromLink.replace(/[^\d]/g, '');
}

function buildWhatsAppUrl(number, message) {
    const safeNumber = extractWhatsappNumber(number);
    const text = message ? '?text=' + encodeURIComponent(message) : '';
    return 'https://wa.me/' + safeNumber + text;
}

function normalizeSettings(settings) {
    const source = settings || {};
    return {
        whatsappNumber: extractWhatsappNumber(source.whatsappNumber || source.whatsappLink || DEFAULT_SITE_SETTINGS.whatsappNumber),
        heroSubtitle: String(source.heroSubtitle || DEFAULT_SITE_SETTINGS.heroSubtitle),
        aboutText: String(source.aboutText || DEFAULT_SITE_SETTINGS.aboutText),
        instagramLink: String(source.instagramLink || DEFAULT_SITE_SETTINGS.instagramLink)
    };
}

function getSizeData(product, sizeIdx) {
    if (!product || !Array.isArray(product.sizes) || !product.sizes.length) return { size: '', unit: 'size', price: 0 };
    const safeIndex = Math.max(0, Math.min(Number(sizeIdx) || 0, product.sizes.length - 1));
    return product.sizes[safeIndex];
}

function getUnitLabel(unit) {
    return {
        g: 'غرام',
        ml: 'مل',
        mm: 'مم',
        cm: 'سم',
        ring: 'مقاس',
        size: '',
        piece: 'قطعة',
        one: 'قياس موحد'
    }[unit] || unit;
}

function getSizeLabel(sizeData) {
    if (!sizeData) return '';
    if (sizeData.unit === 'size' && String(sizeData.size).toLowerCase() === 'one size') return 'قياس موحد';
    const label = getUnitLabel(sizeData.unit);
    if (!label) return String(sizeData.size || '');
    if (!sizeData.size) return label;
    if (sizeData.unit === 'ring') return label + ' ' + String(sizeData.size);
    return String(sizeData.size) + ' ' + label;
}

function getProductDiscountPercent(product, discounts) {
    let discountPercent = Number(product && product.discount) || 0;
    var now = new Date().toISOString().slice(0, 10);
    normalizeDiscounts(discounts).forEach(function (discount) {
        if (discount.expiresAt && discount.expiresAt < now) return;
        if (discount.type === 'all') discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'brand' && discount.values.indexOf(product.brand) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'category' && discount.values.indexOf(product.category) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
    });
    return discountPercent;
}

function getFinalPrice(product, sizeIdx, discounts) {
    const sizeData = getSizeData(product, sizeIdx);
    const discountPercent = getProductDiscountPercent(product, discounts || []);
    if (discountPercent > 0) {
        return {
            original: Number(sizeData.price) || 0,
            final: Math.round((Number(sizeData.price) || 0) * (1 - discountPercent / 100)),
            hasDiscount: true,
            discountPercent: discountPercent
        };
    }

    return {
        original: Number(sizeData.price) || 0,
        final: Number(sizeData.price) || 0,
        hasDiscount: false,
        discountPercent: 0
    };
}

function normalizeCartItems(cartItems, productsList) {
    const safeProducts = Array.isArray(productsList) ? productsList : normalizeProducts(DEFAULT_PRODUCTS);
    return (Array.isArray(cartItems) ? cartItems : []).map(function (item) {
        const product = safeProducts.find(function (entry) { return entry.id === Number(item.id || item.productId); });
        const maxSizeIndex = product && product.sizes.length ? product.sizes.length - 1 : 0;
        const requestedSize = Number.isInteger(item.sizeIdx) ? item.sizeIdx : parseInt(item.sizeIdx || 0, 10) || 0;
        const sizeIdx = Math.max(0, Math.min(requestedSize, maxSizeIndex));
        return {
            id: Number(item.id || item.productId),
            sizeIdx: sizeIdx,
            qty: Math.max(1, parseInt(item.qty || 1, 10) || 1),
            price: Number(item.price) || (product ? getSizeData(product, sizeIdx).price : 0)
        };
    }).filter(function (item) {
        return item.id;
    });
}

function formatCurrency(value) {
    return '₪' + (Number(value) || 0);
}

function formatDateTime(dateValue) {
    const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleString('ar-PS', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function makeOrderId() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let idx = 0; idx < 5; idx += 1) code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    return 'ORD-' + code;
}
