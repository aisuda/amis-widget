/**
 * 自定义editor插件配置项
 */
export interface AmisRendererOption {
    /**
     * 渲染器名称
     * 备注：渲染过程中用于查找对应的渲染器
     */
    type: string;
    /**
     * 要注册的amis渲染器类型
     * amis普通渲染器、amis表单渲染器、amis表单控件渲染器
     * 备注：默认为amis普通渲染器
     */
    usage?: string;
    /**
     * 自定义组件权重
     * 备注：值越低越优先命中
     */
    weight?: number;
    /**
     * 自定义组件技术栈类型
     * 备注：默认为react
     */
    framework?: string;
}
/**
 * registerRendererByType: 根据type类型注册amis普通渲染器、amis表单渲染器、amis表单控件渲染器
 *【方法参数说明】
 * newRenderer: 新的渲染器,
 * rendererOption: {
 *   type: 渲染器的type类型，比如：input、text-area、select-user等
 *   usage?: amis普通渲染器、amis表单渲染器、amis表单控件渲染器
 *   weight?: 自定义组件权重
 *   framework?: 技术栈类型，默认为 react 技术栈，可选技术栈：vue2、react、jquery
 * }
 * 备注：暂不支持 vue3.0 技术栈
 */
export declare function registerRendererByType(newRenderer: any, rendererOption: string | AmisRendererOption): void;
