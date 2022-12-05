// import { Renderer, FormItem, OptionsControl } from 'amis-core';
import { createJQComponent } from '../frameworkFactory/jqFactory';
import { createVue2Component } from '../frameworkFactory/vueFactory';
// import {createVue3Component} from '../frameworkFactory/vue3Factory';
import {
  getFramework,
  Usage,
  getUsage,
  Framework,
  isString,
  consoleTag,
} from '../utils';

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

declare const window: Window & {
  postMessage: any;
  AmisCustomRenderers: any;
};

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
export function registerRendererByType(
  newRenderer: any,
  rendererOption: string | AmisRendererOption,
) {
  if (!newRenderer) {
    return;
  }
  // 1.默认注册配置参数
  const curRendererOption: AmisRendererOption = {
    type: '',
    usage: Usage.renderer, // 默认为 amis普通渲染器
    weight: 0,
    framework: Framework.react, // 默认为 react 技术栈
  };
  // 2.获取相关配置参数
  if (rendererOption && isString(rendererOption)) {
    // rendererOption为字符串则将其设置为type
    Object.assign(curRendererOption, {
      type: rendererOption,
    });
  } else {
    Object.assign(curRendererOption, rendererOption);
  }

  if (curRendererOption && !curRendererOption.type) {
    console.error(
      `${consoleTag}amis渲染器注册失败，渲染器类型（type）不能为空。`,
    );
  } else {
    // 修正framework数值
    curRendererOption.framework = getFramework(curRendererOption.framework);
    // 修正usage数值
    curRendererOption.usage = getUsage(curRendererOption.usage);
    // 当前支持注册的渲染器类型
    const registerMap: any = {
      renderer: () => {}, // Renderer,
      formitem: () => {}, // FormItem,
      options: () => {}, // OptionsControl,
    };

    // 当前支持的技术栈类型
    const resolverMap: any = {
      react: (i: any) => i,
      vue2: createVue2Component,
      vue3: createVue2Component, // createVue3Component,
      jquery: createJQComponent,
    };
    // 支持多技术栈
    const curRendererComponent =
      resolverMap[curRendererOption.framework](newRenderer);
    // 注册amis渲染器
    if (!registerMap[curRendererOption.usage]) {
      console.error(
        `${consoleTag}amis渲染器注册失败，暂不支持${curRendererOption.usage}组件类型。`,
      );
    } else {
      /*
      // 直接调用amis注册器进行注册
      registerMap[curRendererOption.usage]({
        type: curRendererOption.type,
        weight: curRendererOption.weight,
      })(curRendererComponent);
      */

      // 通过 postMessage 告知 amis 注册一个新的渲染器
      if (window && window.postMessage) {
        const newComponentType = AddAmisCustomRenderer(curRendererOption.type, {
          type: curRendererOption.type,
          weight: curRendererOption.weight,
          usage: curRendererOption.usage,
          framework: curRendererOption.framework,
          component: curRendererComponent,
        });
        if (newComponentType) {
          console.info(
            `${consoleTag}触发注册amis渲染器(${newComponentType})事件`,
          );
          window.postMessage(
            {
              type: 'amis-renderer-register-event',
              eventMsg: `${consoleTag}注册一个自定义amis渲染器`,
              amisRenderer: {
                type: newComponentType,
                weight: curRendererOption.weight,
                usage: curRendererOption.usage,
              },
            },
            '*',
          );
        }
      }
    }
  }
}

function AddAmisCustomRenderer(componentType: string, rendererData: any) {
  if (window && !window.AmisCustomRenderers) {
    window.AmisCustomRenderers = {};
  }
  if (!window.AmisCustomRenderers[componentType]) {
    window.AmisCustomRenderers[componentType] = rendererData;
    return componentType;
  } else {
    console.error(
      `${consoleTag}注册amis渲染器失败，已存在重名渲染器(${componentType})。`,
    );
  }
  return null;
}
