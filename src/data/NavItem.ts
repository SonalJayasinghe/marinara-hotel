export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  export const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Room Tour",
      href: "#",
    },
    {
        label: "Dining",
        href: "#",
      },
      {
        label: "Offers",
        href: "#",
      },
      {
        label: "F&Q",
        href: "#",
      },
  ];