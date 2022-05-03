export const npmCustomWidgetTag = ''; // npm自定义组件前缀 npm-custom
export const consoleTag = '[amis-widget]'; // 输出标记

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
        'amis=widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。',
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
    // 2.添加自定义组件前缀
    addNpmCustomPrefixByProto(EditorPluginClass.prototype);
    _isEditorPlugin = true;
  }
  return _isEditorPlugin;
}

// 给当前自定义组件增加特殊前缀
export function addNpmCustomPrefixByProto(_editorPluginPrototype: any) {
  if (!_editorPluginPrototype) {
    return;
  }
  // 关联渲染器字段
  if (
    _editorPluginPrototype.rendererName &&
    _editorPluginPrototype.rendererName.indexOf(npmCustomWidgetTag) < 0
  ) {
    _editorPluginPrototype.rendererName = `${npmCustomWidgetTag}-${_editorPluginPrototype.rendererName}`;
  }
  // 自定义插件名称
  /*if (_editorPluginPrototype.name && _editorPluginPrototype.name.indexOf(npmCustomWidgetTag) < 0) {
    _editorPluginPrototype.name = `${npmCustomWidgetTag}-${_editorPluginPrototype.name}`
  }*/
  // 自定义插件预览对象
  if (
    _editorPluginPrototype.previewSchema &&
    _editorPluginPrototype.previewSchema.type &&
    _editorPluginPrototype.previewSchema.type.indexOf(npmCustomWidgetTag) < 0
  ) {
    _editorPluginPrototype.previewSchema.type = `${npmCustomWidgetTag}-${_editorPluginPrototype.previewSchema.type}`;
  }
  // 自定义插件脚手架
  if (
    _editorPluginPrototype.scaffold &&
    Array.isArray(_editorPluginPrototype.scaffold)
  ) {
    _editorPluginPrototype.scaffold.map((scaffold: any) => {
      if (scaffold.type.indexOf(npmCustomWidgetTag) < 0) {
        scaffold.type = `${npmCustomWidgetTag}-${scaffold.type}`;
      }
      return scaffold;
    });
  } else if (
    _editorPluginPrototype.scaffold &&
    _editorPluginPrototype.scaffold.type &&
    _editorPluginPrototype.scaffold.type.indexOf(npmCustomWidgetTag) < 0
  ) {
    _editorPluginPrototype.scaffold.type = `${npmCustomWidgetTag}-${_editorPluginPrototype.scaffold.type}`;
  }

  return _editorPluginPrototype;
}

// 给当前自定义组件增加特殊前缀
export function addNpmCustomPrefixByClass(
  _editorPluginClass: any,
  _editorPluginObj_: any,
) {
  if (!_editorPluginClass) {
    return;
  }
  let _editorPluginObj = _editorPluginObj_;
  if (!_editorPluginObj_) {
    _editorPluginObj = new _editorPluginClass();
  }
  // 关联渲染器字段
  if (
    _editorPluginObj.rendererName &&
    _editorPluginObj.rendererName.indexOf(npmCustomWidgetTag) < 0
  ) {
    _editorPluginClass.prototype.rendererName = `${npmCustomWidgetTag}-${_editorPluginObj.rendererName}`;
  }
  // 自定义插件名称
  if (
    _editorPluginObj.name &&
    _editorPluginObj.name.indexOf(npmCustomWidgetTag) < 0
  ) {
    _editorPluginClass.prototype.name = `${npmCustomWidgetTag}-${_editorPluginObj.name}`;
  }
  // 自定义插件预览对象
  if (
    _editorPluginObj.previewSchema &&
    _editorPluginObj.previewSchema.type &&
    _editorPluginObj.previewSchema.type.indexOf(npmCustomWidgetTag) < 0
  ) {
    _editorPluginObj.previewSchema.type = `${npmCustomWidgetTag}-${_editorPluginObj.previewSchema.type}`;
    _editorPluginClass.prototype.previewSchema = _editorPluginObj.previewSchema;
  }
  // 自定义插件脚手架
  if (_editorPluginObj.scaffold && Array.isArray(_editorPluginObj.scaffold)) {
    _editorPluginObj.scaffold.map((scaffold: any) => {
      if (scaffold.type.indexOf(npmCustomWidgetTag) < 0) {
        scaffold.type = `${npmCustomWidgetTag}-${scaffold.type}`;
      }
      return scaffold;
    });
    _editorPluginClass.prototype.scaffold = _editorPluginObj.scaffold;
  } else if (
    _editorPluginObj.scaffold &&
    _editorPluginObj.scaffold.type &&
    _editorPluginObj.scaffold.type.indexOf(npmCustomWidgetTag) < 0
  ) {
    _editorPluginObj.scaffold.type = `${npmCustomWidgetTag}-${_editorPluginObj.scaffold.type}`;
    _editorPluginClass.prototype.scaffold = _editorPluginObj.scaffold;
  }
}

// 给当前自定义组件增加特殊前缀（custom-）
export function addCustomPrefixType(_type: string) {
  let curType = _type;
  if (!_type) {
    return curType;
  }
  if (_type && _type.indexOf(npmCustomWidgetTag) < 0) {
    curType = `${npmCustomWidgetTag}-${_type}`;
  }

  return curType;
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
