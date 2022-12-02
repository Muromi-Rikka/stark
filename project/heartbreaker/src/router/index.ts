/*
 * @Author: Rikka
 * @Date: 2022-11-12 13:25:33
 * @LastEditTime: 2022-12-02 16:16:15
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: false,
    parent_name: "root",
    name: "[heartbreaker]Components",
    meta: {
      title: "Component",
      permission: [],
      menu_icon: ["iron", "component"]
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]WangEditor",
    path: "wang-editor",
    component: () => import("../views/wangEditor.vue"),
    meta: {
      title: "WangEditor",
      permission: [],
      menu_icon: ["iron", "editor"]
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]Milkdown",
    path: "milkdown",
    component: () => import("../views/milkdown.vue"),
    meta: {
      title: "Milkdown",
      permission: [],
      menu_icon: ["iron", "milk"]
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]AgGrid",
    path: "ag-grid",
    component: () => import("../views/ag-grid.vue"),
    meta: {
      title: "AgGrid",
      permission: [],
      menu_icon: ["iron", "grid"]
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]VCalendar",
    path: "v-calendar",
    component: () => import("../views/v-calendar/v-calendar.vue"),
    meta: {
      title: "V Calendar",
      permission: [],
      menu_icon: ["iron", "calendar"]
    }
  }
];

export { router_list };
