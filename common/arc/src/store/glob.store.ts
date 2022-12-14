/*
 * @Author: Rikka
 * @Date: 2022-12-13 21:08:27
 * @LastEditTime: 2022-12-23 22:23:41
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\glob.store.ts
 */
import "dayjs/locale/zh-cn";

import { useStorage } from "@vueuse/core";
import dayjs from "dayjs";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export enum LANGS {
  "zh" = "中文",
  "en" = "En"
}

export type Theme = "light" | "dark";

export const useGlobStore = defineStore("arc_glob", () => {
  const lang = useStorage<keyof typeof LANGS>("arc_blob_lang", "zh");
  const collapse = useStorage("arc_blob_collapse", false);
  const theme = ref<Theme>("light");

  watch(
    lang,
    (value) => {
      dayjs.locale(value);
    },
    { immediate: true }
  );

  watch(
    theme,
    (value) => {
      document.querySelector("html")?.classList[value === "dark" ? "add" : "remove"]("dark");
    },
    { immediate: true }
  );

  // TODO langs...
  function toggleLang() {
    lang.value = lang.value === "en" ? "zh" : "en";
  }

  function toggleCollapse() {
    collapse.value = !collapse.value;
  }

  function toggleTheme() {
    theme.value = theme.value === "dark" ? "light" : "dark";
  }

  return {
    lang,
    theme,
    collapse,
    toggleLang,
    toggleTheme,
    toggleCollapse
  };
});
