/**
 * @file 自定义组件所需的 vue3.0 对接
 */
import React from 'react';
import { IScopedContext, RendererProps } from 'amis-core';
export declare function createVue3Component(vueObj: any): {
    new (props: RendererProps, context: IScopedContext): {
        domRef: any;
        app: any;
        vm: any;
        isUnmount: boolean;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        resolveAmisProps(): {
            amisData: any;
            amisFunc: any;
        };
        /**
         * amis事件动作处理:
         * 在这里设置自定义组件对外暴露的动作，其他组件可以通过组件动作触发自定义组件的对应动作
         */
        doAction(action: any, args: object): void;
        render(): JSX.Element;
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
