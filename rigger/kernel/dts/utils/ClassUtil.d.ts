/**
* name
*/
declare module rigger.utils {
    class ClassUtil {
        private static _classArr;
        private static _instanceArr;
        /**
         * 保证单例,检查是否已经存在实例
         * @param cls
         * @param obj
         */
        static makeSureSingleton<T>(cls: any, inst: T): void;
        /**
         * 获取单例
         * @param serviceCls
         */
        static getSingleton(cls: any): any;
        /**
         * 设置单例
         * @param cls
         * @param inst
         */
        static setSingleTon<T>(cls: any, inst: T): void;
    }
}
