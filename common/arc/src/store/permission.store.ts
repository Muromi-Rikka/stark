/*
 * @Author: Rikka
 * @Date: 2022-12-09 09:46:23
 * @LastEditTime: 2023-01-02 23:49:49
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\permission.store.ts
 */
import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePermissionStore = defineStore("arc_permission", () => {
  const permission_list = reactive({
    data: [
      "stark",
      "dashboard",
      "component",
      "component-wangeditor",
      "component-milkdown",
      "component-aggrid",
      "component-v_calendar",
      "component-notification",
      "form",
      "form-custom_form",
      "form-json_schema",
      "feature",
      "feature-cache",
      "feature-cache-cache_test",
      "feature-cache-second",
      "feature-cache-second-deep_menu",
      "feature-operate",
      "feature-operate-data",
      "feature-operate-handle",
      "feature-permission",
      "feature-permission-tree"
    ]
  });

  function setList(permissions: string[]) {
    permission_list.data = permissions;
  }

  return {
    permission_list,
    setList
  };
});
