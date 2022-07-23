import * as React from 'react';
import ReactDOM from 'react-dom';
import {Editor, ShortcutKey} from 'amis-editor';
import {__uri} from 'amis-core';
import {Icon} from './icons/index';
// import styles
import 'amis-ui/lib/themes/default.css';
import 'amis-ui/lib/themes/cxd.css';
import './fontawesome-free/all.min.css';
import './fontawesome-free/v4-shims.css';
import './style.scss'; // demo样式文件
import 'amis-editor/dist/style.css';
// import 'amis-editor-core/lib/style.css';

const schema = {
  type: 'page',
  title: 'Simple Form Page',
  body: [
    {
      type: 'form',
      body: [
        {
          type: 'input-text',
          name: 'a',
          label: 'Text'
        }
      ]
    }
  ]
};

const plugins = []; // 通过plugin注入

class SchemaEditorDemo extends React.Component {
  state = {
    preview: localStorage.getItem('editting_preview') ? true : false,
    isMobile: localStorage.getItem('editting_preview_mobile') ? true : false,
    schema: localStorage.getItem('editting_schema')
      ? JSON.parse(localStorage.getItem('editting_schema'))
      : schema
  };
  handleChange = value => {
    localStorage.setItem('editting_schema', JSON.stringify(value));

    this.setState({
      schema: value
    });
  };

  onSave = () => {
    const curSchema = this.state.schema;
    localStorage.setItem('editting_schema', JSON.stringify(curSchema));
  };

  handlePreviewChange = preview => {
    localStorage.setItem('editting_preview', preview ? 'true' : '');

    this.setState({
      preview: !!preview
    });
  };

  togglePreview = () => {
    this.handlePreviewChange(!this.state.preview);
  };

  handleMobileChange = isMobile => {
    localStorage.setItem('editting_preview_mobile', isMobile ? 'true' : '');

    this.setState({
      isMobile: !!isMobile
    });
  };

  clearCache = () => {
    localStorage.removeItem('editting_schema');
    this.setState({
      schema: schema
    });
  };

  render() {
    const {preview, isMobile, schema} = this.state;
    return (
      <div className="Editor-Demo">
        <div className="Editor-header">
          <div className="Editor-title">amis 可视化编辑器</div>
          <div className="Editor-view-mode-group-container">
            <div className="Editor-view-mode-group">
              <div
                className={`Editor-view-mode-btn ${
                  !isMobile ? 'is-active' : ''
                }`}
                onClick={() => {
                  this.handleMobileChange(false);
                }}
              >
                <Icon icon="pc-preview" title="PC模式" />
              </div>
              <div
                className={`Editor-view-mode-btn ${
                  isMobile ? 'is-active' : ''
                }`}
                onClick={() => {
                  this.handleMobileChange(true);
                }}
              >
                <Icon icon="h5-preview" title="移动模式" />
              </div>
            </div>
          </div>

          <div className="Editor-header-actions">
            <ShortcutKey />
            <div
              className={`header-action-btn margin-left-space ${
                preview ? 'primary' : ''
              }`}
              onClick={() => {
                this.togglePreview();
              }}
            >
              {preview ? '编辑' : '预览'}
            </div>
          </div>
        </div>
        <div className="Editor-inner">
          <Editor
            preview={preview}
            isMobile={isMobile}
            value={schema}
            onChange={this.handleChange}
            onPreview={this.handlePreviewChange}
            onSave={this.onSave}
            className="is-fixed"
            theme="cxd"
            showCustomRenderersPanel={true}
            plugins={plugins}
            // iframeUrl={'/examples/editor.html'}
            $schemaUrl={`${location.protocol}//${location.host}/schema.json`}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <SchemaEditorDemo />,
  document.getElementById('root'),
);
