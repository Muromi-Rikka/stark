/*
 * @Author: Rikka
 * @Date: 2022-12-09 09:46:23
 * @LastEditTime: 2022-12-09 17:11:21
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\permission.store.ts
 */
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePermissionStore = defineStore("arc_permission", () => {
  const permission_list = ref([
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
  ]);

  function setList(permissions: string[]) {
    permission_list.value = permissions;
  }

  return {
    permission_list,
    setList
  };
});
