import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../components/ui/navigation-menu"
import { menuData } from "../utils/commonData";

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList >
        {menuData.map((menu) => (
          <NavigationMenuItem key={menu.id} className="relative">
            <NavigationMenuTrigger className="text-base">{menu.title}</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0 w-full">
              <div className="p-4 bg-[#1a3a3f] min-w-[300px] rounded border-0 shadow-lg font-poppins">
                {menu.subMenu.map((sub) => (
                  <div key={sub.id} className="mb-4">
                    <h3 className="text-lg font-semibold">{sub.title}</h3>
                    <ul className="space-y-1 pl-5 mt-2 list-disc">
                      {sub.items.map((item) => (
                        <li key={item.id}>
                          <NavigationMenuLink
                            href={`#${item.id}`}
                            className="text-sm text-grey-500 hover:underline"
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
