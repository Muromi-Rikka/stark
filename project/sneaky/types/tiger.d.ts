/*
 * @Author: Rikka
 * @Date: 2022-11-26 13:06:30
 * @LastEditTime: 2022-12-05 10:38:57
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\types\cassanova.d copy.ts
 */

declare module "tiger/remote" {
  import { EnhanceRouter } from "@stark/common-arc";

  const router_list: EnhanceRouter[];
  function register(app: App<Element>): void;

  export { router_list, register };
}
