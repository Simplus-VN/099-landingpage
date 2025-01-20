import { Rule } from "antd/es/form";

export const FORM_RULES: Record<string, Rule[]> = {
    NAME: [
        {
            required: true,
            message: "Vui lòng nhập họ và tên!",
        },
    ],
    DOB: [{
        required: true,
        message: "Vui lòng nhập ngày sinh!",
    }],
    EMAIL: [{
        required: true,
        message: "Vui lòng nhập email!",
    }, {
        type: "email",
        message: "Email không hợp lệ!",
    }],
    PHONE: [{
        required: true,
        message: "Vui lòng nhập số điện thoại!",
    }, {
        pattern: /^(0|\+84)(3[2-9]|52|55|56|58|7[06-9]|8[0-9]|9[0-4|6-8])[0-9]{7}$|(0|\+84)(16|12)[0-9]{8}$/,
        message: "Số điện thoại không hợp lệ!",
    }],
    NOTE: [],
}

export const SOCIAL_LINKS = {
    TIKTOK: 'https://www.tiktok.com/@simplus_dungrededang',
    YOUTUBE: 'https://www.youtube.com/channel/UCs4oD8qZ0dtCnS5Ohsgk3tg',
    FACEBOOK: 'https://www.facebook.com/simplus.net.vn/',
    ZALO: 'https://zalo.me/0394516666',
}