/**
 * @file 自定义组件所需的 jQuery 对接
 */
import React from 'react';
import 'jquery';
import { IScopedContext, RendererProps } from 'amis-core';
export declare function createJQComponent(jqueryObj: any): {
    new (props: any, context: IScopedContext): {
        dom: any;
        instance: any;
        componentDidMount(): void;
        componentDidUpdate(prevProps: any): void;
        componentWillUnmount(): void;
        /**
        * reload动作处理
        */
        reload(): void;
        /**
         * amis事件动作处理:
         * 在这里设置自定义组件对外暴露的动作，其他组件可以通过组件动作触发自定义组件的对应动作
         */
        doAction(action: any, args: object): void;
        domRef(dom: any): void;
        _render(): void;
        render(): React.JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RendererProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<RendererProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<RendererProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<RendererProps>, prevState: Readonly<{}>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<RendererProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RendererProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<RendererProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<RendererProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType: React.Context<IScopedContext>;
} | undefined;
