import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../components/ui/navigation-menu";
import { menuData } from "../utils/commonData";

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuData.map((menu) => (
          <NavigationMenuItem
            key={menu.id}
            className="relative font-bold w-full"
          >
            <NavigationMenuTrigger className="text-base">
              {menu.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0 w-full">
              <div className="p-4 bg-[#3c3d41] min-w-[1500px] font-poppins w-full">
                {menu.subMenu.map((sub) => (
                  <div key={sub.id} className="mb-4 w-full">
                    <h3 className="text-lg text-white">{sub.title}</h3>
                    <ul className="space-y-1 pl-5 mt-2 list-disc w-full">
                      {sub.items.map((item) => (
                        <li key={item.id}>
                          <NavigationMenuLink
                            href={`#${item.id}`}
                            className="text-sm text-white hover:underline w-full"
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
