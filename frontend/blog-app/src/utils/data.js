import {
    LuLayoutDashboard,
    LuGalleryVerticalEnd,
    LuMessageSquareQuote,
    LuLayoutTemplate,
    LuInfo,
    LuMail,
} from "react-icons/lu";

export const SIDE_MENU_DATA = [
    {
    id: "01",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/admin/dashboard",
    },
    {
    id: "02",
    label: "Blog Posts",
    icon: LuGalleryVerticalEnd,
    path: "/admin/posts",
    },
    {
    id: "03",
    label: "Comments",
    icon: LuMessageSquareQuote,
    path: "/admin/comments",
    },
];

export const BLOG_NAVBAR_DATA = [
    {
    id: "01",
    label: "Home",
    icon: LuLayoutTemplate,
    path: "/",
    },
    {
    id: "02",
    label: "About",
    icon: LuInfo,
    path: "/about",
    },
    {
    id: "03",
    label: "Contact",
    icon: LuMail,
    path: "/contact",
    },
];