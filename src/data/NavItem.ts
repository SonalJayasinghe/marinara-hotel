export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href: string;
  }
  
  export const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Room Tour",
      href: "/roomtour",
    },
    {
        label: "Dining",
        href: "/dining",
      },
      {
        label: "Offers",
        href: "/offers",
      },
      {
        label: "Contact",
        href: "/contact"
      },
  ];