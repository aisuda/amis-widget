export declare const consoleTag = "[amis-widget]";
export * from './object';
/**
 * 获取技术栈标识
 * 目的：兼容用户非标准写法
 */
export declare function getFramework(_framework?: string): string;
export declare enum Usage {
    renderer = "renderer",
    formitem = "formitem",
    options = "options"
}
/**
 * 获取amis渲染器类型标识
 * 目的：兼容用户非标准写法
 */
export declare function getUsage(_usage?: string): string;
/**
 * 当前amis-widget支持的技术栈
 * 备注：vue2和vue3不能同时存在
 */
export declare enum Framework {
    react = "react",
    vue2 = "vue2",
    vue3 = "vue3",
    jquery = "jquery"
}
export declare function isEditorPlugin(EditorPluginClass: any): boolean;
export declare function deepClone(target: any): any;
export declare function isString(str: any): boolean;
export declare function isObject(obj: any): boolean;
