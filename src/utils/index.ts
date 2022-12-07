export const consoleTag = '[amis-widget]'; // 输出标记
export * from './object';
/**
 * 获取技术栈标识
 * 目的：兼容用户非标准写法
 */
export function getFramework(_framework?: string): string {
  let defaultFramework = Framework.react;
  if (!_framework) {
    return defaultFramework;
  }
  let curFramework = _framework.toLowerCase().trim();
  switch (curFramework) {
    case 'jquery':
    case 'jq':
      curFramework = Framework.jquery;
      break;
    case 'vue':
    case 'vue2':
    case 'vue 2':
    case 'vue2.0':
    case 'vue 2.0':
      curFramework = Framework.vue2;
      break;
    case 'vue3':
    case 'vue 3':
    case 'vue3.0':
    case 'vue 3.0':
      curFramework = Framework.vue3;
      console.error(
        'amis-widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。',
      );
      break;
    default:
      curFramework = Framework.react;
  }
  return curFramework;
}

export enum Usage {
  renderer = 'renderer',
  formitem = 'formitem',
  options = 'options',
}
/**
 * 获取amis渲染器类型标识
 * 目的：兼容用户非标准写法
 */
export function getUsage(_usage?: string): string {
  let defaultUsage = Usage.renderer;
  if (!_usage) {
    return defaultUsage;
  }
  let curUsage = _usage.toLowerCase().trim();
  switch (curUsage) {
    case 'renderer':
    case 'renderers':
      curUsage = Usage.renderer;
      break;
    case 'formitem':
    case 'form-item':
    case 'form item':
      curUsage = Usage.formitem;
      break;
    case 'options':
    case 'option':
    case 'formoption':
    case 'form-option':
    case 'form option':
      curUsage = Usage.options;
      break;
    default:
      curUsage = Usage.renderer;
  }
  return curUsage;
}

/**
 * 当前amis-widget支持的技术栈
 * 备注：vue2和vue3不能同时存在
 */
export enum Framework {
  react = 'react',
  vue2 = 'vue2',
  vue3 = 'vue3',
  jquery = 'jquery',
}

// 判断是否缺失editor插件关键字段
export function isEditorPlugin(EditorPluginClass: any) {
  let _isEditorPlugin = false;
  if (!EditorPluginClass) {
    return false;
  }
  const _editorPluginObj = new EditorPluginClass();

  if (!_editorPluginObj.rendererName) {
    console.error(
      `${consoleTag}自定义插件注册失败，关联渲染器（rendererName）不能为空。`,
    );
  } else if (!_editorPluginObj.name) {
    console.error(
      `${consoleTag}自定义插件注册失败，自定义组件名称（name）不能为空。`,
    );
  } else if (!_editorPluginObj.description) {
    console.error(
      `${consoleTag}自定义插件注册失败，自定义组件描述（description）不能为空。`,
    );
  } else if (
    !_editorPluginObj.tags ||
    (Array.isArray(_editorPluginObj.tags) && _editorPluginObj.tags.length === 0)
  ) {
    console.error(
      `${consoleTag}自定义插件注册失败，自定义组件分类（tags）不能为空。`,
    );
  } else if (!_editorPluginObj.panelTitle) {
    console.error(
      `${consoleTag}自定义插件注册失败，自定义组件配置面板Title（panelTitle）不能为空。`,
    );
  } else {
    // 1.设置一个默认icon
    if (!_editorPluginObj.icon) {
      Object.assign(EditorPluginClass.prototype, {
        icon: 'fa fa-file-code-o',
      });
    }
    _isEditorPlugin = true;
  }
  return _isEditorPlugin;
}

// 深拷贝函数
export function deepClone(target: any): any {
  let newObj;
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      newObj = [];
      for (let item in target) {
        newObj.push(deepClone(target[item]));
      }
    } else if (target === null) {
      newObj = null;
    } else if (target.constructor === RegExp) {
      newObj = target;
    } else {
      newObj = {};
      for (let item in target) {
        newObj[item] = deepClone(target[item]);
      }
    }
  } else {
    newObj = target;
  }
  return newObj;
}

// 判断是否是字符串类型
export function isString(str: any): boolean {
  return Object.prototype.toString.call(str).slice(8, -1) === 'String';
}

export function isObject(obj: any): boolean {
  return Object.prototype.toString.call(obj).slice(8, -1) === 'Object';
}
