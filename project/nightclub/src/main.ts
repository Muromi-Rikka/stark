/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-11-12 19:21:40
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\nightclub\src\main.ts
 */
import { createApp } from "vue";
import { App, router, useMenuStore } from "@stark/common-arc";
import { createPinia } from "pinia";
import { router_list } from "./router";
const app = createApp(App);
const pinia = createPinia();
const menuStore = useMenuStore(pinia);
app.use(pinia);
menuStore.set_menu(router_list);
app.use(router(menuStore.router));
app.mount("#app");